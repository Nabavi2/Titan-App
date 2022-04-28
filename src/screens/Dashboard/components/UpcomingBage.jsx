import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../../components/AppText";
import Colors from "../../../constants/Colors";

function UpcomingBage(props) {
  return (
    <View style={styles.timeBageWrapper}>
      <View style={styles.timeBageOp} />
      <View style={styles.timeBage}>
        <Feather name="clock" size={13} color={Colors.secondary} />
        <AppText style={styles.timeBageText}>Upcoming</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timeBageWrapper: {
    width: "42%",
    height: "30%",
    marginTop: "1%",
    borderRadius: 3,
    overflow: "hidden",
  },
  timeBageOp: {
    backgroundColor: "#FFB500",
    opacity: 0.3,
    flex: 1,
  },
  timeBage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "7%",
    position: "absolute",
    top: "18%",
    left: "4%",
    zIndex: 1,
  },
  timeBageText: {
    marginTop: "-2%",
    fontSize: 8,
    marginLeft: "12%",
  },
});

export default UpcomingBage;
