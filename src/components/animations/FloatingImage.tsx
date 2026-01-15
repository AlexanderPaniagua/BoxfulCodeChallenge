import React, { useEffect } from 'react';
import { Image, ImageSourcePropType, StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  interpolate,
} from 'react-native-reanimated';

interface FloatingImageProps {
  source: ImageSourcePropType;
  width: number;
  height: number;
  style?: ViewStyle;
  delay?: number;
  duration?: number;
  floatRange?: number;
  rotateRange?: number;
}

export function FloatingImage({
  source,
  width,
  height,
  style,
  delay = 0,
  duration = 2500,
  floatRange = 10,
  rotateRange = 3,
}: FloatingImageProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      )
    );
  }, [delay, duration, progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, -floatRange]);
    const rotate = interpolate(progress.value, [0, 0.5, 1], [-rotateRange, rotateRange, -rotateRange]);

    return {
      transform: [
        { translateY },
        { rotate: `${rotate}deg` },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, { width, height }, style, animatedStyle]}>
      <Image
        source={source}
        style={{ width, height }}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
