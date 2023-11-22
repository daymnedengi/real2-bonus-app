import { FC, useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { observer } from "mobx-react-lite";

import loginStore from "../store/loginStore";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    description: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 14,
    },
    inputFieldBlock: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: "rgb(200, 200, 200)",
        borderRadius: 10,
    },
    inputFieldLabel: {
        fontSize: 36,
    },
    inputField: {
        marginLeft: 10,
        fontSize: 36,
    },
    inputFieldError: {
        marginTop: 10,
        color: "#ED1C24",
        fontSize: 15,
    },
    button: {
        width: "100%",
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#FFE500",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 17,
    },
});

const CheckPhoneNumber: FC = observer((): JSX.Element => {
    const [isPhoneNumberError, setIsPhoneNumberError] = useState<boolean>(false);
    const prevPhoneNumberLength = useRef<number>(0);

    // ^([А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+){8,64}$ - регулярка для ФИО
    // ^9[0-9]{9}$ - регуляка для номера телефона

    function formatingPhoneNumber(value: string) {
        if (value != "" && !value.startsWith("(")) {
            value = "(" + value;
        }

        if (value.length == 4 && value.length > prevPhoneNumberLength.current && value.indexOf(")") != 4) {
            value = value.slice(0, 4) + ")" + value.slice(4);
        }

        if (value.length == 5 && value.length > prevPhoneNumberLength.current && value.indexOf(" ") != 5) {
            value = value.slice(0, 5) + " " + value.slice(5);
        }

        if (value.length == 9 && value.length > prevPhoneNumberLength.current && value.indexOf("-") != 9) {
            value = value.slice(0, 9) + "-" + value.slice(9);
        }

        if (value.length == 12 && value.length > prevPhoneNumberLength.current && value.indexOf("-") != 12) {
            value = value.slice(0, 12) + "-" + value.slice(12);
        }

        prevPhoneNumberLength.current = value.length;
        return value;
    }

    function sendSMSCode() {
        const number = loginStore.phoneNumber.replace(/\D/g, "");

        if (number.search(/^9[0-9]{9}$/) == -1) {
            setIsPhoneNumberError(true);
            return;
        }

        if (isPhoneNumberError == true) {
            setIsPhoneNumberError(false);
        }

        loginStore.setStage("PHONE_NUMBER_CONFIRMATION");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вход</Text>
            <Text style={styles.description}>
                Введите ваш номер телефона, на указанный номер придет СМС-код для подтверждения входа
            </Text>
            <View
                style={
                    isPhoneNumberError
                        ? [styles.inputFieldBlock, { borderWidth: 1, borderColor: "#ED1C24" }]
                        : styles.inputFieldBlock
                }
            >
                <Text style={styles.inputFieldLabel}>+7</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="(999) 000-00-00"
                    placeholderTextColor={"rgb(200, 200, 200)"}
                    inputMode="tel"
                    maxLength={15}
                    value={loginStore.phoneNumber}
                    onChangeText={(text) => loginStore.setPhoneNumber(formatingPhoneNumber(text))}
                />
            </View>
            {isPhoneNumberError && <Text style={styles.inputFieldError}>Неверный номер телефона</Text>}
            <Pressable style={styles.button} onPress={sendSMSCode}>
                <Text style={styles.buttonText}>ПОЛУЧИТЬ СМС-КОД</Text>
            </Pressable>
        </View>
    );
});

export default CheckPhoneNumber;
