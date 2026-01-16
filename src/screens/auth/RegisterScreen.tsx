import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { colors } from "../../theme/colors";
import { images } from "../../theme/images";
import { spacing } from "../../theme/spacing";
import LogoOrange from "../../assets/svg/logo_orange.svg";

export function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("Darrell Abbott");
  const [email, setEmail] = useState("darrel.abbott@example.com");
  const [phone, setPhone] = useState("+507 1234-5678");
  const [password, setPassword] = useState("Qwerty123");
  const [confirmPassword, setConfirmPassword] = useState("Qwerty123");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    navigation.replace("AppTabs");
  };

  const handleBackToLogin = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <LogoOrange width={150} height={40} />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.welcomeTitle}>Crear cuenta</Text>
          <Text style={styles.subtitle}>Completa tus datos</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor={colors.textTertiary}
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              placeholderTextColor={colors.textTertiary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="+507 6000-0000"
              placeholderTextColor={colors.textTertiary}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Contraseña"
                placeholderTextColor={colors.textTertiary}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <Pressable
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image
                  source={images.eye}
                  style={[styles.eyeIcon, !showPassword && styles.eyeIconHidden]}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirmar contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirmar contraseña"
                placeholderTextColor={colors.textTertiary}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />
              <Pressable
                style={styles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Image
                  source={images.eye}
                  style={[styles.eyeIcon, !showConfirmPassword && styles.eyeIconHidden]}
                />
              </Pressable>
            </View>
          </View>

          <Pressable style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Crear cuenta</Text>
          </Pressable>

          <Text style={styles.separator}>o también</Text>

          <Pressable onPress={handleBackToLogin}>
            <Text style={styles.loginText}>Ya tengo cuenta</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    height: 180,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  formSection: {
    flex: 1,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
    paddingBottom: spacing.xl,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.s,
  },
  subtitle: {
    fontSize: spacing.m,
    color: colors.textSecondary,
    marginBottom: spacing.l,
  },
  inputContainer: {
    marginBottom: spacing.m,
  },
  inputLabel: {
    position: "absolute",
    top: -spacing.s,
    left: spacing.radiusMedium,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xs,
    fontSize: 12,
    color: colors.primary,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.radiusSmall,
    paddingHorizontal: spacing.inputPaddingHorizontal,
    paddingVertical: spacing.inputPaddingVertical,
    fontSize: spacing.m,
    color: colors.text,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.radiusSmall,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: spacing.inputPaddingHorizontal,
    paddingVertical: spacing.inputPaddingVertical,
    fontSize: spacing.m,
    color: colors.text,
  },
  eyeButton: {
    padding: spacing.radiusMedium,
  },
  eyeIcon: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
    tintColor: colors.primary,
  },
  eyeIconHidden: {
    opacity: 0.5,
  },
  registerButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.buttonPaddingVertical,
    borderRadius: spacing.radiusRound,
    alignItems: "center",
    marginTop: spacing.s,
  },
  registerButtonText: {
    color: colors.white,
    fontSize: spacing.m,
    fontWeight: "700",
  },
  separator: {
    textAlign: "center",
    color: colors.textTertiary,
    fontSize: 14,
    marginVertical: spacing.m,
  },
  loginText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: spacing.m,
    fontWeight: "600",
  },
});
