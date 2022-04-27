import { Box, Column, Pressable, ScrollView, ZStack } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

function DefiModal({ children, onRequestClose, visible, isBig = false }) {
  const size = Layout.window;
  // console.log("number title", title);
  return (
    <Modal
      style={styles.modalContainer}
      onBackButtonPress={onRequestClose}
      onBackdropPress={onRequestClose}
      isVisible={visible}
      onSwipeComplete={isBig ? null : onRequestClose}
      swipeDirection={isBig ? null : "down"}
    >
      <View
        style={[
          styles.modalView,
          {
            height: isBig ? "91%" : "60%",
            borderTopLeftRadius: size.width / 18,
            borderTopRightRadius: size.width / 18,
          },
        ]}
      >
        {children}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: { margin: 0, justifyContent: "flex-end", flex: 1 },
  modalView: {
    width: "100%",
    paddingTop: 5,
    backgroundColor: Colors.white,
  },
});
export default DefiModal;