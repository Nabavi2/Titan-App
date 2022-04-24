import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";

import GlobalStyles from "../../constants/GlobalStyles";

const constainer = GlobalStyles.center;
function LounchpadScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Launchpad</Title>
      </View>
      <Text>This the DefiExchange Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subHeader: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "6%",
    justifyContent: "center",
  },
  title: {
    marginLeft: "6%",
    marginBottom: "1%",
  },
});

export default LounchpadScreen;
