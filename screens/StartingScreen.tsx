import { FC } from "react";
import { View, Image } from "react-native";

// @ts-ignore
import CashBackRect from "../assets/cash-back-rect.png";
// @ts-ignore
import Real2MobilePhoneLogo from "../assets/real2-mobile-phone-logo.png";

const StartingScreen: FC = (): JSX.Element => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
            <Image source={CashBackRect} />
            <Image style={{ marginTop: 100 }} source={Real2MobilePhoneLogo} />
        </View>
    );
};

export default StartingScreen;
