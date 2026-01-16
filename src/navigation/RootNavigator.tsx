import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../types/navigation";

import { SplashScreen } from "../screens/SplashScreen";
import { OnboardingScreen } from "../screens/onboarding/OnboardingScreen";
import { AuthNavigator } from "./AuthNavigator";
import { AppTabs } from "./AppTabs";
import { CreateShipmentScreen } from "../screens/home/CreateShipmentScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

// App navigation flow
export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="AppTabs" component={AppTabs} />
        <Stack.Screen
          name="CreateShipment"
          component={CreateShipmentScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
