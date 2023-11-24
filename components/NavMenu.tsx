import { FC } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";

// @ts-ignore
import HomeImageSource from "../assets/home.png";
// @ts-ignore
import UserImageSoure from "../assets/user.png";
// @ts-ignore
import BellImageSource from "../assets/bell.png";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#E6E7E8",
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 15,
        marginRight: 15,
    },
});

const NavMenu: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Pressable style={[styles.item, { borderTopWidth: 3, borderTopColor: "#ffc708" }]}>
                <Image style={{ tintColor: "#ffc708" }} source={HomeImageSource} />
            </Pressable>
            <Pressable style={styles.item}>
                <Image source={BellImageSource} />
            </Pressable>
            <Pressable style={styles.item}>
                <Image source={UserImageSoure} />
            </Pressable>
        </View>
    );
};

export default NavMenu;
