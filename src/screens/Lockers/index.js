import { Ionicons, Octicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Colors from "../../constants/Colors";
import TopCart from "./components/TopCart";
import Layout from "../../constants/Layout";
import SubCard from "./components/SubCart";

// import Em2 from "../../../assets/Em2";
// import Test from "../../../assets/Test";
// import Angry from "../../../assets/Angry";
// import Man from "../../../assets/Man";

const size = Layout.window;

function LockerScreen(props) {
  const data = [
    {
      title: "Bayd",
      image: require("../../../assets/em.png"),
    },
    {
      title: "Bayd",
      image: require("../../../assets/test.png"),
    },
    {
      title: "Bayd",
      image: require("../../../assets/angry.png"),
    },
    {
      title: "123x",
      image: require("../../../assets/man.png"),
    },
    {
      title: "Crypt",
      image: require("../../../assets/cr.png"),
    },
    {
      title: "Tike",
      image: require("../../../assets/tik.png"),
    },
  ];
  return (
    <View style={styles.constainer}>
      <TopCart />
      <FlatList
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
          elevation: 1,
          borderRadius: 15,
          marginTop: size.height * 0.03,
          backgroundColor: Colors.inputBackground,
          paddingTop: size.height * 0.03,
          paddingHorizontal: 5,
          paddingBottom: 24,
        }}
        data={data}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item, ind) => ind}
        renderItem={({ item }) => (
          <SubCard title={item.title} image={item.image} />
        )}
      />
      <View style={[styles.inputContainer, { width: size.width * 0.8 }]}>
        <Ionicons
          name="search-sharp"
          size={24}
          color={Colors.primary}
          style={{ marginLeft: -8 }}
        />
        <TextInput
          placeholder="Search & add"
          style={{ width: size.width * 0.45 }}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Manage Lock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    height: size.height * 0.043,
    width: size.width * 0.73,
    alignSelf: "center",
    backgroundColor: Colors.white,
    elevation: 0.5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    position: "absolute",
    top: size.height * 0.39,
  },
  button: {
    backgroundColor: Colors.primary,
    width: size.width * 0.28,
    borderRadius: 20,
    height: "100%",
    marginRight: -15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
  },
});
export default LockerScreen;
