import { FC, useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";

import Card from "../components/Card";
import AddCardForm from "../components/AddCardForm";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    addCard: {
        marginLeft: "auto",
        marginBottom: 5,
        padding: 10,
        justifyContent: "center",
        backgroundColor: "rgb(255, 224, 64)",
        borderRadius: 10,
    },
    addCardText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

const MainScreen: FC = (): JSX.Element => {
    const [showAddCardForm, setShowAddCardForm] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Pressable style={styles.addCard} onPress={() => setShowAddCardForm(true)}>
                <Text style={styles.addCardText}>+ Добавить карту</Text>
            </Pressable>
            <View style={{ flex: 1 }}>
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
            <AddCardForm show={showAddCardForm} setShow={setShowAddCardForm} />
        </View>
    );
};

export default MainScreen;
