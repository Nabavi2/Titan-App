import { Box, Column, Pressable, ScrollView, ZStack } from "native-base";
import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

function CustomModal({
  children,
  onRequestClose,
  visible,
  isBig = false,
  isLocker,
}) {
  const size = Layout.window;
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
            height: isLocker ? "100%" : isBig ? "91%" : "60%",
            borderTopLeftRadius: isLocker ? 0 : size.width / 18,
            borderTopRightRadius: isLocker ? 0 : size.width / 18,
            backgroundColor: isLocker ? Colors.background : Colors.white,
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
export default CustomModal;
