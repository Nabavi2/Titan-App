import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import AppText from "./AppText";

const size = Layout.window;

function HeaderRightButton(props) {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.rowContainer}>
        <AppText style={styles.text}>Connect</AppText>
        <FontAwesome5 name="wallet" size={22} color={Colors.white} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: "70%",
    width: size.width * 0.3,
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
    marginTop: "-3%",
    marginRight: "10%",
    fontSize: 15,
  },
});
export default HeaderRightButton;
