import { FC, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";

import loginStore from "../store/loginStore";

// @ts-ignore
import ArrowBottomImageSource from "../assets/arrow-bottom.png";

import NumberPicker from "./NumberPicker";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
    },
    scrollWrapper: {
        flexGrow: 1,
        justifyContent: "center",
    },
    title: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    inputField: {
        width: "100%",
        marginTop: 15,
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
    smallTitle: {
        marginTop: 30,
        textAlign: "center",
        fontSize: 16,
    },
    dateOfBirthBlock: {
        flexDirection: "row",
        marginTop: 10,
    },
    dateOfBirthColumn: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 4,
        padding: 5,
        borderWidth: 1,
        borderColor: "#919395",
        borderRadius: 10,
    },
    dateOfBirthTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    dateOfBirthImage: {
        width: 24,
        height: 24,
    },
    genderBlock: {
        flexDirection: "row",
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

const CreateProfile: FC = observer((): JSX.Element => {
    const [isShowPicker, setIsShowPicker] = useState<null | "day" | "month" | "year">(null);

    return (
        <>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollWrapper}>
                    <Text style={styles.title}>Данные профиля</Text>
                    <TextInput style={styles.inputField} placeholder="Фамилия" placeholderTextColor="#999B9E" />
                    <TextInput style={styles.inputField} placeholder="Имя" placeholderTextColor="#999B9E" />
                    <TextInput style={styles.inputField} placeholder="Отчество" placeholderTextColor="#999B9E" />
                    <Text style={styles.smallTitle}>Дата рождения</Text>
                    <View style={styles.dateOfBirthBlock}>
                        <Pressable
                            style={[styles.dateOfBirthColumn, { flex: 1 }]}
                            onPress={() => setIsShowPicker("day")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{loginStore.dayOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                        <Pressable
                            style={[styles.dateOfBirthColumn, { flex: 1 }]}
                            onPress={() => setIsShowPicker("month")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{loginStore.monthOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                        <Pressable
                            style={[styles.dateOfBirthColumn, { flex: 2 }]}
                            onPress={() => setIsShowPicker("year")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{loginStore.yearOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                    </View>
                    <Text style={styles.smallTitle}>Пол</Text>
                    <View style={styles.genderBlock}>
                        <Pressable style={[styles.button, { flex: 1, marginRight: 5 }]}>
                            <Text style={styles.buttonText}>Муж.</Text>
                        </Pressable>
                        <Pressable style={[styles.button, { flex: 1, marginLeft: 5, backgroundColor: "#E7E8E9" }]}>
                            <Text style={[styles.buttonText, { color: "#909294" }]}>Жен.</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>СОХРАНИТЬ</Text>
                    </Pressable>
                </ScrollView>
            </View>
            {isShowPicker == "day" && (
                <NumberPicker
                    values={Array.from({ length: 31 }, (_, i) => i + 1)}
                    closeFunc={() => setIsShowPicker(null)}
                    onValueChange={(value) => loginStore.setDayOfBirth(value)}
                />
            )}
            {isShowPicker == "month" && (
                <NumberPicker
                    values={Array.from({ length: 12 }, (_, i) => i + 1)}
                    closeFunc={() => setIsShowPicker(null)}
                    onValueChange={(value) => loginStore.setMonthOfBirth(value)}
                />
            )}
            {isShowPicker == "year" && (
                <NumberPicker
                    values={Array.from({ length: 110 }, (_, i) => i + 1901)}
                    closeFunc={() => setIsShowPicker(null)}
                    onValueChange={(value) => loginStore.setYearOfBirth(value)}
                />
            )}
        </>
    );
});

export default CreateProfile;
