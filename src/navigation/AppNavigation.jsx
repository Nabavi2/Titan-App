import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/Landing";

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

const AppNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
