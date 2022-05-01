import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppText from "../../../components/AppText";
import Subtitle from "../../../components/Subtitle";

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
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(80),
    height: hp(40),
    borderRadius: wp(100) / 45,
    backgroundColor: "white",
    alignSelf: "center",
    // backgroundColor:
  },
  cardHeader: {
    flexDirection: "row",
    width: "100%",
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  cardTitle: { fontSize: 15 },
});

export default WhitelistModal;
