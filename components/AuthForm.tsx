import { FC, useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import socketAPI from "../api/socketAPI";
import { PayloadLogin, PayloadLoginResponse, SocketMessage, SocketMessageType } from "../types/socketAPITypes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    row: {
        width: "100%",
        marginTop: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: "bold",
    },
    inputField: {
        padding: 5,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    button: {
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ee3124",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

const AuthForm: FC = (): JSX.Element => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function buttonPressHandler() {
        if (userName && password) {
            socketAPI.sendMessage({
                type: SocketMessageType.LOGIN,
                payload: {
                    userName: userName,
                    password: password,
                } as PayloadLogin,
            });
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.label}>Имя пользователя:</Text>
                    <TextInput
                        style={styles.inputField}
                        cursorColor={"black"}
                        value={userName}
                        onChangeText={(text) => setUserName(text)}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Пароль:</Text>
                    <TextInput
                        style={styles.inputField}
                        cursorColor={"black"}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.button} onPress={buttonPressHandler}>
                        <Text style={styles.buttonText}>Войти</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default AuthForm;
