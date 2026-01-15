import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export function BillingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Billing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F7F7F7" },
  text: { fontSize: 18, fontWeight: "700", color: colors.text },
});