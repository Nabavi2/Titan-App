import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Box } from "native-base";
import React from "react";
import IconContainer from "../components/IconContainer.jsx";
import Colors from "../constants/Colors.js";
import BuildingInspection from "../screens/BuildingInspection/index.js";
import PopupMenu from "../screens/buildingoverview/conponents/PopupMenu.jsx";
import BuildingOverViewScreen from "../screens/buildingoverview/index.js";
import GlobalOverview from "../screens/GlobalOverview.jsx";

const Stack = createNativeStackNavigator();

function DashboardNavigation(props) {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="globalOverview"
      screenOptions={{
        animation: "slide_from_right",
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: Colors.light.background,
          height: 90,
        },
        headerTitleStyle: {
          fontSize: 16,
          color: Colors.light.text,
        },
      }}
    >
      <Stack.Screen
        name="globalOverview"
        component={GlobalOverview}
        options={{
          headerLeft: () => (
            <Box>
              <IconContainer
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <Ionicons name="menu" size={24} color={Colors.light.gray900} />
              </IconContainer>
            </Box>
          ),
        }}
      />
      <Stack.Screen
        name="buildingOverview"
        component={BuildingOverViewScreen}
        options={{
          title: "Gebäudeübersicht",
          headerShown: true,
          headerRight: () => <PopupMenu />,
          headerLeft: () => (
            <IconContainer
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons name="menu" size={24} color={Colors.light.gray900} />
            </IconContainer>
          ),
        }}
      />
      <Stack.Screen
        name="buildingInspection"
        component={BuildingInspection}
        options={{
          title: "Gebäudeprüfung",
          headerStyle: { backgroundColor: Colors.light.primary },
          headerTitleStyle: { color: "white", fontSize: 16 },
          headerLeft: () => (
            <Box ml={-2}>
              <IconContainer onPress={() => navigation.goBack()}>
                <Ionicons
                  name="md-arrow-back"
                  size={24}
                  color={Colors.light.gray900}
                />
              </IconContainer>
            </Box>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default DashboardNavigation;
