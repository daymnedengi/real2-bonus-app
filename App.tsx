import { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";

import socketAPI from "./api/socketAPI";
import networkService from "./services/networkService";

import navigationStore from "./store/navigationStore";
import localUserStore from "./store/localUserStore";

import RootLayout from "./layouts/RootLayout";
import MainScreen from "./screens/MainScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LoginScreen from "./screens/LoginScreen";

import LoadingBounce from "./components/LoadingBounce";

const App: FC = observer((): JSX.Element => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [modalWindowText, setModalWindowText] = useState<string>("");

    useEffect(() => {
        async function checkNetworkConnection() {
            if (await networkService.isNetworkConnection()) {
                socketAPI.connectToServer();
            } else {
                setModalWindowText(
                    "Нет подключения к сети интернет. Пожалуйста проверьте настройки устройства и перезапустите приложение."
                );
            }
        }

        function socketConnectionOpenHandler() {
            setLoading(false);
        }

        function socketConnectionCloseHandler() {
            setModalWindowText(
                "Не удалось подключиться к серверу... Возможно идут технические работы. Попробуйте перезапустить приложение или повторите попытку по позже."
            );
        }

        checkNetworkConnection();
        socketAPI.addConnectionOpenListener(socketConnectionOpenHandler);
        socketAPI.addConnectionCloseListener(socketConnectionCloseHandler);

        return () => {
            socketAPI.removeConnectionOpenListener(socketConnectionOpenHandler);
            socketAPI.removeConnectionCloseListener(socketConnectionCloseHandler);
        };
    }, []);

    if (modalWindowText) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
                <Text>{modalWindowText}</Text>
            </View>
        );
    }

    if (isLoading) {
        return <LoadingBounce />;
    }

    if (!localUserStore.isAuth) {
        return <LoginScreen />;
    }

    return (
        <RootLayout>
            {navigationStore.pathName == "/" && <MainScreen />}
            {navigationStore.pathName.startsWith("/notifications") && <NotificationsScreen />}
            {navigationStore.pathName.startsWith("/profile") && <ProfileScreen />}
        </RootLayout>
    );
});

export default App;
