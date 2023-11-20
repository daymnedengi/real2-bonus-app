import { FC } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    card: {
        width: "100%",
        height: 200,
        marginTop: 20,
        position: "relative",
        backgroundColor: "rgb(100, 181, 246)",
        borderRadius: 10,
    },
    cardNumberWrapper: {
        width: "100%",
        padding: 10,
        position: "absolute",
        top: 30,
        backgroundColor: "rgb(55, 71, 79)",
    },
    cardNumber: {
        textAlign: "center",
        letterSpacing: 5,
        color: "rgb(225, 225, 225)",
        fontSize: 16,
    },
    cardChip: {
        width: 70,
        height: 50,
        position: "absolute",
        left: 30,
        bottom: 30,
        backgroundColor: "rgb(227, 242, 253)",
        borderRadius: 5,
    },
    cardBonusCountTitle: {
        position: "absolute",
        right: 30,
        bottom: 80,
        fontSize: 18,
        fontWeight: "bold",
    },
    cardBonusCount: {
        position: "absolute",
        right: 30,
        bottom: 30,
        fontSize: 32,
        fontWeight: "bold",
    },
});

const Card: FC = (): JSX.Element => {
    return (
        <View style={styles.card}>
            <View style={styles.cardChip} />
            <Text style={styles.cardBonusCountTitle}>Количество бонусов:</Text>
            <Text style={styles.cardBonusCount}>1500</Text>
            <View style={styles.cardNumberWrapper}>
                <Text style={styles.cardNumber}>4366 4234 2346 4354</Text>
            </View>
        </View>
    );
};

const MainScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ScrollView>
        </View>
    );
};

export default MainScreen;
