import { FC } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    row: {
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
    },
    label: {
        flex: 1,
        fontSize: 16,
        fontWeight: "bold",
    },
    filePicker: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        backgroundColor: "#ee3124",
        borderRadius: 10,
    },
    filePickerText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    inputField: {
        flex: 2,
        padding: 5,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        fontSize: 16,
    },
    saveButton: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 15,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#ee3124",
        borderRadius: 10,
    },
    saveButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

const SettingsScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Настройки</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Изображение</Text>
                <View style={{ flex: 2 }}>
                    <Pressable style={styles.filePicker}>
                        <Text style={styles.filePickerText}>Выберите файл</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Полное имя</Text>
                <TextInput style={styles.inputField} cursorColor={"black"} maxLength={64} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Телефон</Text>
                <TextInput style={styles.inputField} cursorColor={"black"} maxLength={24} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Эл. почта</Text>
                <TextInput style={styles.inputField} cursorColor={"black"} maxLength={64} />
            </View>
            <View style={styles.row}>
                <Pressable style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Сохранить</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SettingsScreen;
