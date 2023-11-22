import { FC } from "react";
import { View, Text } from "react-native";

import StartingScreen from "./screens/StartingScreen";
import LoginScreen from "./screens/LoginScreen";

const App: FC = (): JSX.Element => {
    return <LoginScreen />;
};

export default App;
