import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import IconContainer from "./IconContainer";
import Menu from "../../assets/Menu";
import Logo from "../../assets/logo";

function HeaderLeft(props) {
  const navigation = useNavigation();
  return (
    <IconContainer
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      <Menu style={styles.menu} />
      <Logo style={styles.image} width={wp(25)} height={hp(7)} />
    </IconContainer>
  );
}
const styles = StyleSheet.create({
  menu: {
    marginLeft: wp(12),
  },
  image: {
    marginLeft: wp(3),
    alignItems: "center",
  },
});

export default HeaderLeft;
