import { FC } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { observer } from "mobx-react-lite";
import menuStore from "../store/menuStore";
import navigationStore from "../store/navigationStore";
import localUserStore from "../store/localUserStore";

// @ts-ignore
import MenuCloseImageSource from "../assets/menu-close.png";
// @ts-ignore
import MenuHomeImageSource from "../assets/menu-home.png";
// @ts-ignore
import MenuProfileImageSource from "../assets/menu-profile.png";
// @ts-ignore
import MenuSettingsImageSource from "../assets/menu-settings.png";
// @ts-ignore
import MenuLogoutImageSource from "../assets/menu-logout.png";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        zIndex: 10,
    },
    block: {
        width: "90%",
        maxWidth: 350,
        height: "100%",
        paddingTop: 20,
        position: "relative",
        backgroundColor: "white",
    },
    closeButton: {
        position: "absolute",
        top: 15,
        right: 15,
        zIndex: 1,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    itemText: {
        marginLeft: 20,
        fontSize: 16,
    },
});

const Menu: FC = observer((): JSX.Element => {
    function goto(path: string) {
        menuStore.toggleMenu(false);
        navigationStore.navigate(path);
    }

    if (!menuStore.showMenu) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Pressable style={styles.closeButton} onPress={() => menuStore.toggleMenu(false)}>
                    <Image source={MenuCloseImageSource} />
                </Pressable>
                <Pressable style={styles.item} onPress={() => goto("/")}>
                    <Image source={MenuHomeImageSource} />
                    <Text style={styles.itemText}>Главная</Text>
                </Pressable>
                <Pressable style={styles.item} onPress={() => goto("/profile")}>
                    <Image source={MenuProfileImageSource} />
                    <Text style={styles.itemText}>Профиль</Text>
                </Pressable>
                <Pressable style={styles.item} onPress={() => goto("/settings")}>
                    <Image source={MenuSettingsImageSource} />
                    <Text style={styles.itemText}>Настройки</Text>
                </Pressable>
                <Pressable
                    style={styles.item}
                    onPress={() => {
                        localUserStore.logout();
                        goto("");
                    }}
                >
                    <Image source={MenuLogoutImageSource} />
                    <Text style={styles.itemText}>Выход</Text>
                </Pressable>
            </View>
        </View>
    );
});

export default Menu;
