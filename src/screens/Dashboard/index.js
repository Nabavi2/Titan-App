import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";

function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title>Dashboard</Title>
      </View>
      <Text>Dashboard screen</Text>
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
    height: "5%",
    justifyContent: "center",
  },
});
export default Dashboard;
