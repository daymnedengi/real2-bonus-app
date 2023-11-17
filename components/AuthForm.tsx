import { StyleSheet, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useLocalUserStore, selectLogin } from "../store/localUserStore";
import { useNavigationStore, selectNavigate } from "../store/navigationStore";

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

export default function AuthForm(): JSX.Element {
    const localUserLogin = useLocalUserStore(selectLogin);
    const navigate = useNavigationStore(selectNavigate);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.label}>Имя пользователя:</Text>
                    <TextInput style={styles.inputField} />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Пароль:</Text>
                    <TextInput style={styles.inputField} />
                </View>
                <View style={styles.row}>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            localUserLogin("asdsad");
                            navigate("/");
                        }}
                    >
                        <Text style={styles.buttonText}>Войти</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}