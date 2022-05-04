import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function TitanxGame(props) {
  return (
    <View style={styles.container}>
      <Text> This is the Titanx Game screen</Text>
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
export default TitanxGame;
