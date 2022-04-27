import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from "react-native";
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
            marginLeft: title === "From" ? 20 : null,
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="0.0"
          placeholderTextColor={Colors.black}
        />
        {title === "From" ? (
          <View style={styles.dropdownIcon}>
            <Image source={require("../../../../assets/d.svg")} />
          </View>
        ) : null}
        <PickerComponent width={size.width * 0.25} dataArray={data} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: size.height * 0.09,
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
    marginLeft: 10,
    fontFamily: "vsBold",
    marginRight: 10,
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
