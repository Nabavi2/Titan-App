import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import AppText from "../../../components/AppText";
import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";
import Colors from "../../../constants/Colors";

function WhitelistModal({ visible, onRequestClose }) {
  return (
    <Modal
      isVisible={visible}
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      animationIn="fadeInUp"
      animationOut={"fadeOutDown"}
    >
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Subtitle style={styles.cardTitle}>Add/Remove Whitelist.</Subtitle>
          <Pressable onPress={onRequestClose}>
            <AntDesign name="close" size={24} color="rgba(0, 0, 0, 0.7)" />
          </Pressable>
        </View>
        <View style={styles.content}>
          <AppText style={styles.note}>
            Make sure there are no duplicates.
          </AppText>
          <Input
            multiline={true}
            numberOfLines={4}
            containerStyle={{
              paddingHorizontal: "0%",
              paddingBottom: 0,
              height: hp(18),
            }}
            errorStyle={{ display: "none" }}
            placeholder={"Enter addresses seprated by a new line."}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholderTextColor={"rgba(68, 10, 211, 0.6)"}
          />
          <AppText style={styles.suggestion}>
            We Recommend only adding 200 each time.
          </AppText>
          <View style={styles.buttonsRow}>
            <Pressable
              style={styles.button}
              android_ripple={{ color: "white" }}
            >
              <Title style={styles.buttonText}>Add</Title>
            </Pressable>
            <Pressable
              android_ripple={{ color: "white" }}
              style={{ ...styles.button, backgroundColor: Colors.white }}
            >
              <Title style={{ ...styles.buttonText, color: Colors.primary }}>
                Cancel
              </Title>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(90),
    height: hp(48),
    borderRadius: wp(100) / 45,
    backgroundColor: "white",
    alignSelf: "center",
  },
  cardHeader: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "6%",
    paddingRight: "4.5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  cardTitle: { fontSize: 15 },
  note: {
    fontSize: 13,
    fontFamily: "vietnamMedium",
    color: Colors.secondary,
  },
  content: {
    flex: 1,
    padding: "4%",
  },
  inputContainerStyle: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: "1.5%",
    width: "100%",
    height: "100%",
    padding: "3%",
    backgroundColor: "rgba(206, 212, 255, 1)",
    borderWidth: 3,
    borderColor: "rgba(68, 10, 211, 0.6)",
    borderBottomColor: "rgba(68, 10, 211, 0.6)",
    borderBottomWidth: 3,
    borderRadius: wp(100) / 45,
  },
  inputStyle: {
    fontSize: 12,
    fontFamily: "vietnamMedium",
    color: "rgba(68, 10, 211, 0.6)",
    textAlignVertical: "top",
    paddingTop: "65%",
  },
  suggestion: {
    fontSize: 13,
    fontFamily: "vsBold",
    textAlign: "center",
    marginTop: "10%",
  },
  buttonsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  button: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(100) / 30,
    width: wp(40),
    height: hp(5.5),
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  buttonText: {
    fontFamily: "vietnamMedium",
    color: Colors.white,
    marginBottom: "3%",
  },
});

export default WhitelistModal;
