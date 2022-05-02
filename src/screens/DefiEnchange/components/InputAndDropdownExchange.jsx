import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import DropdownComponent from "../../../components/DropdownComponent";
import PickerComponent from "../../../components/PickerComponent";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
const size = Layout.window;
const data = [
  {
    title: "BNB",
  },
  {
    title: "SRC",
  },
  {
    title: "CMA",
  },
];
function InputAndDropdownExchange({ title }) {
  return (
    <View style={styles.container}>
      <Text style={{ marginLeft: 10 }}>{title}</Text>
      <View
        style={[
          styles.rowContainer,
          {
            marginLeft: title === "From" ? 10 : null,
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="0.0"
          placeholderTextColor={Colors.black}
        />

        {/* <PickerComponent width={size.width * 0.25} dataArray={data} /> */}
        <DropdownComponent From={title} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: size.height * 0.097,
    width: size.width * 0.42,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: "center",
  },
  title: {
    fontFamily: "vsBold",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: size.width * 0.1,
    height: size.height * 0.08,
    fontFamily: "vsBold",
    marginLeft: -5,
    marginRight: size.width * 0.08,
  },
  dropdownIcon: {
    height: 20,
    width: 20,
    borderRadius: 7,
    backgroundColor: Colors.yellow,
    alignItems: "center",
  },
});
export default InputAndDropdownExchange;
