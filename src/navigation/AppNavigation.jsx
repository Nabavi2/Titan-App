import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Landing from "../screens/Landing";
import Details from "../screens/Lockers/components/Details";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="landing"
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <Stack.Screen name="landing" component={Landing} options={{}} />
        <Stack.Screen name="home" component={BottomTabNavigator} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
