import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

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
      <Ionicons
        name="menu"
        size={24}
        color={Colors.black}
        style={{ marginLeft: 10 }}
      />
      <Image style={styles.image} source={require("../../assets/logo.png")} />
    </IconContainer>
  );
}
const styles = StyleSheet.create({
  image: {
    width: size.width * 0.24,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100,
  },
});

export default HeaderLeft;
