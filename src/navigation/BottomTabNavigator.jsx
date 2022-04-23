import React from "react";
import { Image, Pressable, View } from "react-native";
import { Box, Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  AntDesign,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import NFTScreen from "../screens/NFTScreen";
import DefiExchange from "../screens/DefiEnchange";
import Dashboard from "../screens/Dashboard";
import MapScrollScreen from "../screens/MapScroll";
import SubmitInfo from "../screens/SubmitInfo";
import IconContainer from "../components/IconContainer";
import HeaderRightButton from "../components/HeaderRightButton";
import SupportScreen from "../screens/Support";
import Layout from "../constants/Layout";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#222222",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.white,
          overflow: "hidden",
          height: "10%",
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={34} color={color} />
          ),
        })}
      />
      <bottomTabNavigator.Screen
        name="lock"
        component={MapScrollScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="lock-outline" size={34} color={color} />
          ),
        })}
      />
      <bottomTabNavigator.Screen
        listeners={{
          tabPress: (e) => e.preventDefault(),
        }}
        name="home"
        component={SupportScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: "80%",
                height: "98%",
                borderRadius: Layout.window.width / 1,
                backgroundColor: Colors.primary,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#D0BDEA",
              }}
            >
              <Feather name="home" size={36} color={Colors.white} />
            </View>
          ),
        })}
      />

      <bottomTabNavigator.Screen
        name="submitinfo"
        component={SubmitInfo}
        options={() => ({
          title: "SubmitInfo",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("../../assets/pup.png")}
                style={{ width: "34%", height: "50%", marginTop: "1.5%" }}
              />
            ) : (
              <Image
                source={require("../../assets/gup.png")}
                style={{
                  width: "34%",
                  height: "50%",
                  marginTop: "1.5%",
                  marginLeft: 7,
                }}
              />
            ),

          headerStyle: {
            backgroundColor: Colors.white,
          },
          headerTitleStyle: {
            color: "white",
          },
        })}
      />
      <bottomTabNavigator.Screen
        name="defienchange"
        component={DefiExchange}
        options={() => ({
          title: "defienchange",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                borderColor: focused ? Colors.primary : color,
                borderWidth: 2,
                width: 38,
                height: 38,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome
                name="bitcoin"
                size={24}
                color={focused ? Colors.primary : color}
              />
            </View>
          ),
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
