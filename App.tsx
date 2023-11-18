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
    PayloadLogin,
    PayloadLoginResponse,
} from "./types/socketAPITypes";

import RootLayout from "./layouts/RootLayout";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

import LoadingSpinner from "./components/LoadingSpinner";

const App: FC = observer((): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [modalWindowText, setModalWindowText] = useState<string>("");

    useEffect(() => {
        async function checkNetworkConnection() {
            if ((await networkService.isNetworkConnection()) == false) {
                setModalWindowText("Не удалось подключиться к сети... Пожалуйста проверьте настройки подключения!");
                setIsLoading(false);
            } else {
                socketAPI.connectToServer();
            }
        }

        function socketConnectionOpenHandler() {
            setIsLoading(false);
        }

        function socketConnectionCloseHandler() {
            setModalWindowText(
                "Не удалось установить соединение с сервером... Возможно идут технические работы! Попробуйте перезапустить приложение или повторите попытку по позже!"
            );
            setIsLoading(false);
        }

        function socketIncomingMessageHandler(message: SocketMessage) {
            if (message.type == SocketMessageType.LOGIN_RESPONSE) {
                console.log("app login response");
                const { success, token } = message.payload as PayloadLoginResponse;
                if (success && token) {
                    setIsLoading(false);
                    localUserStore.login(token);
                    navigationStore.navigate("/");
                } else {
                    setModalWindowText(
                        "Произошла ошибка при авторизации на сервере! Попробуйте перезапустить приложени"
                    );
                }
            } else if (message.type == SocketMessageType.INCOMING_PUSH_NOTIFICATION) {
                const { title, body } = message.payload as PayloadIncomingPushNotification;
                notificationService.createPush(title, body);
            }
        }

        function socketOutcomingMessageHandler(message: SocketMessage) {
            if (message.type == SocketMessageType.LOGIN) {
                setIsLoading(true);
            }
        }

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

    return <LoadingSpinner />;

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
