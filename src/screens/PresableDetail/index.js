import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/AppText";
import GlobalStyles from "../../constants/GlobalStyles";
import Layout from "../../constants/Layout";

function PresableDetail(props) {
  return (
    <View style={{ height: Layout.window.height }}>
      <AppText>This is the detail page.</AppText>
    </View>
  );
}

const styles = StyleSheet.create({});

export default PresableDetail;
