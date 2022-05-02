import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DropdownComponent from "../../components/DropdownComponent";
import Colors from "../../constants/Colors";

function AdvertiseScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Advertisement screen</Text>
      <DropdownComponent />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default AdvertiseScreen;
