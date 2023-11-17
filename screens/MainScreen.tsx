import { StyleSheet, View, Text, Image } from "react-native";

// @ts-ignore
import Real2CoinImageSource from "../assets/coin.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    block: {
        padding: 30,
        backgroundColor: "rgb(240, 240, 240)",
        borderRadius: 20,
    },
    coinImage: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
    },
    text: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default function MainScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Image style={styles.coinImage} source={Real2CoinImageSource} />
                <Text style={styles.text}>У вас 1500 бонусных баллов</Text>
            </View>
        </View>
    );
}
