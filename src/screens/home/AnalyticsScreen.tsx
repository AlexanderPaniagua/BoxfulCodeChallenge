import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export function AnalyticsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📊</Text>
        </View>
        <Text style={styles.title}>Analíticas</Text>
        <Text style={styles.comingSoon}>Próximamente</Text>
        <Text style={styles.description}>
          Aquí podrás ver estadísticas detalladas de tus envíos, métricas de rendimiento y análisis de tu negocio.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgGrayLight,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.l,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: spacing.radiusMedium,
    elevation: 4,
  },
  icon: {
    fontSize: 48,
  },
  title: {
    fontSize: spacing.l,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.s,
  },
  comingSoon: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: spacing.m,
  },
  description: {
    fontSize: spacing.m,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: spacing.l,
  },
});
