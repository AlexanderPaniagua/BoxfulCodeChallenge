import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

import LogoBase from "../../assets/svg/logo_orange.svg";
import LogoMask from "../../assets/svg/logo_white.svg";

type Props = {
  width?: number;
  height?: number;
  duration?: number;
  delayMs?: number;
};

export function GradientLogoReveal({
  width = 240,
  height = 70,
  duration = 900,
  delayMs = 0,
}: Props) {
  const p = useSharedValue(0);

  useEffect(() => {
    p.value = withDelay(
      delayMs,
      withTiming(1, { duration, easing: Easing.out(Easing.cubic) })
    );
  }, [delayMs, duration, p]);

  const wipeStyle = useAnimatedStyle(() => ({
    width: width * p.value,
  }));

  return (
    <View style={{ width, height }}>
      <LogoBase width={width} height={height} />

      <Animated.View style={[styles.overlay, { height }, wipeStyle]}>
        <MaskedView
          androidRenderingMode="software"
          style={{ width, height }}
          maskElement={
            <View style={styles.maskContainer}>
              <LogoMask width={width} height={height} />
            </View>
          }
        >
          <Svg width={width} height={height}>
            <Defs>
                <LinearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="#FF4300" />
                    <Stop offset="55%" stopColor="#FF6A3D" />
                    <Stop offset="95%" stopColor="#FF4FD8" />
                    <Stop offset="100%" stopColor="#7A5CFF" />
                </LinearGradient>
            </Defs>
            <Rect x={0} y={0} width={width} height={height} fill="url(#wave)" />
          </Svg>
        </MaskedView>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  maskContainer: {
    backgroundColor: "transparent",
  },
});