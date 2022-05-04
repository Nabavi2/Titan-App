import React from "react";
import { ScrollView, StyleSheet } from "react-native";

function CustomScrollView({ children, contentStyle }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ ...styles.contentStyle, ...contentStyle }}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  contentStyle: {
    paddingVertical: "3%",
    paddingHorizontal: "5%",
  },
});

export default CustomScrollView;
