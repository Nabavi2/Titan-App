import React from "react";
import { StyleSheet, View } from "react-native";
import Subtitle from "../../../components/Subtitle";

function PresaleInfoRow({ title, rest }) {
  return (
    <View style={Rowstyles.PIRow}>
      <Subtitle style={Rowstyles.PIRowTitle}>{title}</Subtitle>
      <Subtitle style={Rowstyles.PIRowSubtitle}>{rest}</Subtitle>
    </View>
  );
}

export const Rowstyles = StyleSheet.create({
  PIRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "7%",
    alignItems: "center",
    marginVertical: "3%",
  },
  PIRowTitle: {
    fontSize: 13,
  },
  PIRowSubtitle: {
    fontSize: 15,
  },
  linkContainer: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
  },
});

export default PresaleInfoRow;
