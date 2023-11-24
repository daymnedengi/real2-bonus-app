import { FC, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";

import navigationStore from "../store/navigationStore";

interface PhoneNumberConfirmationProps {
    phoneNumber: string;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    scrollViewWrapper: {
        flexGrow: 1,
        justifyContent: "center",
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
    inputField: {
        width: "100%",
        marginTop: 25,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
        borderWidth: 1,
        borderColor: "#919395",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 22,
    },
    inputFieldError: {
        marginTop: 20,
        textAlign: "center",
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

const PhoneNumberConfirmation: FC<PhoneNumberConfirmationProps> = observer((props): JSX.Element => {
    const [isCodeError, setIsCodeError] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
                <Text style={styles.title}>Вход</Text>
                <Text style={styles.description}>Код подтверждения отправлен на номер +7 {props.phoneNumber}</Text>
                <TextInput
                    style={isCodeError ? [styles.inputField, { borderColor: "#ED1C24" }] : styles.inputField}
                    placeholder="Введите код подтверждения"
                    placeholderTextColor="#999B9E"
                    inputMode="numeric"
                    maxLength={4}
                />
                {isCodeError && <Text style={styles.inputFieldError}>Неверный код</Text>}
                <Text style={[styles.description, { marginTop: 25, color: "#5D5E60" }]}>
                    Обратите внимание, что иногда СМС приходят с задержкой
                </Text>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        setIsCodeError((prevState) => !prevState);
                    }}
                >
                    <Text style={styles.buttonText}>ПОДТВЕРДИТЬ</Text>
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: "#E7E8E9" }]}>
                    <Text style={[styles.buttonText, { color: "#909294" }]}>Повторить через 59 сек.</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, { backgroundColor: "white" }]}
                    onPress={() => {
                        navigationStore.navigate("/login/checkPhoneNumber");
                    }}
                >
                    <Text style={[styles.buttonText, { color: "#FBAE18" }]}>ИЗМЕНИТЬ НОМЕР</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
});

export default PhoneNumberConfirmation;
