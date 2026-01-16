import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import { images } from "../../theme/images";
import { spacing } from "../../theme/spacing";
import { useShipments, ShipmentStatus } from "../../context/ShipmentsContext";

const getStatusColor = (status: ShipmentStatus) => {
  switch (status) {
    case "Completado":
      return colors.success;
    case "Pendiente":
      return colors.orange;
    case "Atrasado":
      return colors.error;
    default:
      return colors.text;
  }
};

const getStatusBackgroundColor = (status: ShipmentStatus) => {
  switch (status) {
    case "Completado":
      return colors.successLight;
    case "Pendiente":
      return colors.warningLight;
    case "Atrasado":
      return colors.errorLight;
    default:
      return colors.bgGrayLight;
  }
};

export function HistoryScreen() {
  const { shipments } = useShipments();

  const completedCount = shipments.filter((s) => s.status === "Completado").length;
  const pendingCount = shipments.filter((s) => s.status === "Pendiente").length;
  const delayedCount = shipments.filter((s) => s.status === "Atrasado").length;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Historial</Text>
          <Text style={styles.subtitle}>Tus envíos</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: colors.successLight }]}>
            <Text style={[styles.statNumber, { color: colors.success }]}>{completedCount}</Text>
            <Text style={styles.statLabel}>Completados</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.warningLight }]}>
            <Text style={[styles.statNumber, { color: colors.orange }]}>{pendingCount}</Text>
            <Text style={styles.statLabel}>Pendientes</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.errorLight }]}>
            <Text style={[styles.statNumber, { color: colors.error }]}>{delayedCount}</Text>
            <Text style={styles.statLabel}>Atrasados</Text>
          </View>
        </View>

        <View style={styles.listSection}>
          <Text style={styles.sectionTitle}>Todos los envíos ({shipments.length})</Text>
          {shipments.map((shipment) => (
            <View key={shipment.id} style={styles.shipmentCard}>
              <View
                style={[
                  styles.shipmentIconContainer,
                  { backgroundColor: getStatusBackgroundColor(shipment.status) },
                ]}
              >
                <Image source={images.box} style={styles.shipmentIcon} />
              </View>
              <View style={styles.shipmentInfo}>
                <Text style={styles.shipmentLabel}>Destinatario</Text>
                <Text style={styles.shipmentName}>{shipment.recipientName}</Text>
                <Text style={styles.shipmentAddress}>{shipment.address}</Text>
                <Text style={styles.shipmentDate}>{shipment.date}</Text>
              </View>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: getStatusBackgroundColor(shipment.status) },
                ]}
              >
                <Text style={[styles.statusText, { color: getStatusColor(shipment.status) }]}>
                  {shipment.status}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgGrayLight,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingHorizontal: spacing.screenPadding,
    paddingTop: spacing.m,
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: spacing.m,
    color: colors.textSecondary,
  },
  statsRow: {
    flexDirection: "row",
    paddingHorizontal: spacing.screenPadding,
    paddingVertical: spacing.m,
    gap: spacing.radiusMedium,
    backgroundColor: colors.white,
  },
  statCard: {
    flex: 1,
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.radiusMedium,
    borderRadius: spacing.radiusLarge,
    alignItems: "center",
  },
  statNumber: {
    fontSize: spacing.l,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  listSection: {
    padding: spacing.screenPadding,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.m,
  },
  shipmentCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.white,
    borderRadius: spacing.radiusLarge,
    padding: spacing.cardPadding,
    marginBottom: spacing.radiusMedium,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: spacing.s,
    elevation: 2,
  },
  shipmentIconContainer: {
    width: 48,
    height: 48,
    borderRadius: spacing.l,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.radiusMedium,
  },
  shipmentIcon: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
  },
  shipmentInfo: {
    flex: 1,
  },
  shipmentLabel: {
    fontSize: 11,
    color: colors.textTertiary,
    marginBottom: 2,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  shipmentName: {
    fontSize: spacing.m,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  shipmentAddress: {
    fontSize: 13,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  shipmentDate: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  statusBadge: {
    paddingHorizontal: spacing.radiusMedium,
    paddingVertical: 6,
    borderRadius: spacing.md,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
});
