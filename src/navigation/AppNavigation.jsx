import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../screens/Login";
import Layout from "../constants/Layout";
import MapStatusScreen from "../screens/map/MapStatusScreen";
import TrafficSafety from "../screens/TrafficSafety";

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{
          headerShown: false,
          animation: "simple_push",
        }}
      >
        <Stack.Screen name="dashboard" component={AppDrawerNavigator} />
        <Stack.Screen name="loginScreen" component={LoginScreen} />
=======
      <Stack.Navigator initialRouteName="loginScreen">
        <Stack.Screen
          name="dashboard"
          component={AppDrawerNavigator}
          options={{
            title: "Dashboard",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="loginScreen"
          component={TrafficSafety}
          options={{
            headerShown: false,
          }}
        />
>>>>>>> 122c53fa7001b9bf5d579f125bd801818de85475
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
