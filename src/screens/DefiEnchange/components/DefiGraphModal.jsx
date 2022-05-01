import React from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

function DefiGraphModal({ children, onRequestClose, visible, isBig = false }) {
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
            height: isBig ? "100%" : "60%",
          },
        ]}
      >
        {children}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: { margin: 0, flex: 1 },
  modalView: {
    width: "100%",
    backgroundColor: Colors.white,
  },
});
export default DefiGraphModal;
