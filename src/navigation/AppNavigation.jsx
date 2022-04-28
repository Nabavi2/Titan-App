import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Landing from "../screens/Landing";

const Stack = createNativeStackNavigator();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="landing"
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <Stack.Screen name="home" component={AppDrawerNavigator} options={{}} />
        <Stack.Screen name="landing" component={Landing} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
