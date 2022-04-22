import React from "react";
import { Pressable } from "react-native";
import { Box, Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome5,
  Ionicons,
  Entypo,
  Octicons,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import DashboardNavigation from "./DashboardNavigation";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarInactiveTintColor: "#afb2b5",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.light.gray800,
          overflow: "hidden",
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.light.background,
          height: 90,
        },
        headerTitleStyle: {
          fontSize: 16,
          color: Colors.light.text,
        },
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={DashboardNavigation}
        options={() => ({
          title: "Global overview",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"building"} size={23} color={color} />
          ),
          headerShown: false,
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
