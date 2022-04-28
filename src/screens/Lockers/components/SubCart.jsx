import React from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";

import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

const size = Layout.window;

function SubCart() {
  return <View style={styles.container}>
      <View>
          
      </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    height: size.height * 0.8,
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
  title: {
    color: Colors.primary,
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

export default SubCart;
