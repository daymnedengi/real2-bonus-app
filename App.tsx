import { StatusBar, StyleSheet, View } from "react-native";
import { useNavigationStore, selectPathName } from "./store/navigationStore";

import MainScreen from "./screens/MainScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import LoginScreen from "./screens/LoginScreen";

import Header from "./components/Header";
import Menu from "./components/Menu";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default function App() {
    const navigationPathName = useNavigationStore(selectPathName);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header />
            <Menu />
            {navigationPathName == "/" && <MainScreen />}
            {navigationPathName.startsWith("/profile") && <ProfileScreen />}
            {navigationPathName.startsWith("/settings") && <SettingsScreen />}
            {navigationPathName.startsWith("/login") && <LoginScreen />}
        </View>
    );
}
