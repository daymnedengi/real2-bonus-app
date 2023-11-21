import { FC, useEffect, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";

// @ts-ignore
import Real2Logo2ImageSource from "../assets/real2-logo2.png";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 90,
    },
});

const LoadingPoint: FC = (): JSX.Element => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Image
                style={[
                    styles.image,
                    {
                        transform: [
                            {
                                scale: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.75, 1.25],
                                }),
                            },
                        ],
                    },
                ]}
                source={Real2Logo2ImageSource}
            />
        </View>
    );
};

export default LoadingPoint;
