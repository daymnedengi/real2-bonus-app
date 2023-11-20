import { FC } from "react";
import { StyleSheet, View, Image, Pressable } from "react-native";
import { observer } from "mobx-react-lite";
import navigationStore from "../store/navigationStore";

// @ts-ignore
import NavMenuHomeImageSource from "../assets/nav-menu-home.png";
// @ts-ignore
import NavMenuBellImageSource from "../assets/nav-menu-bell.png";
// @ts-ignore
import NavMenuUserImageSource from "../assets/nav-menu-user.png";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
    },
    item: {
        flex: 1,
        borderTopWidth: 5,
        borderTopColor: "black",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 28,
        height: 28,
    },
});

const NavMenu: FC = observer((): JSX.Element => {
    return (
        <View style={styles.container}>
            <View
                style={
                    navigationStore.pathName == "/"
                        ? [styles.item, { borderTopColor: "rgb(230, 230, 0)" }]
                        : styles.item
                }
            >
                <Pressable style={styles.button} onPress={() => navigationStore.navigate("/")}>
                    <Image
                        style={
                            navigationStore.pathName == "/"
                                ? [styles.image, { tintColor: "rgb(230, 230, 0)" }]
                                : styles.image
                        }
                        source={NavMenuHomeImageSource}
                    />
                </Pressable>
            </View>
            <View
                style={
                    navigationStore.pathName.startsWith("/notifications")
                        ? [styles.item, { borderTopColor: "rgb(230, 230, 0)" }]
                        : styles.item
                }
            >
                <Pressable style={styles.button} onPress={() => navigationStore.navigate("/notifications")}>
                    <Image
                        style={
                            navigationStore.pathName.startsWith("/notifications")
                                ? [styles.image, { tintColor: "rgb(230, 230, 0)" }]
                                : styles.image
                        }
                        source={NavMenuBellImageSource}
                    />
                </Pressable>
            </View>
            <View
                style={
                    navigationStore.pathName.startsWith("/profile")
                        ? [styles.item, { borderTopColor: "rgb(230, 230, 0)" }]
                        : styles.item
                }
            >
                <Pressable style={styles.button} onPress={() => navigationStore.navigate("/profile")}>
                    <Image
                        style={
                            navigationStore.pathName.startsWith("/profile")
                                ? [styles.image, { tintColor: "rgb(230, 230, 0)" }]
                                : styles.image
                        }
                        source={NavMenuUserImageSource}
                    />
                </Pressable>
            </View>
        </View>
    );
});

export default NavMenu;
