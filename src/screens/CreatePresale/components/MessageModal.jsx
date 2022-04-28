import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AppText from "../../../components/AppText";
import JumpingWoman from "../../../../assets/jumpingWoman";
import Colors from "../../../constants/Colors";
import CustomButton from "../../../components/CustomButton";

function MessageModal({ onRequestClose, isVisible }) {
  return (
    <Modal
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      isVisible={isVisible}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
    >
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Pressable onPress={onRequestClose}>
            <AntDesign name="close" size={24} color="#222222" />
          </Pressable>
          <JumpingWoman width={"60%"} height={150} style={styles.woman} />
        </View>
        <AppText style={styles.yay}>YAY!</AppText>
        <AppText style={styles.message}>
          You have sucessfully created your presale.
        </AppText>
        <CustomButton title={"GO TO DASHBOARD"} style={styles.buttton} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "65%",
    height: "38%",
    padding: "5%",
    backgroundColor: "white",
    borderRadius: hp(100) / 40,
    alignItems: "center",
    alignSelf: "center",
  },
  topRow: {
    flexDirection: "row",
    width: "100%",
  },
  woman: {
    position: "absolute",
    top: "-350%",
    right: "12%",
  },
  yay: {
    marginTop: "19%",
    fontSize: 30,
    fontFamily: "vsBold",
    color: Colors.primary,
  },
  message: {
    fontFamily: "vietnamMedium",
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  buttton: {
    width: "90%",
    height: "19%",
    marginTop: " 15%",
    borderRadius: hp(100) / 90,
  },
});

export default MessageModal;
