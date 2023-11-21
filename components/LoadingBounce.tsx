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
    bounce: {
        width: 70,
        height: 70,
        borderRadius: 90,
        overflow: "hidden",
    },
    bounceImage: {
        width: "100%",
        height: "100%",
    },
});

const LoadingBounce: FC = (): JSX.Element => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 600,
                    easing: Easing.in(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 600,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.bounce,
                    {
                        transform: [
                            {
                                translateY: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 250],
                                }),
                            },
                            {
                                scaleY: animatedValue.interpolate({
                                    inputRange: [0, 0.8, 1.0],
                                    outputRange: [1.0, 1.0, 0.5],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Image style={styles.bounceImage} source={Real2Logo2ImageSource} />
            </Animated.View>
        </View>
    );
};

export default LoadingBounce;
