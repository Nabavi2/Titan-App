import React from "react";
import { View, Text } from "react-native";

import GlobalStyles from "../../constants/GlobalStyles";

const constainer = GlobalStyles.center;
function HomeScreen(props) {
  return (
    <View style {...constainer}>
      <Text>Home screen</Text>
    </View>
  );
}

export default HomeScreen;
