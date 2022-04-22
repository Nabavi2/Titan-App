import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import GlobalStyles from "../../constants/GlobalStyles";

function DefiEnchange(props) {
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
    <View style={GlobalStyles.center}>
      <Text>This the DefiEnchange Screen </Text>
    </View>
  );
}

export default DefiEnchange;
