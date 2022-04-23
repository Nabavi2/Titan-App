import { Foundation, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import IconContainer from "./IconContainer";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const size = Layout.window;
function HeaderLeft({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <IconContainer
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Foundation
          name="graph-horizontal"
          size={30}
          color={Colors.black}
          style={{ marginLeft: 14 }}
        />
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </IconContainer>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  image: {
    width: size.width * 0.24,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    color: Colors.text,
    marginLeft: 20,
  },
});

export default HeaderLeft;
