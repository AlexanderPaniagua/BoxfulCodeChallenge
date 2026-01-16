import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { useShipments, ShipmentStatus } from "../../context/ShipmentsContext";

const statusOptions: ShipmentStatus[] = ["Pendiente", "Completado", "Atrasado"];

export function CreateShipmentScreen({ navigation }: any) {
  const { addShipment } = useShipments();
  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<ShipmentStatus>("Pendiente");

  const handleCreate = () => {
    if (!recipientName.trim() || !address.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    addShipment({
      recipientName: recipientName.trim(),
      address: address.trim(),
      status: selectedStatus,
      date: new Date().toISOString().split("T")[0],
    });

    Alert.alert("Éxito", "Envío creado correctamente", [
      { text: "OK", onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
              <Text style={styles.backText}>← Volver</Text>
            </Pressable>
            <Text style={styles.title}>Nuevo Envío</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Nombre del destinatario</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: John Wick"
                placeholderTextColor={colors.textTertiary}
                value={recipientName}
                onChangeText={setRecipientName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Dirección de envío</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Ej: Palo Alto, CA"
                placeholderTextColor={colors.textTertiary}
                value={address}
                onChangeText={setAddress}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Estado del envío</Text>
              <View style={styles.statusOptions}>
                {statusOptions.map((status) => (
                  <Pressable
                    key={status}
                    style={[
                      styles.statusOption,
                      selectedStatus === status && styles.statusOptionSelected,
                    ]}
                    onPress={() => setSelectedStatus(status)}
                  >
                    <Text
                      style={[
                        styles.statusOptionText,
                        selectedStatus === status && styles.statusOptionTextSelected,
                      ]}
                    >
                      {status}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          </View>

          <Pressable style={styles.submitButton} onPress={handleCreate}>
            <Text style={styles.submitButtonText}>Crear Envío</Text>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing.screenPadding,
  },
  header: {
    marginBottom: spacing.xl,
  },
  backButton: {
    marginBottom: spacing.m,
  },
  backText: {
    fontSize: spacing.m,
    color: colors.primary,
    fontWeight: "500",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: spacing.l,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    marginBottom: spacing.s,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.radiusMedium,
    paddingHorizontal: spacing.inputPaddingHorizontal,
    paddingVertical: spacing.inputPaddingVertical,
    fontSize: spacing.m,
    color: colors.text,
    backgroundColor: colors.bgGrayLight,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  statusOptions: {
    flexDirection: "row",
    gap: spacing.radiusMedium,
  },
  statusOption: {
    flex: 1,
    paddingVertical: spacing.radiusMedium,
    paddingHorizontal: spacing.m,
    borderRadius: spacing.radiusMedium,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    backgroundColor: colors.bgGrayLight,
  },
  statusOptionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  statusOptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  statusOptionTextSelected: {
    color: colors.white,
  },
  submitButton: {
    backgroundColor: colors.orange,
    paddingVertical: 18,
    borderRadius: spacing.radiusRound,
    alignItems: "center",
    marginTop: spacing.l,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
