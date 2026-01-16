import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
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

export function HomeScreen({ navigation }: any) {
  const { shipments } = useShipments();
  const recentShipments = shipments.slice(0, 5);

  const handleCreateShipment = () => {
    navigation.navigate("CreateShipment");
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>¡Hola, Regalos SV!</Text>
          <View style={styles.headerIcons}>
            <Pressable style={styles.iconButton}>
              <Image source={images.notification} style={styles.headerIcon} />
            </Pressable>
            <Pressable style={styles.iconButton}>
              <Image source={images.countryFlag} style={styles.flagIcon} />
            </Pressable>
          </View>
        </View>

        <Text style={styles.questionTitle}>¿Qué necesitas hacer?</Text>

        <Pressable style={styles.mainButton} onPress={handleCreateShipment}>
          <View style={styles.plusCircle}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
          <Text style={styles.mainButtonText}>Hacer envío</Text>
        </Pressable>

        <View style={styles.quickActions}>
          <Pressable style={[styles.quickAction, styles.quickActionSelected]}>
            <Text style={[styles.quickActionIcon, styles.quickActionIconSelected]}>+</Text>
            <Text style={[styles.quickActionText, styles.quickActionTextSelected]}>Cotiza</Text>
          </Pressable>
          <Pressable style={styles.quickAction}>
            <Text style={styles.quickActionIcon}>+</Text>
            <Text style={styles.quickActionText}>Lotes</Text>
          </Pressable>
          <Pressable style={styles.quickAction}>
            <Text style={styles.quickActionIcon}>+</Text>
            <Text style={styles.quickActionText}>Cupón</Text>
          </Pressable>
          <Pressable style={styles.quickAction}>
            <Text style={styles.quickActionIcon}>+</Text>
            <Text style={styles.quickActionText}>Ayuda</Text>
          </Pressable>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            <Text style={styles.bannerBrand}>boxful</Text>
            <Text style={styles.bannerMainText}> almacena, empaca y envía tus productos </Text>
            <Text style={styles.bannerHighlight}>por ti.</Text>
          </Text>
        </View>

        <View style={styles.shipmentsSection}>
          <Text style={styles.sectionTitle}>Envíos recientes</Text>
          {recentShipments.map((shipment) => (
            <View key={shipment.id} style={styles.shipmentCard}>
              <Image source={images.box} style={styles.shipmentIcon} />
              <View style={styles.shipmentInfo}>
                <Text style={styles.shipmentLabel}>Destinatario</Text>
                <Text style={styles.shipmentName}>{shipment.recipientName}</Text>
              </View>
              <Text style={[styles.shipmentStatus, { color: getStatusColor(shipment.status) }]}>
                {shipment.status}
              </Text>
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
    backgroundColor: colors.bgLight,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.screenPadding,
    paddingTop: spacing.m,
    paddingBottom: spacing.l,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.m,
  },
  iconButton: {
    padding: spacing.xs,
  },
  headerIcon: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
    tintColor: colors.text,
  },
  flagIcon: {
    width: 28,
    height: spacing.screenPadding,
    borderRadius: 2,
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text,
    textAlign: "center",
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  mainButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.orange,
    marginHorizontal: spacing.screenPadding,
    paddingVertical: spacing.buttonPaddingVertical,
    borderRadius: spacing.radiusMedium,
    gap: spacing.sm,
  },
  plusCircle: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
    borderRadius: spacing.radiusMedium,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  plusIcon: {
    color: colors.white,
    fontSize: spacing.m,
    fontWeight: "600",
    lineHeight: 18,
  },
  mainButtonText: {
    color: colors.white,
    fontSize: spacing.m,
    fontWeight: "700",
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.screenPadding,
    marginTop: spacing.m,
    gap: spacing.sm,
  },
  quickAction: {
    flex: 1,
    alignItems: "center",
    paddingVertical: spacing.m,
    backgroundColor: colors.white,
    borderRadius: spacing.radiusMedium,
    borderWidth: 1.5,
    borderColor: colors.orange,
  },
  quickActionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  quickActionIcon: {
    fontSize: spacing.md,
    color: colors.orange,
    marginBottom: spacing.xs,
  },
  quickActionIconSelected: {
    color: colors.white,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.orange,
  },
  quickActionTextSelected: {
    color: colors.white,
  },
  banner: {
    backgroundColor: colors.bgBanner,
    marginHorizontal: spacing.screenPadding,
    marginTop: spacing.md,
    borderRadius: spacing.radiusXLarge,
    padding: spacing.l,
    overflow: "hidden",
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 34,
  },
  bannerBrand: {
    color: colors.orange,
  },
  bannerMainText: {
    color: colors.text,
  },
  bannerHighlight: {
    color: colors.orange,
  },
  bannerDecoration: {
    position: "absolute",
    top: spacing.sm,
    right: -spacing.md,
    transform: [{ rotate: "15deg" }],
  },
  bannerDecoText: {
    fontSize: 12,
    color: colors.orangeTransparent,
    fontWeight: "600",
  },
  shipmentsSection: {
    backgroundColor: colors.bgNeutral,
    marginHorizontal: spacing.screenPadding,
    marginTop: spacing.md,
    borderRadius: spacing.radiusXLarge,
    padding: spacing.md,
    paddingTop: spacing.l,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.m,
  },
  shipmentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: spacing.radiusLarge,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.cardPadding,
    marginBottom: spacing.radiusMedium,
  },
  shipmentIcon: {
    width: spacing.iconLarge,
    height: spacing.iconLarge,
    marginRight: spacing.radiusMedium,
  },
  shipmentInfo: {
    flex: 1,
  },
  shipmentLabel: {
    fontSize: 12,
    color: colors.textTertiary,
    marginBottom: 2,
  },
  shipmentName: {
    fontSize: spacing.m,
    fontWeight: "600",
    color: colors.text,
  },
  shipmentStatus: {
    fontSize: 12,
    fontWeight: "600",
  },
});
