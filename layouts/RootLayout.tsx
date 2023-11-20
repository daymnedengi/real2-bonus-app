import { FC, ReactNode } from "react";
import { StatusBar, View } from "react-native";

import NavMenu from "../components/NavMenu";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }): JSX.Element => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={{ flex: 1 }}>{children}</View>
            <NavMenu />
        </View>
    );
};

export default RootLayout;
