import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

import NewsCarousel from "../components/NewsCarousel";
import Cashback from "../components/Cashback";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});

const HomeScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <NewsCarousel />
            </View>
            <View style={{ flex: 1 }}>
                <Cashback />
            </View>
        </View>
    );
};

export default HomeScreen;
