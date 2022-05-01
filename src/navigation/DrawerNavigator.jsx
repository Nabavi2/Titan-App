import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import DefiExchange from "../screens/DefiEnchange";
import NFTScreen from "../screens/NFTScreen";
import MapScrollScreen from "../screens/MapScroll";
import HeaderRightButton from "../components/HeaderRightButton";
import HeaderLeft from "../components/HeaderLeft";
import LockerScreen from "../screens/Lockers";
import ScanScreen from "../screens/Scan";
import LoungeScreen from "../screens/Lounge";
import SupportScreen from "../screens/Support";
import AdvertiseScreen from "../screens/Advertise";
import LounchpadComponent from "../components/LounchpadComponent";
import DrawerDropdown from "../components/DrawerDropdown";
import CreatePresale from "../screens/CreatePresale";
import ManagePresale from "../screens/ManagePresale";

//The SVG's import section
import Logo2 from "../../assets/Logo2";
import Home from "../../assets/Home";
import Defi from "../../assets/Defi";
import Stake from "../../assets/Stake";
import Scan from "../../assets/Scan";
import NFT from "../../assets/NFT";
import Game from "../../assets/Game";
import Lounge from "../../assets/Lounge";
import LoungeT from "../../assets/LoungeT";
import Support from "../../assets/Support";
import Ads from "../../assets/Ads";
import Dashboard from "../screens/Dashboard";
import Details from "../screens/Lockers/components/Details";
import SubmitInfo from "../screens/SubmitInfo";
import StakeScreen from "../screens/Stack";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      initialRouteName={"dashboard"}
      drawerContent={(props) => {
        return (
          <ScrollView>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View style={styles.image}>
                  <Logo2 />
                </View>
              </View>
              <DrawerItemList {...props} />
            </SafeAreaView>
          </ScrollView>
        );
      }}
      screenOptions={{
        headerRight: () => <HeaderRightButton />,
        headerLeft: () => <HeaderLeft />,
        drawerActiveTintColor: Colors.text,
        drawerActiveBackgroundColor: Colors.white,
        drawerContentContainerStyle: { backfaceVisibility: "hidden" },
        headerTintColor: Colors.black,
        drawerInactiveTintColor: Colors.text,
        drawerInactiveBackgroundColor: Colors.white,
        drawerHideStatusBarOnOpen: false,
        headerShadowVisible: false,
        headerStyle: { height: size.height * 0.12 },
        drawerItemStyle: {
          marginLeft: 20,
          marginRight: 20,
        },
        drawerLabelStyle: { fontFamily: "vsBold" },
      }}
    >
      <DrawerNavigator.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          title: "HomePage",
          drawerIcon: () => <Home />,

          headerTitleStyle: { color: Colors.white },
        }}
      />
      <DrawerNavigator.Screen
        name="defiexchange"
        component={DefiExchange}
        options={{
          title: "DefiExchange",
          headerTitle: "",
          drawerIcon: () => <Defi />,
        }}
      />
      <DrawerNavigator.Screen
        name="launchpad"
        component={LounchpadComponent}
        listeners={{ drawerItemPress: (e) => e.preventDefault() }}
        options={{
          drawerIcon: () => <DrawerDropdown id={1} />,
        }}
      />
      <DrawerNavigator.Screen
        name="locker"
        component={LockerScreen}
        listeners={{ drawerItemPress: (e) => e.preventDefault() }}
        options={{
          title: "",
          drawerIcon: () => <DrawerDropdown id={2} />,
        }}
      />
      <DrawerNavigator.Screen
        name="stake"
        component={StakeScreen}
        options={{
          headerStyle: { height: size.height * 0.135 },
          title: "Stake",
          headerTitle: "",
          drawerIcon: () => (
            <View style={styles.icon}>
              <Stake />
            </View>
          ),
        }}
      />

      <DrawerNavigator.Screen
        name="scan"
        component={ScanScreen}
        options={{
          headerStyle: { height: size.height * 0.135 },
          title: "Scan",
          headerTitle: "",
          drawerIcon: () => <Scan />,
        }}
      />
      <DrawerNavigator.Screen
        name="nftmint"
        component={NFTScreen}
        options={{
          headerStyle: { height: size.height * 0.135 },
          title: "NFTMint",
          headerTitle: "",
          drawerIcon: () => <NFT />,
        }}
      />
      <DrawerNavigator.Screen
        name="titan"
        component={MapScrollScreen}
        options={{
          title: "Titanx Game",
          headerTitle: "",
          drawerIcon: () => <Game />,
        }}
      />
      <DrawerNavigator.Screen
        name="lounge"
        component={LoungeScreen}
        options={{
          title: "Lounge",
          headerTitle: "",
          drawerIcon: () => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <LoungeT />
              <Lounge />
            </View>
          ),
        }}
      />
      <DrawerNavigator.Screen
        name="support"
        component={SupportScreen}
        options={{
          title: "Support",
          headerTitle: "",
          drawerIcon: ({ focused }) => <Support />,
        }}
      />
      <DrawerNavigator.Screen
        name="advertise"
        component={AdvertiseScreen}
        options={{
          title: "Advertise",
          headerTitle: "",
          drawerIcon: () => <Ads />,
        }}
      />
      <DrawerNavigator.Screen
        name="createPresale"
        component={CreatePresale}
        options={{
          headerTitle: "",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <DrawerNavigator.Screen
        name="managePresale"
        component={ManagePresale}
        options={{
          title: "Manage Presal",
          headerTitle: "",
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <DrawerNavigator.Screen
        name="details"
        component={Details}
        options={{
          headerShown: false,
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </DrawerNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: size.width * 0.24,
    height: size.height * 0.06,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 25,
  },

  icon: {
    borderColor: Colors.black,
    borderWidth: 2,
    width: 18,
    height: 18,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -6,
  },
});
export default AppDrawerNavigator;
