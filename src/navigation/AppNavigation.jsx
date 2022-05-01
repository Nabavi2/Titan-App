import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Landing from "../screens/Landing";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <Stack.Screen name="home" component={BottomTabNavigator} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
