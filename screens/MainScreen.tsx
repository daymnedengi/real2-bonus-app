import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

// @ts-ignore
import Real2CoinImageSource from "../assets/coin.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    block: {
        padding: 30,
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 20,
    },
    card: {
        width: "100%",
        height: 150,
        marginTop: 20,
        position: "relative",
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 20,
    },
    cardImage: {
        width: 50,
        height: 50,
        position: "absolute",
        top: 20,
        left: 20,
        borderRadius: 10,
    },
    numberText: {
        position: "absolute",
        top: 20,
        right: 20,
        fontSize: 16,
    },
    bonusText: {
        position: "absolute",
        right: 20,
        bottom: 20,
        fontSize: 32,
    },
});

const MainScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={Real2CoinImageSource} />
                <Text style={styles.numberText}>Номер счета: 586546234234</Text>
                <Text style={styles.bonusText}>1 500</Text>
            </View>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={Real2CoinImageSource} />
                <Text style={styles.numberText}>Номер счета: 586546234234</Text>
                <Text style={styles.bonusText}>500</Text>
            </View>
            <View style={styles.card}>
                <Image style={styles.cardImage} source={Real2CoinImageSource} />
                <Text style={styles.numberText}>Номер счета: 586546234234</Text>
                <Text style={styles.bonusText}>3 000</Text>
            </View>
        </View>
    );
};

export default MainScreen;
