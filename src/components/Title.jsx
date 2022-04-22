import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

function Title({ children, style }) {
  return <AppText style={[styles.title, style]}>{children}</AppText>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "vietnameBold",
  },
});

export default Title;
