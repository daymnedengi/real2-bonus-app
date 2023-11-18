import { FC, useState } from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";

import RegForm from "../components/RegForm";
import AuthForm from "../components/AuthForm";

// @ts-ignore
import Real2LogoImageSource from "../assets/real2-logo.png";

interface LoginScreenSwitchProps {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    logoImage: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    screenSwitch: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    screenSwitchSeparator: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 24,
    },
    screenSwitchButton: {
        padding: 5,
    },
    screenSwitchButtonActive: {
        padding: 5,
        backgroundColor: "#ee3124",
        borderRadius: 5,
    },
    screenSwitchButtonText: {
        fontSize: 16,
    },
    screenSwitchButtonActiveText: {
        color: "white",
        fontSize: 16,
    },
});

const LoginScreenSwitch: FC<LoginScreenSwitchProps> = (props: LoginScreenSwitchProps): JSX.Element => {
    return (
        <View style={styles.screenSwitch}>
            <Pressable
                style={!props.isAuth ? styles.screenSwitchButtonActive : styles.screenSwitchButton}
                onPress={() => props.setIsAuth(false)}
            >
                <Text style={!props.isAuth ? styles.screenSwitchButtonActiveText : styles.screenSwitchButtonText}>
                    Регистрация
                </Text>
            </Pressable>
            <Text style={styles.screenSwitchSeparator}>/</Text>
            <Pressable
                style={props.isAuth ? styles.screenSwitchButtonActive : styles.screenSwitchButton}
                onPress={() => props.setIsAuth(true)}
            >
                <Text style={props.isAuth ? styles.screenSwitchButtonActiveText : styles.screenSwitchButtonText}>
                    Авторизация
                </Text>
            </Pressable>
        </View>
    );
};

const LoginScreen: FC = (): JSX.Element => {
    const [isAuth, setIsAuth] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={Real2LogoImageSource} />
            <LoginScreenSwitch isAuth={isAuth} setIsAuth={setIsAuth} />
            {!isAuth && <RegForm />}
            {isAuth && <AuthForm />}
        </View>
    );
};

export default LoginScreen;
