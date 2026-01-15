import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../theme/colors";
import { GradientLogoReveal } from "../components/animations/GradientLogoReveal";



export function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace("Onboarding"), 2000);
    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Image
        source={require("../assets/images/splash/ribbon.png")}
        style={styles.ribbon}
        resizeMode="contain"
      />

      <Image
        source={require("../assets/images/splash/splash_ellipse.png")}
        style={styles.ellipse}
        resizeMode="contain"
      />

      <GradientLogoReveal width={240} height={70} duration={900} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange50,
    alignItems: "center",
    justifyContent: "center",
  },

  ellipse: {
    position: "absolute",
    width: 480,
    height: 200,
    bottom: -70,
    left: -140,
    opacity: 1,
  },

  ribbon: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: 390,
  },

});