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
  isLocker = false,
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
            height: isBig ? "91%" : isLocker ? "100%" : "60%",
            borderTopLeftRadius: isLocker ? null : size.width / 18,
            borderTopRightRadius: isLocker ? null : size.width / 18,
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
