import {
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  Feather,
} from "@expo/vector-icons";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { BottomTabNavigator } from "./BottomTabNavigator";
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
import HomeScreen from "../screens/Home";
import Dashboard from "../screens/Dashboard";

const size = Layout.window;
const DrawerNavigator = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <DrawerNavigator.Navigator
      initialRouteName="home"
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
        name="home"
        component={Dashboard}
        options={{
          title: "Home",
          drawerIcon: ({ focused }) => <Home />,

          headerTitleStyle: { color: Colors.white },
        }}
      />
      <DrawerNavigator.Screen
        name="defiexchange"
        component={DefiExchange}
        options={{
          title: "DefiExchange",
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
          title: "Lockers",
          drawerIcon: () => <DrawerDropdown id={2} />,
        }}
      />
      <DrawerNavigator.Screen
        name="stake"
        component={StackScreen}
        options={{
          title: "Stake",
          drawerIcon: ({ focused }) => (
            <View
              style={[
                styles.icon,
                { borderColor: focused ? Colors.white : Colors.black },
              ]}
            >
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
        name="nft"
        component={NFTScreen}
        options={{
          title: "NFT mint",
          drawerIcon: ({ focused }) => <NFT />,
        }}
      />
      <DrawerNavigator.Screen
        name="titan"
        component={MapScrollScreen}
        options={{
          title: "Titanx Game",
          drawerIcon: ({ focused }) => <Game />,
        }}
      />
      <DrawerNavigator.Screen
        name="lounge"
        component={LoungeScreen}
        options={{
          title: "Lounge",
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
          drawerIcon: ({ focused }) => <Support />,
        }}
      />
      <DrawerNavigator.Screen
        name="advertise"
        component={AdvertiseScreen}
        options={{
          title: "Advertise",
          drawerIcon: ({ focused }) => <Ads />,
        }}
      />
      <DrawerNavigator.Screen
        name="createPresale"
        component={CreatePresale}
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
      <DrawerNavigator.Screen
        name="managePresale"
        component={ManagePresale}
        options={{
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
