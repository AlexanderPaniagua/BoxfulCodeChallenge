import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { AppTabsParamList } from "../types/navigation";
import { colors } from "../theme/colors";
import { images } from "../theme/images";
import { spacing } from "../theme/spacing";

import { HomeScreen } from "../screens/home/HomeScreen";
import { HistoryScreen } from "../screens/home/HistoryScreen";
import { AnalyticsScreen } from "../screens/home/AnalyticsScreen";
import { BillingScreen } from "../screens/home/BillingScreen";
import { AccountScreen } from "../screens/home/AccountScreen";

const Tab = createBottomTabNavigator<AppTabsParamList>();

interface TabIconProps {
  focused: boolean;
  iconSource: any;
  label: string;
}

function TabIcon({ focused, iconSource, label }: TabIconProps) {
  return (
    <View style={styles.tabIconContainer}>
      <Image
        source={iconSource}
        style={[
          styles.tabIcon,
          { tintColor: focused ? colors.orange : colors.text },
        ]}
      />
      <Text
        style={[
          styles.tabLabel,
          { color: focused ? colors.orange : colors.text },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

export function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={images.navbar.home}
              label="Envío"
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={images.navbar.history}
              label="Historial"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={images.navbar.analytics}
              label="Analíticas"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Billing"
        component={BillingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={images.navbar.billing}
              label="Facturación"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              iconSource={images.navbar.account}
              label="Cuenta"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 95,
    backgroundColor: colors.white,
    borderTopWidth: 0,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: spacing.radiusMedium,
    elevation: 10,
    paddingTop: spacing.md,
    paddingBottom: spacing.l,
  },
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: spacing.xs,
  },
  tabIcon: {
    width: spacing.iconMedium,
    height: spacing.iconMedium,
    marginBottom: spacing.xs,
  },
  tabLabel: {
    fontSize: 8,
    fontWeight: "400",
  },
});
