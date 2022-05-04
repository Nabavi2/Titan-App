import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
const size = Layout.window;

function ApeTransactions() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontFamily: "vsBold", marginLeft: 15 }}>
        Ape Transaction
      </Text>
      <View style={{ width: "100%" }}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.title}>Side</Text>
          <Text style={styles.title}>Price USD</Text>
          <Text style={styles.title}>Price BNB</Text>
          <Text style={styles.title}>APE Size</Text>
          <Text style={styles.title}>Total BNB</Text>
          <Text style={[styles.title, { marginRight: 30 }]}>Exchange</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>12:37:59</Text>
          <Text style={styles.text}>SELL</Text>
          <Text style={styles.text}>$0.0000020</Text>
          <Text style={styles.text}>$0.0000000</Text>
          <Text style={styles.text}>1472734.72</Text>
          <Text style={styles.text}>0.75342233</Text>
          <Text style={styles.text}>Pancakev2</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  title: {
    fontSize: 10,
    color: Colors.primary,
    marginHorizontal: size.width * 0.07,
  },
  text: {
    fontSize: 9,
    color: Colors.black,
  },
});
export default ApeTransactions;
