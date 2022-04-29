import React from "react";
import { StyleSheet, View } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function CardContainer({ children, style }) {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    elevation: 3,
    borderRadius: Layout.window.width / 45,
    // flex: 1,
  },
});

export default CardContainer;
