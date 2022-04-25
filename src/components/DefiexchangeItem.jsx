import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const size = Layout.window;

function DefiexchangeItem({ title, number, subNumber, percentage,onPress }) {
  return (
    <Pressable style={styles.rowContainer} onPressIn={onPress} >
      <Text style={styles.title}>{title}</Text>
      <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
        <Text
          style={
            (styles.number,
            { color: subNumber > 0 ? Colors.green400 : Colors.red })
          }
        >
          {number}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subNumber}>{subNumber}</Text>
          <Text>({percentage}%)</Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    height: size.height * 0.11,
    width: "100%",
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: "vsBold",
  },
  number: {
    fontSize: 17,
  },
  subNumber: {
    fontSize: 12,
  },
});
export default DefiexchangeItem;
