import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Box, Column, Row } from "native-base";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  Octicons,
} from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import DefiEnchange from "../screens/DefiEnchange";
import Dashboard from "../screens/Dashboard";
import HomeScreen from "../screens/Home";
import NFTScreen from "../screens/NFTScreen";
import MapScrollScreen from "../screens/MapScroll";
import HeaderRightButton from "../components/HeaderButton";
import HeaderLeft from "../components/HeaderLeft";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const navigation = useNavigation();
  return (
    <DrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={styles.container}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={styles.image}
                  source={require("../../assets/logo.png")}
                />
              </View>

              <DrawerItemList {...props} />
            </SafeAreaView>
          </View>
        );
      }}
      screenOptions={{
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.primary,
        headerTintColor: Colors.white,
        drawerInactiveTintColor: Colors.text,
        drawerInactiveBackgroundColor: Colors.white,
        headerShown: false,
        drawerItemStyle: {
          width: size.width * 0.6,
          marginLeft: 16,
        },
        drawerLabelStyle: { fontWeight: "700" },
      }}
    >
      <DrawerNavigator.Screen
        name="home"
        component={BottomTabNavigator}
        options={{
          title: "HomePage",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={Platform.OS === "android" ? "home-outline" : "home-outline"}
              size={23}
              color={focused ? Colors.white : Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
          headerShown: true,
          headerTitleStyle: { color: Colors.white },
        }}
      />
      <DrawerNavigator.Screen
        name="defienchange"
        component={DefiEnchange}
        options={{
          title: "defienchange",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color={Colors.black}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
          headerShown: true,
          headerTitleStyle: { color: Colors.header },
        }}
      />

      <DrawerNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: "Verkehrssicherung",
          drawerIcon: ({ focused }) => (
            <Foundation
              name="page-edit"
              size={24}
              color={focused ? Colors.white : Colors.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
          headerShown: true,
        }}
      />
      <DrawerNavigator.Screen
        name="nftscreen"
        component={NFTScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="map-marked"
              size={24}
              color={focused ? Colors.white : Colors.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
          headerShown: true,
        }}
      />
      <DrawerNavigator.Screen
        name="map"
        component={MapScrollScreen}
        options={{
          title: "Settings",
          drawerIcon: ({ focused }) => (
            <Octicons
              name="settings"
              size={24}
              color={focused ? Colors.white : Colors.black}
              style={{ marginLeft: 5 }}
            />
          ),
          headerRight: () => <HeaderRightButton />,
          headerLeft: () => <HeaderLeft />,
          headerShown: true,
        }}
      />
    </DrawerNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: size.width * 0.24,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100,
  },
  constainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
});
export default AppDrawerNavigator;
