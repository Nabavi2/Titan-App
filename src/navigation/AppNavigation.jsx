import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Layout from "../constants/Layout";
import Dashboard from "../screens/Dashboard";
import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="dashboard">
        <Stack.Screen
          name="dashboard"
          component={AppDrawerNavigator}
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
