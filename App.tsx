import { FC } from "react";

import RootLayout from "./layouts/RootLayout";

import StartingScreen from "./screens/StartingScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App: FC = (): JSX.Element => {
    return (
        <RootLayout>
            <ProfileScreen />
        </RootLayout>
    );
};

export default App;
