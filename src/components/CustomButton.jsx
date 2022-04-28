import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Colors from "../constants/Colors";
import AppText from "./AppText";

function CustomButton({ title, onPress, style, textStyle }) {
  return (
    <Pressable onPress={onPress} style={{ ...styles.container, ...style }}>
      <AppText style={{ ...styles.text, ...textStyle }}>{title}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(24),
    height: hp(3.4),
    backgroundColor: Colors.secondary,
    borderRadius: wp(100) / 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    marginBottom: "2%",
    fontSize: 15,
    fontFamily: "vietnamMedium",
  },
});

export default CustomButton;
