import { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    wrapper: {
        width: 80,
        height: 80,
        borderRadius: 90,
        overflow: "hidden",
    },
    loader: {
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: "#ee3124",
    },
    text: {
        position: "absolute",
        top: -7,
        left: 22,
        color: "white",
        fontSize: 64,
        fontWeight: "bold",
    },
});

export default function LoadingSpinner() {
    const [_, setUpdate] = useState<boolean>(false);
    const text = useRef<string>("");
    const translateY = useRef<number>(0);
    const translateYVelocity = useRef<number>(5);
    const rotateZ = useRef<number>(0);
    const scaleY = useRef<number>(1.0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (translateY.current > 200) {
                translateYVelocity.current -= 5;
            }
            translateYVelocity.current += 0.2;
            translateY.current += translateYVelocity.current;

            rotateZ.current -= 1;
            if (rotateZ.current < -360) {
                rotateZ.current += 360;
            }

            if (translateY.current > 200) {
                scaleY.current = 0.6;
            }

            scaleY.current += 0.05;

            if (scaleY.current > 1.0) {
                scaleY.current = 1.0;
            }

            setUpdate((prevState) => !prevState);
        }, 16);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={{ transform: [{ translateY: translateY.current - 10 }] }}>{text.current}</Text>
            <View
                style={[
                    styles.wrapper,
                    { transform: [{ translateY: translateY.current }, { scaleY: scaleY.current }] },
                ]}
            >
                <Pressable
                    onPress={() => {
                        if (text.current == "") {
                            text.current = "Перестань по мне кликать!";
                            setTimeout(() => {
                                text.current = "";
                            }, 3000);
                        }
                    }}
                >
                    <View style={[styles.loader, { transform: [{ rotateZ: `${rotateZ.current}deg` }] }]}>
                        <Text style={styles.text}>2</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}
