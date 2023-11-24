import { FC, ReactNode } from "react";
import { StatusBar, View } from "react-native";

import NavMenu from "../components/NavMenu";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = (props): JSX.Element => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor={"white"} barStyle="dark-content" />
            {props.children}
            <NavMenu />
        </View>
    );
};

export default RootLayout;
