import React, { useRef, useCallback } from 'react';
import { TouchableWithoutFeedback, Easing, Animated as RNAnimated } from 'react-native';
import Reanimated, {
    useAnimatedStyle,
    withSpring,
    useSharedValue,
    withTiming,
    Easing as ReanimatedEasing
} from 'react-native-reanimated';

const AnimatedButton = ({ onPress, style, children, scaleTo = 0.97 }) => {
    const scaleAnim = useRef(new RNAnimated.Value(1)).current;
    const opacityAnim = useRef(new RNAnimated.Value(1)).current;

    const animatePressIn = () => {
        RNAnimated.parallel([
            RNAnimated.spring(scaleAnim, {
                toValue: scaleTo,
                useNativeDriver: true,
            }),
            RNAnimated.timing(opacityAnim, {
                toValue: 0.8,
                duration: 100,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            })
        ]).start();
    };

    const animatePressOut = () => {
        RNAnimated.parallel([
            RNAnimated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                tension: 40,
                useNativeDriver: true,
            }),
            RNAnimated.timing(opacityAnim, {
                toValue: 1,
                duration: 200,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            })
        ]).start();
    };

    return (
        <TouchableWithoutFeedback
            onPressIn={animatePressIn}
            onPressOut={animatePressOut}
            onPress={onPress}
        >
            <RNAnimated.View style={[
                style,
                {
                    transform: [{ scale: scaleAnim }],
                    opacity: opacityAnim,
                }
            ]}>
                {children}
            </RNAnimated.View>
        </TouchableWithoutFeedback>
    );
};

export const TouchableScale = ({ onPress, style, children }) => {
    const scale = useSharedValue(1);
    const shadow = useSharedValue(0.1);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            shadowOpacity: shadow.value
        };
    });

    const handlePressIn = useCallback(() => {
        scale.value = withSpring(0.98, {
            damping: 10,
            stiffness: 100
        });
        shadow.value = withTiming(0.3, {
            duration: 150,
            easing: ReanimatedEasing.inOut(ReanimatedEasing.quad)
        });
    }, []);

    const handlePressOut = useCallback(() => {
        scale.value = withSpring(1, {
            damping: 10,
            stiffness: 100
        });
        shadow.value = withTiming(0.1, {
            duration: 150,
            easing: ReanimatedEasing.inOut(ReanimatedEasing.quad)
        });
    }, []);

    const handlePress = useCallback(() => {
        if (onPress) {
            onPress();
        }
    }, [onPress]);

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
        >
            <Reanimated.View style={[style, animatedStyle]}>
                {children}
            </Reanimated.View>
        </TouchableWithoutFeedback>
    );
};

export default AnimatedButton;
