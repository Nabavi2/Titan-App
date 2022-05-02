import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import Colors from "./Colors";

const GlobalStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputStyle: {
    width: "100%",
    height: hp(6),
    backgroundColor: "#CED4FF",
    borderRadius: wp(100) / 80,
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },
  inputLabelStyle: {
    fontSize: 10,
    fontFamily: "vietnam",
    color: Colors.primary,
    opacity: 0.6,
  },
});

export default GlobalStyles;
