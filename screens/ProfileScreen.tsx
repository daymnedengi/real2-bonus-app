import { FC, useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position: "relative",
    },
    scrollViewWrapper: {
        flexGrow: 1,
        justifyContent: "center",
    },
    label: {
        marginTop: 20,
        fontSize: 14,
    },
    fullName: {
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#DEDFE1",
        fontSize: 32,
        fontWeight: "bold",
    },
    phoneNumber: {
        marginTop: 10,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#DEDFE1",
        color: "#919395",
        fontSize: 32,
        fontWeight: "bold",
    },
    gender: {
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#DEDFE1",
        fontSize: 24,
        fontWeight: "bold",
    },
    dateOfBirth: {
        paddingBottom: 10,
        fontSize: 24,
        fontWeight: "bold",
    },
    button: {
        width: "100%",
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        backgroundColor: "#FFE500",
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
    },
    exitContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(235, 235, 235, 0.5)",
    },
    exitBlock: {
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: "hidden",
    },
    exitBlockTitle: {
        padding: 25,
        textAlign: "center",
        fontSize: 20,
    },
    exitButtons: {
        width: "100%",
        height: 54,
        flexDirection: "row",
    },
    exitButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    exitButtonText: {
        fontSize: 20,
    },
});

const ProfileScreen: FC = (): JSX.Element => {
    const [isExit, setIsExit] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
                <Text style={styles.fullName}>Магомедов Рамазан Магомедсалихович</Text>
                <Text style={styles.label}>Номер телефона</Text>
                <Text style={styles.phoneNumber}>+7 (961) 832-82-84</Text>
                <Text style={styles.label}>Пол</Text>
                <Text style={styles.gender}>Мужской</Text>
                <Text style={styles.label}>Дата рождения</Text>
                <Text style={styles.dateOfBirth}>14.11.2023</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>РЕДАКТИРОВАТЬ</Text>
                </Pressable>
                <Pressable style={[styles.button, { backgroundColor: "white" }]} onPress={() => setIsExit(true)}>
                    <Text style={[styles.buttonText, { color: "#FBAE18" }]}>Выйти</Text>
                </Pressable>
            </ScrollView>
            {isExit && (
                <View style={styles.exitContainer}>
                    <View style={styles.exitBlock}>
                        <Text style={styles.exitBlockTitle}>Вы уверены что хотите выйти?</Text>
                        <View style={styles.exitButtons}>
                            <Pressable
                                style={[styles.exitButton, { backgroundColor: "#FFF200" }]}
                                onPress={() => setIsExit(false)}
                            >
                                <Text style={styles.exitButtonText}>Нет</Text>
                            </Pressable>
                            <Pressable style={styles.exitButton}>
                                <Text style={styles.exitButtonText}>Да</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

export default ProfileScreen;
