import React from "react";
import { View, Text } from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";

const constainer = GlobalStyles.center;
function ScanScreen(props) {
  return (
    <View style {...constainer}>
      <Text>Scan screen</Text>
    </View>
  );
}

export default ScanScreen;
