import { StyleSheet } from "react-native";

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
    flexGrow: 1,
  },
});

export default GlobalStyles;
