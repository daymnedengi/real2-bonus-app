import { FC, useRef, useEffect } from "react";
import { StyleSheet, View, Image, Animated, Easing } from "react-native";

// @ts-ignore
import Real2Logo2ImageSource from "../assets/real2-logo2.png";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    wrapper: {
        width: 80,
        height: 80,
        borderRadius: 90,
        overflow: "hidden",
    },
    logoImage: {
        width: "100%",
        height: "100%",
    },
});

const LoadingSpinner: FC = (): JSX.Element => {
    const translateAnimatedValue = useRef(new Animated.Value(0)).current;
    const rotateAnimatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(translateAnimatedValue, {
                        toValue: 1,
                        duration: 700,
                        easing: Easing.in(Easing.sin),
                        useNativeDriver: true,
                    }),
                    Animated.timing(translateAnimatedValue, {
                        toValue: 0,
                        duration: 700,
                        easing: Easing.out(Easing.sin),
                        useNativeDriver: true,
                    }),
                ]),
                Animated.timing(rotateAnimatedValue, {
                    toValue: 1,
                    duration: 1400,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.wrapper,
                    {
                        transform: [
                            {
                                translateY: translateAnimatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 300],
                                }),
                            },
                            {
                                scaleY: translateAnimatedValue.interpolate({
                                    inputRange: [0, 0.8, 1],
                                    outputRange: [1.0, 1.0, 0.5],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Animated.Image
                    style={[
                        styles.logoImage,
                        {
                            transform: [
                                {
                                    rotateZ: rotateAnimatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ["0deg", "360deg"],
                                    }),
                                },
                            ],
                        },
                    ]}
                    source={Real2Logo2ImageSource}
                />
            </Animated.View>
        </View>
    );
};

export default LoadingSpinner;
