import { FC, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

// @ts-ignore
import BarcodeImageSource from "../assets/barcode.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: "#DEDFE1",
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
    },
    balance: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    balanceWrapper: {
        width: "100%",
        padding: 20,
        borderWidth: 1,
        borderColor: "#EBECEC",
        borderRadius: 10,
    },
    balanceText: {
        marginTop: 10,
        fontSize: 20,
    },
    balanceCount: {
        fontSize: 56,
        fontWeight: "bold",
    },
    balanceCircle: {
        width: 30,
        height: 30,
        borderWidth: 3,
        borderColor: "#606264",
        borderRadius: 90,
        position: "absolute",
        top: 10,
        right: 10,
    },
    balanceButton: {
        width: "100%",
        height: 46,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#FFE500",
        borderRadius: 5,
    },
    balanceButtonText: {
        fontSize: 16,
    },
    barcode: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    barcodeDescription: {
        marginTop: 15,
        fontSize: 15,
    },
    barcodeButton: {
        marginTop: 15,
    },
    barcodeButtonText: {
        textAlign: "center",
        color: "#FBAE18",
        fontSize: 15,
    },
});

const Balance: FC = (): JSX.Element => {
    return (
        <View style={styles.balance}>
            <View style={styles.balanceWrapper}>
                <View style={styles.balanceCircle} />
                <Text style={styles.balanceText}>Баланс:</Text>
                <Text style={styles.balanceCount}>1536.-</Text>
            </View>
            <Pressable style={styles.balanceButton}>
                <Text style={styles.balanceButtonText}>ИСПОЛЬЗОВАТЬ БАЛЛЫ</Text>
            </Pressable>
        </View>
    );
};

const Barcode: FC = (): JSX.Element => {
    return (
        <View style={styles.barcode}>
            <Image source={BarcodeImageSource} />
            <Text style={styles.barcodeDescription}>ПОКАЖИТЕ СПЕЦИАЛИСТУ ШТРИХ-КОД</Text>
            <Pressable style={styles.barcodeButton}>
                <Text style={styles.barcodeButtonText}>СКРЫТЬ</Text>
            </Pressable>
        </View>
    );
};

const Cashback: FC = (): JSX.Element => {
    const [isShowBalance, setIsShowBalance] = useState<boolean>(true);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CASHBACK</Text>
            <Pressable style={{ flex: 1 }} onPress={() => setIsShowBalance((prevState) => !prevState)}>
                {isShowBalance ? <Balance /> : <Barcode />}
            </Pressable>
        </View>
    );
};

export default Cashback;
