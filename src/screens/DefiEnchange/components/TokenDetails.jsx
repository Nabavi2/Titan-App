import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
const size = Layout.window;

function TokenDetails({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.culomnContainer}>
        <Text>Token</Text>
        <Text>Name</Text>
        <Text style={styles.text}>ApeLab</Text>
      </View>
      <View style={styles.culomnContainer}>
        <Text>Market</Text>
        <Text>Cap</Text>
        <Text style={styles.text}>$20K</Text>
      </View>
      <View style={styles.culomnContainer}>
        <Text>Total</Text>
        <Text>Suplly</Text>
        <Text style={styles.text}>100B</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: size.height * 0.08,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: size.width * 0.12,
  },
  culomnContainer: { flexDirection: "column", alignItems: "center" },
  text: {
    fontSize: 16,
    fontFamily: "vsBold",
    color: Colors.primary,
  },
});
export default TokenDetails;
