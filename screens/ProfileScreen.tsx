import { FC } from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";

// @ts-ignore
import CloseButtonImageSource from "../assets/close-button.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 90,
    },
    postName: {
        marginTop: 20,
        textAlign: "center",
        color: "gray",
        fontSize: 14,
    },
    fullName: {
        marginTop: 5,
        textAlign: "center",
        fontSize: 20,
    },
    numbers: {
        marginTop: 30,
    },
    numbersTitle: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold",
    },
    numberRow: {
        width: "100%",
        height: 60,
        marginTop: 10,
        position: "relative",
        borderWidth: 1,
        borderColor: "rgb(200, 200, 200)",
        borderRadius: 10,
    },
    numberRowCloseButton: {
        width: 24,
        height: 24,
        position: "absolute",
        top: 8,
        right: 8,
    },
    numberRowCloseImage: {
        width: "100%",
        height: "100%",
    },
    numberRowPhone: {
        position: "absolute",
        top: 5,
        left: 10,
        fontSize: 15,
    },
    numberRowCard: {
        position: "absolute",
        left: 10,
        bottom: 5,
        fontSize: 17,
        fontWeight: "bold",
    },
});

const NumberRow: FC = (): JSX.Element => {
    return (
        <View style={styles.numberRow}>
            <Pressable style={styles.numberRowCloseButton}>
                <Image style={styles.numberRowCloseButton} source={CloseButtonImageSource} />
            </Pressable>
            <Text style={styles.numberRowPhone}>+7 (961) 832-82-84</Text>
            <Text style={styles.numberRowCard}>3455 3455 5677 6576</Text>
        </View>
    );
};

const ProfileScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.profileImage}
                    source={{ uri: "https://img.goodfon.ru/wallpaper/nbig/c/7e/dueyn-skala-dzhonson-dwayne-187.jpg" }}
                />
                <Text style={styles.postName}>Помощник 1С программиста</Text>
                <Text style={styles.fullName}>Магомедов Рамазан Магомедсалихович</Text>
                <View style={styles.numbers}>
                    <Text style={styles.numbersTitle}>Привязанные номера</Text>
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                    <NumberRow />
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
