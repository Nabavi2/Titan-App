import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import {
  AntDesign,
  Entypo,
  Feather,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import DefiexchangeItem from "./components/DefiexchangeItem";
import DefiModal from "./components/DefiModal";
import InputAndDropdownExchange from "./components/InputAndDropdownExchange";
import TokenDetails from "./components/TokenDetails";
import ApeTransactions from "./components/ApeTransactions";
import DefiGraphModal from "./components/DefiGraphModal";

const size = Layout.window;
function DefiExchange(props) {
  const size = Layout.window;
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState({});
  const [showGhraphModal, setShowGraphModal] = useState(false);
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
        <View style={styles.verticalSaparator}></View>
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
          onPressIn={() => setShowGraphModal(true)}
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
        <DefiGraphModal
          isBig={true}
          onRequestClose={() => setShowGraphModal(false)}
          visible={showGhraphModal}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              backgroundColor: Colors.background,
            }}
          >
            <Pressable onPressIn={() => setShowGraphModal(false)}>
              <Entypo name="cross" size={34} color="black" />
            </Pressable>
            <View style={{ flexDirection: "row" }}>
              <Feather name="refresh-cw" size={24} color="black" />
              <Pressable>
                <Image
                  source={require("../../../assets/retry.png")}
                  style={styles.iconImage}
                />
              </Pressable>
            </View>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../../assets/image1.jpg")}
              style={styles.image1}
            />
            <Image source={require("../../../assets/image2.jpg")} />
            <View style={styles.footerRow}>
              <Text>1d 1m 6m 1y</Text>

              <View
                style={[
                  styles.verticalSaparator,
                  { marginHorizontal: 10, width: 2 },
                ]}
              ></View>
              <MaterialCommunityIcons
                name="timetable"
                size={34}
                color="black"
              />
              <Text>09:04:67 (UTC)</Text>
              <View
                style={[
                  styles.verticalSaparator,
                  { marginHorizontal: 10, width: 1.5 },
                ]}
              ></View>
              <Text> % </Text>
              <Text> log </Text>
              <Text style={{ color: Colors.red, marginLeft: 5 }}>auto</Text>
            </View>
          </View>
        </DefiGraphModal>
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
  verticalSaparator: {
    height: 25,
    width: 1,
    backgroundColor: Colors.inputPropColor,
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
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  iconImage: {
    height: 30,
    width: 20,
    marginRight: size.width * 0.03,
    marginLeft: size.width * 0.05,
  },
  image1: {
    width: "100%",
    height: "5%",
    alignSelf: "center",
  },
  image2: {
    height: "85%",
    width: "100%",
    alignSelf: "center",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

export default DefiExchange;
