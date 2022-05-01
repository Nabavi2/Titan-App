import React from "react";
import { PixelRatio, Text, View } from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";

function MapScrollScreen(props) {
  return (
    <View style={GlobalStyles.center}>
      <Text>MapScrollScreen{PixelRatio.get()}</Text>
    </View>
  );
}

export default MapScrollScreen;
