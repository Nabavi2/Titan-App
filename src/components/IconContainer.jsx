import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import Layout from "../constants/Layout";

const size = Layout.window;

function IconContainer({ children, onPress }) {
  return (
    <Pressable onPressIn={onPress}>
      <View style={styles.iconContainer}>{children}</View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    width: size.width * 0.3,
    marginLeft: 15,
    height: 70,
  },
});
export default IconContainer;
