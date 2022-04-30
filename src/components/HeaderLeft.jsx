import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import Logo from "../../assets/Logo";
import IconContainer from "./IconContainer";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import Menu from "../../assets/Menu";
import Modal from "react-native-modal";
import AppText from "./AppText";

const size = Layout.window;
function HeaderLeft(props) {
  const navigation = useNavigation();
  return (
    <IconContainer
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Menu />
      <View style={styles.image}>
        <Logo />
      </View>
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
    width: size.width * 0.15,
    height: size.height * 0.07,
    marginLeft: size.width * 0.05,
    marginBottom: 20,
    marginTop: 20,
    alignItems: "center",
  },
});

export default HeaderLeft;
