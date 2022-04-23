import React from "react";
import { View, Text } from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";

const constainer = GlobalStyles.center;
function LockerScreen(props) {
  return (
    <View style {...constainer}>
      <Text>LockerScreen</Text>
    </View>
  );
}

export default LockerScreen;
