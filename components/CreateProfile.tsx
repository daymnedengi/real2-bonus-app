import { FC, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";

// @ts-ignore
import ArrowBottomImageSource from "../assets/arrow-bottom.png";

import NumberPicker from "./NumberPicker";

interface CreateProfileProps {
    lastName: string;
    setLastName: (value: string) => void;

    firstName: string;
    setFirstName: (value: string) => void;

    fatherName: string;
    setFatherName: (value: string) => void;

    gender: "" | "male" | "female";
    setGender: (value: "male" | "female") => void;

    dayOfBirth: number;
    setDayOfBirth: (value: number) => void;

    monthOfBirth: number;
    setMonthOfBirth: (value: number) => void;

    yearOfBirth: number;
    setYearOfBirth: (value: number) => void;
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

const CreateProfile: FC<CreateProfileProps> = observer((props): JSX.Element => {
    const [isShowPicker, setIsShowPicker] = useState<null | "day" | "month" | "year">(null);

    const [isLastNameError, setIsLastNameError] = useState<boolean>(true);
    const [isFirstNameError, setIsFirstNameError] = useState<boolean>(true);
    const [isFatherNameError, setIsFatherNameError] = useState<boolean>(true);
    const [isDateOfBirthError, setIsDateOfBirthError] = useState<boolean>(true);
    const [isGenderError, setGenderError] = useState<boolean>(true);

    return (
        <>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
                    <Text style={styles.title}>Данные профиля</Text>
                    <TextInput
                        style={[styles.inputField, isLastNameError && { borderColor: "#ED1C24" }]}
                        placeholder="Фамилия"
                        placeholderTextColor="#999B9E"
                    />
                    <TextInput
                        style={[styles.inputField, isFirstNameError && { borderColor: "#ED1C24" }]}
                        placeholder="Имя"
                        placeholderTextColor="#999B9E"
                    />
                    <TextInput
                        style={[styles.inputField, isFatherNameError && { borderColor: "#ED1C24" }]}
                        placeholder="Отчество"
                        placeholderTextColor="#999B9E"
                    />
                    <Text style={styles.smallTitle}>Дата рождения</Text>
                    <View style={styles.dateOfBirthBlock}>
                        <Pressable
                            style={[
                                styles.dateOfBirthColumn,
                                { flex: 1 },
                                isDateOfBirthError && { borderColor: "#ED1C24" },
                            ]}
                            onPress={() => setIsShowPicker("day")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{props.dayOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                        <Pressable
                            style={[
                                styles.dateOfBirthColumn,
                                { flex: 1 },
                                isDateOfBirthError && { borderColor: "#ED1C24" },
                            ]}
                            onPress={() => setIsShowPicker("month")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{props.monthOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                        <Pressable
                            style={[
                                styles.dateOfBirthColumn,
                                { flex: 2 },
                                isDateOfBirthError && { borderColor: "#ED1C24" },
                            ]}
                            onPress={() => setIsShowPicker("year")}
                        >
                            <Text style={styles.dateOfBirthTitle}>{props.yearOfBirth}</Text>
                            <Image style={styles.dateOfBirthImage} source={ArrowBottomImageSource} />
                        </Pressable>
                    </View>
                    <Text style={styles.smallTitle}>Пол</Text>
                    <View style={styles.genderBlock}>
                        <Pressable
                            style={[
                                styles.button,
                                { flex: 1, marginRight: 5 },
                                isDateOfBirthError && { borderWidth: 1, borderColor: "#ED1C24" },
                                props.gender != "male" && { backgroundColor: "#E7E8E9" },
                            ]}
                            onPress={() => props.setGender("male")}
                        >
                            <Text style={[styles.buttonText, props.gender != "male" && { color: "#909294" }]}>
                                Муж.
                            </Text>
                        </Pressable>
                        <Pressable
                            style={[
                                styles.button,
                                { flex: 1, marginLeft: 5 },
                                isDateOfBirthError && { borderWidth: 1, borderColor: "#ED1C24" },
                                props.gender != "female" && { backgroundColor: "#E7E8E9" },
                            ]}
                            onPress={() => props.setGender("female")}
                        >
                            <Text style={[styles.buttonText, props.gender != "female" && { color: "#909294" }]}>
                                Жен.
                            </Text>
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
                    onValueChange={(value) => props.setDayOfBirth(value)}
                />
            )}
            {isShowPicker == "month" && (
                <NumberPicker
                    values={Array.from({ length: 12 }, (_, i) => i + 1)}
                    closeFunc={() => setIsShowPicker(null)}
                    onValueChange={(value) => props.setMonthOfBirth(value)}
                />
            )}
            {isShowPicker == "year" && (
                <NumberPicker
                    values={Array.from({ length: 110 }, (_, i) => i + 1901)}
                    closeFunc={() => setIsShowPicker(null)}
                    onValueChange={(value) => props.setYearOfBirth(value)}
                />
            )}
        </>
    );
});

export default CreateProfile;
