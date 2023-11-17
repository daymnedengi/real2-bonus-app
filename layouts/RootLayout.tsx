import { ReactNode } from "react";
import { StatusBar, View } from "react-native";

import Header from "../components/Header";
import Menu from "../components/Menu";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Header />
            <Menu />
            {children}
        </View>
    );
}
