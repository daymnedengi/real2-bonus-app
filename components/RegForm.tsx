import { FC, useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable, TextInput, ScrollView } from "react-native";

import socketAPI from "../api/socketAPI";
import {
    SocketMessage,
    SocketMessageType,
    PayloadSendSMSRegCode,
    PayloadSendSMSRegCodeResponse,
} from "../types/socketAPITypes";

import LoadingPoint from "./LoadingPoint";

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

const RegForm: FC = (): JSX.Element => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>("Магомедов Рамазан Магомедсалихович");
    const [phoneNumber, setPhoneNumber] = useState<string>("9618328284");

    const [isFullNameError, setFullNameError] = useState<boolean>(false);
    const [isPhoneNumberError, setPhoneNumberError] = useState<boolean>(false);

    // ^([А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+){0,64}$ - регулярка для име
    // ^9[0-9]{9}$ - руглярка для номера телефона

    function sendSMSCode() {
        if (fullName.search(/^([А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+){0,64}$/) == -1) {
            setFullNameError(true);
            return;
        } else {
            setFullNameError(false);
        }

        if (phoneNumber.search(/^9[0-9]{9}$/) == -1) {
            setPhoneNumberError(true);
            return;
        } else {
            setPhoneNumberError(false);
        }

        socketAPI.sendMessage({
            type: SocketMessageType.SEND_SMS_REG_CODE,
            payload: { phoneNumber: phoneNumber } as PayloadSendSMSRegCode,
        });
    }

    useEffect(() => {
        function socketIncomingMessageHandler(message: SocketMessage) {
            if (message.type == SocketMessageType.SEND_SMS_REG_CODE_RESPONSE) {
                const { success, code } = message.payload as PayloadSendSMSRegCodeResponse;
                console.log(success, code);
                setLoading(false);
            }
        }

        function socketOutcomingMessageHandler(message: SocketMessage) {
            if (message.type == SocketMessageType.SEND_SMS_REG_CODE) {
                setLoading(true);
            }
        }

        socketAPI.addIncomingMessageListener(socketIncomingMessageHandler);
        socketAPI.addOutcomingMessageListener(socketOutcomingMessageHandler);

        return () => {
            socketAPI.addIncomingMessageListener(socketIncomingMessageHandler);
            socketAPI.addOutcomingMessageListener(socketOutcomingMessageHandler);
        };
    }, []);

    if (isLoading) {
        return <LoadingPoint />;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Полное имя:</Text>
                <View style={styles.inputFieldWrapper}>
                    <TextInput
                        style={
                            isFullNameError
                                ? [
                                      styles.inputField,
                                      { backgroundColor: "rgb(255, 200, 200)", borderColor: "rgb(255, 0, 0)" },
                                  ]
                                : styles.inputField
                        }
                        cursorColor={"black"}
                        maxLength={64}
                        value={fullName}
                        onChangeText={(text) => setFullName(text)}
                    />
                </View>
                <Text style={styles.label}>Номер телефона:</Text>
                <View style={styles.inputFieldWrapper}>
                    <Text style={styles.inputFieldLabel}>+7</Text>
                    <TextInput
                        style={
                            isPhoneNumberError
                                ? [
                                      styles.inputField,
                                      { backgroundColor: "rgb(255, 200, 200)", borderColor: "rgb(255, 0, 0)" },
                                  ]
                                : styles.inputField
                        }
                        cursorColor={"black"}
                        inputMode="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                </View>
                <Pressable style={styles.button} onPress={sendSMSCode}>
                    <Text style={styles.buttonText}>Получить код</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

export default RegForm;
