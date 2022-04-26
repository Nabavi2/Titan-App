import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, FlatList } from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import DefiexchangeItem from "../../components/DefiexchangeItem";
import CustomModal from "../../components/CustomModal";

function DefiExchange(props) {
  const size = Layout.window;
  const [visible, setVisible] = useState(false);
  const data = [
    {
      id: "1",
      title: "Lorem ",
      number: "$000007.93",
      subNumber: +0.15,
      percentage: +25,
    },
    {
      id: "2",
      title: "Lorem ",
      number: "$000007.93",
      subNumber: +0.15,
      percentage: +25,
    },
    {
      id: "3",
      title: "Lorem ",
      number: "$000007.93",
      subNumber: -0.15,
      percentage: -25,
    },
    {
      id: "4",
      title: "Lorem ",
      number: "$000007.93",
      subNumber: +0.15,
      percentage: +25,
    },
    {
      id: "5",
      title: "Lorem ",
      number: "$000007.93",
      subNumber: -0.15,
      percentage: -25,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Defiexchange</Title>
      </View>

      <FlatList
        data={data}
        keyExtractor={(id) => id}
        renderItem={({ item }) => (
          <DefiexchangeItem
            title={item.title}
            number={item.number}
            subNumber={item.subNumber}
            percentage={item.percentage}
            onPress={() => setVisible(!visible)}
          />
        )}
      />
      <View style={[styles.inputContainer, { width: size.width * 0.73 }]}>
        <Ionicons name="search-sharp" size={24} color={Colors.inputPropColor} />
        <TextInput
          placeholder="Search & add"
          style={{ width: size.width * 0.45 }}
        />
        <Text style={styles.inputText}>5/23 </Text>
        <View style={styles.saparator}></View>
        <Octicons
          name="settings"
          size={24}
          color={Colors.inputPropColor}
          style={{ marginLeft: 5 }}
        />
      </View>
      <CustomModal isBig={true} onRequestClose={true} visible={visible}>
        <Text>afafdafdafadfsadsf</Text>
      </CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeader: {
    backgroundColor: Colors.background,
    width: "100%",
    height: "9%",
    justifyContent: "center",
    paddingBottom: 20,
    // elevation:,
  },
  title: {
    marginLeft: "6%",
    marginBottom: "1%",
  },
  inputContainer: {
    flexDirection: "row",
    height: 33,
    alignSelf: "center",
    backgroundColor: Colors.white,
    elevation: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
    top: 50,
  },
  input: {},
  inputText: {
    color: Colors.inputPropColor,
    fontSize: 14,
  },
  saparator: {
    borderWidth: 0.5,
    flexDirection: "column",
    height: 26,
    borderColor: Colors.inputPropColor,
    marginHorizontal: 4,
  },
});

export default DefiExchange;
