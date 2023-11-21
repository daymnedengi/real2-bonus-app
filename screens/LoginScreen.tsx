import { FC, useState, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, Image, Keyboard } from "react-native";

// @ts-ignore
import Real2LogoImageSource from "../assets/real2-logo.png";

import RegForm from "../components/RegForm";
import AuthForm from "../components/AuthForm";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    switchBlock: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    switchSeparator: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 24,
    },
    switchButton: {
        padding: 5,
        borderRadius: 10,
    },
    switchButtonText: {
        fontSize: 15,
    },
});

const LoginScreen: FC = (): JSX.Element => {
    const [isAuth, setAuth] = useState<boolean>(false);
    const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            setIsShowKeyboard(true);
        });
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            setIsShowKeyboard(false);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            {!isShowKeyboard && <Image source={Real2LogoImageSource} />}
            <View style={styles.switchBlock}>
                <Pressable
                    style={
                        !isAuth ? [styles.switchButton, { backgroundColor: "rgb(255, 224, 64)" }] : styles.switchButton
                    }
                    onPress={() => setAuth(false)}
                >
                    <Text style={styles.switchButtonText}>Регистрация</Text>
                </Pressable>
                <Text style={styles.switchSeparator}>/</Text>
                <Pressable
                    style={
                        isAuth ? [styles.switchButton, { backgroundColor: "rgb(255, 224, 64)" }] : styles.switchButton
                    }
                    onPress={() => setAuth(true)}
                >
                    <Text style={styles.switchButtonText}>Авторизация</Text>
                </Pressable>
            </View>
            {isAuth ? <AuthForm /> : <RegForm />}
        </View>
    );
};

export default LoginScreen;
