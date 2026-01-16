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
import LogoOrange from "../../assets/svg/logo_orange2.svg";

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace("AppTabs");
  };

  const handleRegister = () => {
    navigation.navigate("Register");
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
          <LogoOrange width={150} height={40} style={{ marginTop: -75 }} />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.welcomeTitle}>Bienvenido a boxful 🦄</Text>
          <Text style={styles.subtitle}>Ingresa tu correo electrónico</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="example@"
              placeholderTextColor={colors.textTertiary}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
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

          <Pressable style={styles.passkeyButton}>
            <Image source={images.fingerprint} style={styles.fingerprintIcon} />
            <Text style={styles.passkeyText}>Ingresar con passkey</Text>
          </Pressable>

          <Pressable style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Iniciar sesión</Text>
          </Pressable>

          <Text style={styles.separator}>o también</Text>

          <Pressable onPress={handleRegister}>
            <Text style={styles.registerText}>Registrar cuenta</Text>
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
    height: 280,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  formSection: {
    flex: 1,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
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
    borderColor: colors.primary,
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
  passkeyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.m,
    marginBottom: spacing.s,
  },
  fingerprintIcon: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
    marginRight: spacing.s,
    tintColor: colors.primary,
  },
  passkeyText: {
    fontSize: spacing.m,
    color: colors.primary,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.buttonPaddingVertical,
    borderRadius: spacing.radiusRound,
    alignItems: "center",
    marginTop: spacing.s,
  },
  loginButtonText: {
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
  registerText: {
    textAlign: "center",
    color: colors.primary,
    fontSize: spacing.m,
    fontWeight: "600",
  },
});
