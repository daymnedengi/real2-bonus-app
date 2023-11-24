import { FC } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Shadow } from "react-native-shadow-2";

import Notification from "../components/Notification";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position: "relative",
    },
    shadow: {
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
    },
});

const NotificationsScreen: FC = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </ScrollView>
            <Shadow style={styles.shadow} startColor="rgb(255, 255, 255)" distance={150} />
        </View>
    );
};

export default NotificationsScreen;
