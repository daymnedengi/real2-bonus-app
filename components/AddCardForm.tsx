import { FC, useState } from "react";
import { StyleSheet, View, Text, Pressable, Image, TextInput } from "react-native";

// @ts-ignore
import CloseButtonImageSource from "../assets/close-button.png";

interface AddCardFormProps {
    show: boolean;
    setShow: (value: boolean) => void;
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
    },
    closeButton: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 20,
        right: 20,
    },
    closeImage: {
        width: "100%",
        height: "100%",
    },
    label: {
        marginTop: 20,
        fontSize: 18,
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
    sendButton: {
        width: 130,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(255, 224, 64)",
        borderRadius: 10,
    },
    sendButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

const AddCardForm: FC<AddCardFormProps> = ({ show, setShow }): JSX.Element => {
    const [codeBeenSend, setCodeBeenSend] = useState<boolean>(false);

    if (!show) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.closeButton} onPress={() => setShow(false)}>
                <Image style={styles.closeImage} source={CloseButtonImageSource} />
            </Pressable>
            {!codeBeenSend ? (
                <>
                    <Text style={styles.label}>Введите номер телефона:</Text>
                    <View style={styles.inputFieldWrapper}>
                        <Text style={styles.inputFieldLabel}>+7</Text>
                        <TextInput style={styles.inputField} cursorColor={"black"} inputMode="tel" maxLength={10} />
                    </View>
                    <Pressable style={styles.sendButton} onPress={() => setCodeBeenSend(true)}>
                        <Text style={styles.sendButtonText}>Отправить</Text>
                    </Pressable>
                </>
            ) : (
                <>
                    <Text style={styles.label}>Введите код подтверждения:</Text>
                    <View style={styles.inputFieldWrapper}>
                        <TextInput style={styles.inputField} cursorColor={"black"} inputMode="numeric" maxLength={6} />
                    </View>
                    <Pressable style={styles.sendButton} onPress={() => setCodeBeenSend(true)}>
                        <Text style={styles.sendButtonText}>Отправить</Text>
                    </Pressable>
                </>
            )}
        </View>
    );
};

export default AddCardForm;
