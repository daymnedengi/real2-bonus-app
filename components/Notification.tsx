import { FC } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
    },
    content: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
    },
    link: {
        color: "#FAA51A",
    },
    date: {
        marginTop: 10,
        textAlign: "center",
        color: "#5D5E60",
        fontSize: 18,
    },
});

const Notification: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Shadow startColor="rgb(245, 245, 245)">
                <Text style={styles.content}>
                    Только до 31 декабря BLACK SALE на IPhone. Успей купить! Переходи по ссылке чтобы узнать подробности{" "}
                    <Text style={styles.link}>real2.ru/promo/blacksale</Text>
                </Text>
            </Shadow>
            <Text style={styles.date}>24.11.2023 16:54</Text>
        </View>
    );
};

export default Notification;
