import { FC } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Notification from "../components/Notification";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
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
            </ScrollView>
        </View>
    );
};

export default NotificationsScreen;
