import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";

import IconContainer from "./IconContainer";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const size = Layout.window;
function HeaderLeft(props) {
  const navigation = useNavigation();
  return (
    <IconContainer
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Foundation
        name="graph-horizontal"
        size={30}
        color={Colors.black}
        style={{ marginLeft: 14 }}
      />
      <Image style={styles.image} source={require("../../assets/logo.png")} />
    </IconContainer>
  );
}
const styles = StyleSheet.create({
  menu: {
    height: 20,
    width: 30,
    marginLeft: 10,
  },
  image: {
    width: size.width * 0.18,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100,
    // backgroundColor: "red",
  },
});

export default HeaderLeft;
