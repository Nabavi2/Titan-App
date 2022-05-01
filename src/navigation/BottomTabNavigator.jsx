import React, { useEffect, useState } from "react";
import { PixelRatio, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import Dashboard from "../screens/Dashboard";
import SubmitInfo from "../screens/SubmitInfo";
import SupportScreen from "../screens/Support";
import Layout from "../constants/Layout";
import LockerScreen from "../screens/Lockers";
import NFTScreen from "../screens/NFTScreen";

//The SVG's import section
import Dashboard1 from "../../assets/Dashboard1";
import Dashboard2 from "../../assets/Dashboard2";
import Lock2 from "../../assets/Lock2";
import Lock1 from "../../assets/Lock1";
import NFT2 from "../../assets/NFT2";
import NFT1 from "../../assets/NFT1";
import Home2 from "../../assets/Home2";
import Bitcoin2 from "../../assets/Bitcoin2";
import Bitcoin1 from "../../assets/Bitcoin1";
import AppDrawerNavigator from "./DrawerNavigator";
import StakeScreen from "../screens/Stack";

const bottomTabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.screen.selectedScreen);
  console.log(screen);
  const { width, height } = Layout.window;
  const [currentScreen, setCurrentScreen] = useState("dashboard");
  useEffect(() => {
    setCurrentScreen(screen);
  }, [screen]);
  return (
    <bottomTabNavigator.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#222222",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: Colors.white,
          overflow: "hidden",
          height: hp(PixelRatio.get() > 2 ? 7.5 : 8.1),
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <bottomTabNavigator.Screen
        name="Dashboard"
        component={AppDrawerNavigator}
        options={() => ({
          tabBarIcon: ({ color, focused }) => {
            return currentScreen === "dashboard" ? (
              <Dashboard2 />
            ) : (
              <Dashboard1 />
            );
          },
        })}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();

            navigation.navigate("dashboard");
          },
        }}
      />
      <bottomTabNavigator.Screen
        name="lockerTab"
        component={SubmitInfo}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            // setCurrentScreen("lockerTab");
            navigation.navigate("locker");
            dispatch(changeSelectedScreen("locker"));
          },
        }}
        options={() => ({
          tabBarIcon: ({ color, focused }) =>
            currentScreen === "locker" ? <Lock2 /> : <Lock1 />,
        })}
      />
      <bottomTabNavigator.Screen
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        name="home"
        component={SupportScreen}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <View style={styles.supportButton}>
              <Home2 />
            </View>
          ),
        })}
      />
      <bottomTabNavigator.Screen
        name="nftMint"
        component={NFTScreen}
        options={() => ({
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) =>
            currentScreen === "nftmint" ? <NFT2 /> : <NFT1 />,
        })}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            // setCurrentScreen("nftmint");
            navigation.navigate("nftmint");
            dispatch(changeSelectedScreen("nftmint"));
          },
        }}
      />
      <bottomTabNavigator.Screen
        name="Stake"
        component={StakeScreen}
        options={() => ({
          title: "",
          tabBarIcon: () =>
            currentScreen === "stake" ? <Bitcoin2 /> : <Bitcoin1 />,
        })}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            // setCurrentScreen("stake");
            navigation.navigate("stake");
            dispatch(changeSelectedScreen("stake"));
          },
        }}
      />
    </bottomTabNavigator.Navigator>
  );
}
const styles = StyleSheet.create({
  DEButton: {
    borderWidth: 3.5,
    width: wp(PixelRatio.get() > 2 ? 8 : 7),
    height: hp(4),
    borderRadius: wp(8) / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  supportButton: {
    width: wp(15),
    height: "100%",
    borderRadius: wp(15) / 2,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#D0BDEA",
  },
  image: {
    width: "34%",
    height: "50%",
    marginTop: "1.5%",
  },
});
