import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Landing from "../screens/Landing";
import Details from "../screens/Lockers/components/Details";
import { BottomTabNavigator } from "./BottomTabNavigator";
import LockerScreen from "../screens/Lockers";

const Stack = createNativeStackNavigator();

const LockerStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="locker"
      screenOptions={{ animation: "slide_from_right", headerShown: false }}
    >
      <Stack.Screen name="locker" component={AppDrawerNavigator} options={{}} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

export default LockerStack;
