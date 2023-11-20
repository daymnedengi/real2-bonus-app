import { FC } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react-lite";

import navigationStore from "./store/navigationStore";

import RootLayout from "./layouts/RootLayout";
import MainScreen from "./screens/MainScreen";

const App: FC = observer((): JSX.Element => {
    return <RootLayout>{navigationStore.pathName == "/" && <MainScreen />}</RootLayout>;
});

export default App;
