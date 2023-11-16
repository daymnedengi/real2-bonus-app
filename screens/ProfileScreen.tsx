import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    head: {
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 90,
    },
    postName: {
        marginTop: 20,
        color: "gray",
        fontSize: 14,
    },
    fullName: {
        marginTop: 10,
        fontSize: 20,
    },
    contacts: {
        marginTop: 30,
        flex: 1,
    },
    contactRow: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    contactRowKey: {
        flex: 1,
        marginRight: 15,
        fontSize: 15,
        fontWeight: "bold",
    },
    contantRowValue: {
        flex: 2,
        fontSize: 15,
    },
});

export default function ProfileScreen(): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Image
                    style={styles.profileImage}
                    source={{
                        uri: "https://kartinkof.club/uploads/posts/2022-03/1648336121_5-kartinkof-club-p-memi-so-skaloi-dzhonsonom-5.jpg",
                    }}
                />
                <Text style={styles.postName}>Помощник 1С Программиста</Text>
                <Text style={styles.fullName}>Магомедов Рамазан Магомедсалихович</Text>
            </View>
            <View style={styles.contacts}>
                <ScrollView>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactRowKey}>Телефон</Text>
                        <Text style={styles.contantRowValue}>+7 (961) 832-82-84</Text>
                    </View>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactRowKey}>Эл. почта</Text>
                        <Text style={styles.contantRowValue}>roma777.magomedov@yandex.ru</Text>
                    </View>
                    <View style={styles.contactRow}>
                        <Text style={styles.contactRowKey}>Бонусная карта</Text>
                        <Text style={styles.contantRowValue}>45356546456</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
