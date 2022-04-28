import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";
import Colors from "../../constants/Colors";
import TopCart from "./components/TopCart";
import Layout from "../../constants/Layout";

const size = Layout.window;

function LockerScreen(props) {
  return (
    <View style={styles.constainer}>
      <TopCart />
      <View style={[styles.inputContainer, { width: size.width * 0.8 }]}>
        <Ionicons
          name="search-sharp"
          size={24}
          color={Colors.primary}
          style={{ marginLeft: -8 }}
        />
        <TextInput
          placeholder="Search & add"
          style={{ width: size.width * 0.45 }}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Manage Lock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    height: 33,
    width: size.width * 0.73,
    alignSelf: "center",
    backgroundColor: Colors.white,
    elevation: 0.5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    width: size.width * 0.27,
    borderRadius: 15,
    height: "100%",
    marginRight: -15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
  },
});
export default LockerScreen;
