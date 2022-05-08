import React from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import Colors from "../../constants/Colors";

function SupportScreen(props) {
  return (
    <View style={styles.container}>
      <Text> TjSupport screen ....{PixelRatio}</Text>
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
export default SupportScreen;
