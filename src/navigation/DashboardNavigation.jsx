import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Dashboard from "../screens/Dashboard";
import PresableDetail from "../screens/PresableDetail";

const Stack = createNativeStackNavigator();

function DashboardNavigation(props) {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        animation: "slide_from_right",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "red",
          height: 20,
        },
        headerLargeStyle: {},
      }}
    >
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="presaleDetail" component={PresableDetail} />
    </Stack.Navigator>
  );
}

export default DashboardNavigation;
