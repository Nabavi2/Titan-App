import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function TopCart() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/locker.png")}
        style={styles.image}
      />

      <Text style={styles.text}>
        Look your token with Apelock and earn/ withdraw
      </Text>
      <Text style={[styles.text, { marginBottom: 20 }]}>
        rewards whilst locked
      </Text>
      <CustomButton
        title="View Token Lockers"
        style={styles.button}
      ></CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: size.height * 0.4,
    width: size.width * 0.9,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  image: {
    height: size.height * 0.23,
    width: size.width * 0.4,
    alignSelf: "center",
    marginTop: -20,
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    alignSelf: "center",
    marginHorizontal: 10,
  },
  button: {
    marginTop: 10,
    width: size.width * 0.55,
    height: size.height * 0.06,
    backgroundColor: Colors.inputBackground,
  },
});

export default TopCart;
