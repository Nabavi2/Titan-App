import React from "react";
import { View, StyleSheet } from "react-native";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";

function LounchpadScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Launchpad</Title>
      </View>
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
