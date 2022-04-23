import React from "react";
import { View, Text } from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";

const constainer = GlobalStyles.center;
function LounchpadScreen(props) {
  return (
    <View style {...constainer}>
      <Text>LounchpadScreen</Text>
    </View>
  );
}

export default LounchpadScreen;
