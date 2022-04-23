import React from "react";
import { Image, Pressable, View } from "react-native";
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
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import NFTScreen from "../screens/NFTScreen";
import DefiExchange from "../screens/DefiEnchange";
import Dashboard from "../screens/Dashboard";
import MapScrollScreen from "../screens/MapScroll";
import SubmitInfo from "../screens/SubmitInfo";
import IconContainer from "../components/IconContainer";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#afb2b5",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.white,
          overflow: "hidden",
        },
        tabBarShowLabel: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.background,
          height: 90,
        },
        headerTitleStyle: {
          fontSize: 16,
          color: Colors.black,
        },
      }}
    >
      <bottomTabNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Feather name="grid" size={24} color={color} />
          ),

          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="home"
        component={MapScrollScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="lock-outline" size={24} color={color} />
          ),
          headerRight: () => (
            <View>
              <IconContainer onPress={() => console.log("dkfsfdj")}>
                <Entypo
                  name="dots-three-vertical"
                  size={24}
                  color={Colors.black}
                />
              </IconContainer>
            </View>
          ),
          headerShown: false,
          headerLeft: () => (
            <Box ml={5}>
              <IconContainer
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Ionicons name="menu" size={24} color={Colors.black} />
              </IconContainer>
            </Box>
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
                style={{ width: 30, height: 30 }}
              />
            ) : (
              <Image
                source={require("../../assets/up.webp")}
                style={{ width: 30, height: 30 }}
              />
            ),
          headerShown: false,
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
          tabBarIcon: ({ color }) => (
            <FontAwesome5
              name="map-marked"
              size={24}
              color={color}
              style={{ marginLeft: 5 }}
            />
          ),
          headerShown: false,
        })}
      />
      <bottomTabNavigator.Screen
        name="nftScreen"
        component={NFTScreen}
        options={() => ({
          title: "NFTScreen",
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="settings"
              size={24}
              color={focused ? Colors.primary : Colors.white}
              style={{ marginLeft: 5 }}
            />
          ),
          headerShown: false,
        })}
      />
    </bottomTabNavigator.Navigator>
  );
}
