import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import GlobalStyles from "../constants/GlobalStyles";
import AppText from "./AppText";

function CustomInput({ placeholder, title }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <Input
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder={placeholder}
        placeholderTextColor={"rgba(68, 10, 211, 0.6)"}
        containerStyle={GlobalStyles.inputStyle}
        inputStyle={{ fontSize: 10 }}
        inputContainerStyle={styles.inputContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: hp(8),

    justifyContent: "center",
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 13,
    color: "#212121",
    marginBottom: "1%",
  },
  inputContainerStyle: { borderBottomWidth: 0 },
});

export default CustomInput;
