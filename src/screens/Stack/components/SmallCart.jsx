import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;
function SmallCart({ title, number }) {
  return (
    <View style={styles.cart}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    height: size.height * 0.16,
    width: size.width * 0.26,
    backgroundColor: Colors.white,
    borderRadius: 10,
    elevation: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 9,
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  title: {
    marginTop: 20,
    alignSelf: "center",
    color: Colors.primary,
    fontFamily: "vsBold",
    fontSize: 8,
  },
  number: {
    fontSize: 30,
    fontFamily: "vsBold",
    color: Colors.black,
    margin: 20,
    alignSelf: "center",
  },
});

export default SmallCart;
