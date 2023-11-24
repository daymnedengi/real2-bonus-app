import { FC } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 310,
    },
    item: {
        width: 270,
        height: 270,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    itemText: {
        color: "#231F20",
        fontSize: 42,
        fontWeight: "bold",
    },
    description: {
        marginTop: 20,
        textAlign: "center",
        fontSize: 13,
    },
});

const NewsCarousel: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View style={[styles.item, { backgroundColor: "#FFE500" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#46C8F5" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#C680B6" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#FFE500" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#46C8F5" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#C680B6" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#FFE500" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#46C8F5" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
                <View style={[styles.item, { backgroundColor: "#C680B6" }]}>
                    <Text style={styles.itemText}>НАШЛИ ДЕШЕВЛЕ? СНИЗИМ ЦЕНУ!</Text>
                </View>
            </ScrollView>
            <Text style={styles.description}>Кликните чтобы узнать подробности</Text>
        </View>
    );
};

export default NewsCarousel;
