import React from "react";
import { Image, PixelRatio, Pressable, View } from "react-native";
import { Box, Row } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
import SupportScreen from "../screens/Support";
import Layout from "../constants/Layout";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  const { width, height } = Layout.window;
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
          height: hp(8),
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
                width: wp(15),
                height: "100%",
                borderRadius: wp(15) / 2,
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
                source={require("../../assets/up.png")}
                style={{
                  width: "34%",
                  height: "50%",
                  marginTop: "1.5%",
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
                borderWidth: 3.5,
                width: wp(7),
                height: hp(4),
                borderRadius: wp(7) / 2,
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
