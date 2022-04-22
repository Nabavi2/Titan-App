import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

import Layout from "../constants/Layout";

const size = Layout.window;

function HeaderRightButton(props) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.rowContainer}>
        <Text style={styles.text}>Connect</Text>
        <FontAwesome5 name="wallet" size={24} color={Colors.white} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: size.width * 0.34,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 13,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontWeight: "700",
    marginRight: 10,
    fontSize: 17,
  },
});
export default HeaderRightButton;
