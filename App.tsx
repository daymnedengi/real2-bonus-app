import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigationStore, selectPathName } from "./store/navigationStore";
import { useLocalUserStore, selectIsAuth } from "./store/localUserStore";
import { PayloadIncomingPushNotification, socketAPI, SocketMessage, SocketMessageType } from "./api/socketAPI";
import networkService from "./services/networkService";
import notificationService from "./services/notificationService";

import RootLayout from "./layouts/RootLayout";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
    const [modalWindowText, setModalWindowText] = useState<string | null>(null);
    const navigationPathName = useNavigationStore(selectPathName);
    const localUserIsAuth = useLocalUserStore(selectIsAuth);

    useEffect(() => {
        async function checkNetworkConnection() {
            if ((await networkService.isNetworkConnection()) == false) {
                setModalWindowText(
                    "Упс... Походу не удалось подключиться к сети. Пожалуйста проверьте настройки подключения!"
                );
            }
        }

        function socketConnectionCloseHandler() {
            setModalWindowText(
                "Не удалось установить соединение с сервером... Возможно идут технические работы! Попробуйте перезапустить приложение или повторите попытку по позже!"
            );
        }

        function socketMessageHandler(message: SocketMessage) {
            if (message.type == SocketMessageType.INCOMING_PUSH_NOTIFICATION) {
                const { title, body } = message.payload as PayloadIncomingPushNotification;
                notificationService.createPush(title, body);
            }
        }

        checkNetworkConnection();
        socketAPI.addConnectionCloseListener(socketConnectionCloseHandler);
        socketAPI.addIncomingMessageListener(socketMessageHandler);

        return () => {
            socketAPI.removeConnectionCloseListener(socketConnectionCloseHandler);
            socketAPI.removeIncomingMessageListener(socketMessageHandler);
        };
    }, []);

    if (modalWindowText) {
        return (
            <RootLayout>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{modalWindowText}</Text>
                </View>
            </RootLayout>
        );
    }

    if (!localUserIsAuth()) {
        return (
            <RootLayout>
                <LoginScreen />
            </RootLayout>
        );
    }

    return (
        <RootLayout>
            {navigationPathName == "/" && <MainScreen />}
            {navigationPathName.startsWith("/profile") && <ProfileScreen />}
            {navigationPathName.startsWith("/settings") && <SettingsScreen />}
        </RootLayout>
    );
}
