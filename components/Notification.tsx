import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    block: {
        width: "100%",
        padding: 10,
        backgroundColor: "rgb(255, 224, 64)",
        borderRadius: 10,
    },
    message: {
        lineHeight: 25,
        color: "rgb(29, 34, 46)",
        fontSize: 16,
    },
    date: {
        textAlign: "right",
        color: "white",
        fontSize: 13,
    },
});

const Notification: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.message}>С вашего 546744546 счета было списано 500 бонусных баллов.</Text>
                <Text style={styles.date}>21.11.2023 10:53</Text>
            </View>
        </View>
    );
};

export default Notification;
