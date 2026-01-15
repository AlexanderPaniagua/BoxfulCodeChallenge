import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { AppTabsParamList } from "../types/navigation";

import { HomeScreen } from "../screens/home/HomeScreen";
import { HistoryScreen } from "../screens/home/HistoryScreen";
import { AnalyticsScreen } from "../screens/home/AnalyticsScreen";
import { BillingScreen } from "../screens/home/BillingScreen";
import { AccountScreen } from "../screens/home/AccountScreen";

const Tab = createBottomTabNavigator<AppTabsParamList>();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Billing" component={BillingScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}