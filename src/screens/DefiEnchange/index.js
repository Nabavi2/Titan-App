import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
} from "react-native";
import { AntDesign, Foundation, Ionicons, Octicons } from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import DefiexchangeItem from "./components/DefiexchangeItem";
import DefiModal from "./components/DefiModal";
import InputAndDropdownExchange from "./components/InputAndDropdownExchange";
import TokenDetails from "./components/TokenDetails";
import ApeTransactions from "./components/ApeTransactions";

const size = Layout.window;
function DefiExchange(props) {
  const size = Layout.window;
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState({});
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
            onPress={() => {
              console.log("sfafdasfasfdafd", item.title);
              setItems({
                title: item.title,
                number: item.number,
                subNumber: item.subNumber,
                percentage: item.percentage,
              });
              setVisible(!visible);
            }}
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
      <DefiModal
        isBig={true}
        onRequestClose={() => setVisible(!visible)}
        visible={visible}
      >
        <View style={{ flexDirection: "column", paddingLeft: 20 }}>
          <Text style={styles.titleText}>{items.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 18,
                color: items.subNumber > 0 ? Colors.green400 : Colors.red,
                marginRight: size.width * 0.1,
              }}
            >
              {items.number}
            </Text>
            <Text style={styles.modalText}>+{items.subNumber}</Text>
            <Text style={styles.modalText}>({items.percentage}%)</Text>
          </View>
        </View>
        <View style={styles.separator}></View>
        <Text style={[styles.titleText, { marginLeft: 20 }]}>
          Token Exchange
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <InputAndDropdownExchange title="From" />
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.black}
            style={[
              styles.icon,
              { marginTop: size.height * 0.035, marginLeft: 2, marginRight: 2 },
            ]}
          />
          <InputAndDropdownExchange title="To" />
        </View>
        <Pressable
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Foundation
            name="graph-bar"
            size={28}
            color={Colors.primary}
            style={styles.icon}
          />
          <Text
            style={{
              color: Colors.primary,
              marginTop: size.height * 0.02,
              marginLeft: 10,
            }}
          >
            View Chart
          </Text>
          <AntDesign
            name="arrowright"
            size={24}
            color={Colors.primary}
            style={[styles.icon, { marginTop: 15 }]}
          />
        </Pressable>
        <View
          style={[styles.separator, { borderWidth: 1, width: "90%" }]}
        ></View>
        <TokenDetails />
        <View
          style={[styles.separator, { borderWidth: 1, width: "90%" }]}
        ></View>
        <ApeTransactions />
      </DefiModal>
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
    width: size.width * 0.73,
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
  input: {
    width: size.width * 0.45,
  },
  inputText: {
    color: Colors.inputPropColor,
    fontSize: 14,
  },
  separator: {
    marginVertical: 15,
    borderWidth: 2,
    flexDirection: "row",
    borderColor: Colors.background,
    alignSelf: "center",
  },
  modalText: {
    color: Colors.black,
    fontSize: 18,
  },
  titleText: {
    color: Colors.black,
    fontSize: 20,
    fontFamily: "vsBold",
    marginBottom: 20,
  },
  icon: { marginTop: 10, marginLeft: 10 },
});

export default DefiExchange;
