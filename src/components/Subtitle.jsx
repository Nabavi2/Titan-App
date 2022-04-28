import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";

function Subtitle({ children, style }) {
  return <AppText style={{ ...styles.subtitle, ...style }}>{children}</AppText>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 15,
    fontFamily: "vietnamMedium",
  },
});

export default Subtitle;
