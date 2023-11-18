import { FC, ReactNode } from "react";
import { StatusBar, View } from "react-native";

import Header from "../components/Header";
import Menu from "../components/Menu";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }): JSX.Element => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header />
            <Menu />
            {children}
        </View>
    );
};

export default RootLayout;
