import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        marginTop: 20,
        position: "relative",
        backgroundColor: "rgb(100, 181, 246)",
        borderRadius: 10,
    },
    numberWrapper: {
        width: "100%",
        padding: 10,
        position: "absolute",
        top: 30,
        backgroundColor: "rgb(55, 71, 79)",
    },
    number: {
        textAlign: "center",
        letterSpacing: 5,
        color: "rgb(225, 225, 225)",
        fontSize: 16,
    },
    chip: {
        width: 70,
        height: 50,
        position: "absolute",
        left: 30,
        bottom: 30,
        backgroundColor: "rgb(227, 242, 253)",
        borderRadius: 5,
    },
    bonusCountTitle: {
        position: "absolute",
        right: 30,
        bottom: 80,
        fontSize: 18,
        fontWeight: "bold",
    },
    bonusCount: {
        position: "absolute",
        right: 30,
        bottom: 30,
        fontSize: 32,
        fontWeight: "bold",
    },
});

const Card: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.chip} />
            <Text style={styles.bonusCountTitle}>Количество бонусов:</Text>
            <Text style={styles.bonusCount}>1500</Text>
            <View style={styles.numberWrapper}>
                <Text style={styles.number}>4366 4234 2346 8435</Text>
            </View>
        </View>
    );
};

export default Card;
