import { FC, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";

import localUserStore from "./store/localUserStore";
import navigationStore from "./store/navigationStore";

import socketAPI from "./api/socketAPI";
import networkService from "./services/networkService";
import notificationService from "./services/notificationService";

import {
    SocketMessage,
    SocketMessageType,
    PayloadIncomingPushNotification,
    PayloadAuthResponse,
} from "./types/socketAPITypes";

import RootLayout from "./layouts/RootLayout";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

import LoadingSpinner from "./components/LoadingSpinner";

const App: FC = observer((): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // нужно ли показать окно загрузки
    const [modalWindowText, setModalWindowText] = useState<string>(""); // текст для модального окна (если текст установлен, показывается окно)

    useEffect(() => {
        // функция проверяет есть ли подключение к сети интернет
        async function checkNetworkConnection() {
            // проверяем подключение к сети
            // если нет подключение, то показываем модального окно
            if ((await networkService.isNetworkConnection()) == false) {
                setModalWindowText("Не удалось подключиться к сети... Пожалуйста проверьте настройки подключения!");
                setIsLoading(false);
            } else {
                socketAPI.connectToServer();
            }
        }

        // функция вызывается когда удалось подключиться к серверу
        // здесь скрываем окно загрузки, после чего неавторизованному пользователю выведется форма авторизации
        function socketConnectionOpenHandler() {
            setIsLoading(false);
        }

        // функция вызывает когда было потеряно соединение с сервером
        function socketConnectionCloseHandler() {
            // устанавливаем текст, чтобы вывелось модальное окно
            setModalWindowText(
                "Не удалось установить соединение с сервером... Возможно идут технические работы! Попробуйте перезапустить приложение или повторите попытку по позже!"
            );
            // скрываем окно загруки
            setIsLoading(false);
        }

        // функция обрабатывает входящение сообщения сокета
        function socketIncomingMessageHandler(message: SocketMessage) {
            console.log(message);
            // если сообщение это ответ на запрос авторизации
            if (message.type == SocketMessageType.AUTH_RESPONSE) {
                // тут такая проблема
                // запрос на авторизацию проходит в components/AuthForm
                // но так как происходит перерендер из за того, что показывается окно загрузки (setIsLoading)
                // то в компоненте не получится повесить обработчик сообщения
                // так как сообщение обрабатывается раньше, чем происходит перерендер и вызов useEffect
                // (возможно я мог бы что то нашаманить с мемоизацией, но мне лень)

                // получаем статус авторизации и токен
                // если авторизация прошла успешно, то success == true & token != null
                const { success, token } = message.payload as PayloadAuthResponse;
                if (success && token) {
                    // скрываем окно загрузки, так как в socketOutcomingMessageHandler мы его показываем
                    // если исходящий пакет - это запрос на авторизацию
                    setIsLoading(false);

                    // устанавливаем токен и перенаправляем пользователя на главную страницу
                    localUserStore.login(token);
                    navigationStore.navigate("/");
                } else {
                    // если авторизация прошла неудачно показываем модальное окно
                    // (ИСПРАВЬ ЭТО НА ВЫВОД ФОРМЫ АВТОРИЗАЦИИ)
                    setModalWindowText(
                        "Произошла ошибка при авторизации на сервере! Попробуйте перезапустить приложени"
                    );
                }
            } else if (message.type == SocketMessageType.INCOMING_PUSH_NOTIFICATION) {
                const { title, body } = message.payload as PayloadIncomingPushNotification;
                notificationService.createPush(title, body);
            }
        }

        // функция является обработчиком исходящих сообщений сокета
        function socketOutcomingMessageHandler(message: SocketMessage) {
            // если это запрос на авторизацию на сервере, выводим окно загрузки приложения
            if (message.type == SocketMessageType.AUTH) {
                setIsLoading(true);
            }
        }

        // проверяем подключение к сети
        checkNetworkConnection();
        socketAPI.addConnectionOpenListener(socketConnectionOpenHandler);
        socketAPI.addConnectionCloseListener(socketConnectionCloseHandler);
        socketAPI.addIncomingMessageListener(socketIncomingMessageHandler);
        socketAPI.addOutcomingMessageListener(socketOutcomingMessageHandler);

        return () => {
            socketAPI.removeConnectionOpenListener(socketConnectionOpenHandler);
            socketAPI.removeConnectionCloseListener(socketConnectionCloseHandler);
            socketAPI.removeIncomingMessageListener(socketIncomingMessageHandler);
            socketAPI.removeOutcomingMessageListener(socketOutcomingMessageHandler);
        };
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (modalWindowText) {
        return (
            <RootLayout>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{modalWindowText}</Text>
                </View>
            </RootLayout>
        );
    }

    if (!localUserStore.isAuth) {
        return (
            <RootLayout>
                <LoginScreen />
            </RootLayout>
        );
    }

    return (
        <RootLayout>
            {navigationStore.pathName == "/" && <MainScreen />}
            {navigationStore.pathName.startsWith("/profile") && <ProfileScreen />}
            {navigationStore.pathName.startsWith("/settings") && <SettingsScreen />}
        </RootLayout>
    );
});

export default App;
