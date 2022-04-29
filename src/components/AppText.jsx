import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

function AppText({ children, style, isSubtitle = false }) {
  return (
    <Text
      numberOfLines={isSubtitle ? 1 : null}
      ellipsizeMode={"middle"}
      style={{ ...styles.text, ...style }}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: "vietnam",
  },
});

export default AppText;
