import React, { useState } from "react";
import { PixelRatio, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../constants/GlobalStyles";

function MapScrollScreen(props) {
  return (
    <View style={GlobalStyles.center}>
      <Text>MapScrollScreen{PixelRatio.get()}</Text>
    </View>
  );
}

export default MapScrollScreen;
