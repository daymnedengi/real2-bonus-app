import { FC, useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import socketAPI from "../api/socketAPI";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20,
        backgroundColor: "rgb(250, 250, 250)",
        borderRadius: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
    },
    inputFieldWrapper: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    inputFieldLabel: {
        fontSize: 18,
    },
    inputField: {
        flex: 1,
        marginLeft: 10,
        padding: 5,
        backgroundColor: "rgb(250, 250, 250)",
        borderWidth: 1,
        borderColor: "rgb(200, 200, 200)",
        borderRadius: 10,
        fontSize: 18,
    },
    button: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "rgb(255, 224, 64)",
        borderRadius: 10,
    },
    buttonText: {
        color: "rgb(29, 34, 46)",
        fontSize: 16,
    },
});

const AuthForm: FC = (): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isError, setError] = useState<boolean>(false);

    function sendSMSCode() {
        if (phoneNumber.search(/^9[0-9]{9}$/) == -1) {
            setError(true);
            return;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Номер телефона:</Text>
            <View style={styles.inputFieldWrapper}>
                <Text style={styles.inputFieldLabel}>+7</Text>
                <TextInput
                    style={
                        isError
                            ? [
                                  styles.inputField,
                                  { backgroundColor: "rgb(255, 200, 200)", borderColor: "rgb(255, 0, 0)" },
                              ]
                            : styles.inputField
                    }
                    cursorColor={"black"}
                    inputMode="tel"
                    maxLength={10}
                    onChangeText={(text) => setPhoneNumber(text)}
                />
            </View>
            <Pressable style={styles.button} onPress={sendSMSCode}>
                <Text style={styles.buttonText}>Получить код</Text>
            </Pressable>
        </View>
    );
};

export default AuthForm;
