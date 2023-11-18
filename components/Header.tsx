import { FC } from "react";
import { StyleSheet, View, Pressable, Text, Image } from "react-native";
import menuStore from "../store/menuStore";

// @ts-ignore
import MenuShowImageSource from "../assets/menu-show.png";
// @ts-ignore
import Real2MiniLogoImageSource from "../assets/real2-mini-logo.png";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 9,
    },
    menuShowButton: {
        marginLeft: 20,
    },
    miniLogo: {
        marginLeft: 3,
        marginRight: 3,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

const Header: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.menuShowButton} onPress={() => menuStore.toggleMenu(true)}>
                <Image source={MenuShowImageSource} />
            </Pressable>
            <Text style={[styles.text, { marginLeft: 20 }]}>The Real</Text>
            <Image style={styles.miniLogo} source={Real2MiniLogoImageSource} />
        </View>
    );
};

export default Header;
