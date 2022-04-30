import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppDrawerNavigator from "./DrawerNavigator";
import Landing from "../screens/Landing";
import Details from "../screens/Lockers/components/Details";
import { BottomTabNavigator } from "./BottomTabNavigator";
import LockerScreen from "../screens/Lockers";

const Stack = createNativeStackNavigator();

const DashboardStack = (props) => {
  const navigation = useNavigation();
  //   navigation.setParams({ name: "dashboard1" });
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{ animation: "slide_from_right", headerShown: false }}
    >
      <Stack.Screen
        name="dashboard"
        component={AppDrawerNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="details" component={BottomTabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default DashboardStack;
