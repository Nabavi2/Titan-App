import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../constants/GlobalStyles";
import Title from "../../components/Title";

function DefiExchange(props) {
  const arrayData = [
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "B",
      value: 70,
      hasImage: false,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "C",
      value: 90,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      hasImage: false,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Lorem ipsume dolor sit amet",
      des: "Bauart goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
    {
      title: "Salvador de amot ichi ikaino",
      des: "The text goes here",
      grade: "A",
      value: 100,
      hasImage: true,
    },
  ];
  // const isSmall = Layout.isSmallDevice;

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Defiexchange</Title>
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

export default DefiExchange;
