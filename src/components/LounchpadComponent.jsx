import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

function LounchpadComponent(props) {
  const data = [
    {
      id: "1",
      title: "Create launchpad",
    },
    {
      id: "2",
      title: "Dashboard",
    },
    {
      id: "3",
      title: "Manage presale",
    },
  ];
  return (
    <View style={[styles.container, { height: !status ? 100 : 20 }]}></View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: Colors.inputBackground,
    marginLeft: 100,
  },
  imageButton: {
    width: 10,
    height: 10,
  },
});
export default LounchpadComponent;
