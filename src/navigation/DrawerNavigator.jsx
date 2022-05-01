import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import DefiExchange from "../screens/DefiEnchange";
import NFTScreen from "../screens/NFTScreen";
import MapScrollScreen from "../screens/MapScroll";
import HeaderRightButton from "../components/HeaderRightButton";
import HeaderLeft from "../components/HeaderLeft";
import LockerScreen from "../screens/Lockers";
import StackScreen from "../screens/Stack";
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
import { useDispatch } from "react-redux";
import { changeSelectedScreen } from "../redxu/screenSlice";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = (props) => {
  const disptach = useDispatch();
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
        drawerActiveTintColor: Colors.text,
        drawerActiveBackgroundColor: Colors.white,
        headerTintColor: Colors.black,
        headerRight: () => <HeaderRightButton />,
        headerLeft: () => <HeaderLeft />,
        drawerInactiveTintColor: Colors.text,
        drawerInactiveBackgroundColor: Colors.white,
        headerShadowVisible: false,
        headerStyle: { height: 110 },
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
          drawerIcon: ({ focused }) => <Defi />,
        }}
      />
      <DrawerNavigator.Screen
        name="launchpad"
        component={LounchpadComponent}
        listeners={{ drawerItemPress: (e) => e.preventDefault() }}
        options={{
          drawerIcon: ({ focused }) => <DrawerDropdown id={1} />,
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
        component={SubmitInfo}
        options={{
          title: "Stake",
          headerTitle: "",
          drawerIcon: ({ focused }) => (
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
          title: "Scan",
          drawerIcon: ({ focused }) => <Scan />,
        }}
      />
      <DrawerNavigator.Screen
        name="nftmint"
        component={NFTScreen}
        options={{
          title: "NFTMint",
          headerTitle: "",
          drawerIcon: () => <NFT />,
        }}
        listeners={{
          drawerItemPress: (_) => disptach(changeSelectedScreen("nftmint")),
        }}
      />
      <DrawerNavigator.Screen
        name="titan"
        component={MapScrollScreen}
        options={{
          title: "Titanx Game",
          headerTitle: "",
          drawerIcon: ({ focused }) => <Game />,
        }}
      />
      <DrawerNavigator.Screen
        name="lounge"
        component={LoungeScreen}
        options={{
          title: "Lounge",
          headerTitle: "",
          drawerIcon: ({ focused }) => (
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
