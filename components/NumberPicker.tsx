import { FC, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable, ScrollView, BackHandler } from "react-native";

// @ts-ignore
import CloseImageSource from "../assets/close.png";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(230, 230, 230, 0.5)",
    },
    wrapper: {
        flex: 1,
        margin: 50,
        padding: 20,
        position: "relative",
        backgroundColor: "white",
        borderRadius: 10,
    },
    closeButton: {
        width: 32,
        height: 32,
        marginLeft: "auto",
    },
    closeImage: {
        width: "100%",
        height: "100%",
    },
    item: {
        width: "100%",
        padding: 20,
    },
    itemText: {
        textAlign: "center",
        fontSize: 18,
    },
});

interface NumberPickerProps {
    values: Array<number>;
    closeFunc: () => void;
    onValueChange: (value: number) => void;
}

const NumberPicker: FC<NumberPickerProps> = (props): JSX.Element => {
    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        scrollViewRef.current.scrollToEnd({ animated: false });

        const hardwareBackPressListener = BackHandler.addEventListener("hardwareBackPress", () => {
            props.closeFunc();
            return true;
        });

        return () => {
            hardwareBackPressListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView ref={scrollViewRef}>
                    <Pressable style={styles.closeButton} onPress={props.closeFunc}>
                        <Image style={styles.closeImage} source={CloseImageSource} />
                    </Pressable>
                    {props.values.map((number: number) => {
                        return (
                            <Pressable
                                key={number}
                                style={styles.item}
                                onPress={() => {
                                    props.onValueChange(number);
                                    props.closeFunc();
                                }}
                            >
                                <Text style={styles.itemText}>{number}</Text>
                            </Pressable>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

export default NumberPicker;
