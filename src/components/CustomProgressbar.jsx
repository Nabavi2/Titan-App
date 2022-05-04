import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearProgress } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../constants/Colors";
import AppText from "./AppText";
import Subtitle from "./Subtitle";

function CustomProgressbar({
  title,
  titleStyle,
  value,
  startValue,
  endValue,
  style,
}) {
  return (
    <View style={{ ...styles.container, ...style }}>
      <Subtitle style={{ ...styles.progressTitle, ...titleStyle }}>
        {title}
      </Subtitle>
      <LinearProgress
        value={value}
        color={Colors.primary}
        variant={"determinate"}
        trackColor="rgba(68, 10, 211, 0.3)"
        style={styles.progress}
      />
      <View style={styles.progressRange}>
        <AppText style={styles.progressRangText}>{startValue}</AppText>
        <AppText style={styles.progressRangText}>{endValue}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  progressTitle: {
    fontSize: 14,
  },
  progress: {
    marginTop: "2%",
    marginBottom: "0.5%",
    height: hp(1.3),
    width: "96%",
    borderRadius: wp(100) / 2,
  },
  progressRange: {
    flexDirection: "row",
    width: "96%",
    justifyContent: "space-between",
    paddingHorizontal: "1%",
  },
  progressRangText: {
    fontFamily: "vietnamMedium",
  },
});

export default CustomProgressbar;
