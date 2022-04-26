import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";

import Title from "../../components/Title";
import Colors from "../../constants/Colors";
import Card from "./components/Card";

function Dashboard(props) {
  const navigation = useNavigation();
  const data = [
    {
      title: "APE coin",
      image: require("../../../assets/bo.png"),
      time: "00:09:17:43",
    },
    {
      title: "GOLD",
      image: require("../../../assets/em.png"),
      time: "00:09:17:48",
    },
    {
      title: "Bayd",
      image: require("../../../assets/boy.png"),
      time: "00:09:17:22",
    },
    {
      title: "123x",
      image: require("../../../assets/ti.png"),
      time: "00:09:17:43",
    },
    {
      title: "Crypt",
      image: require("../../../assets/cr.png"),
      time: "00:09:17:12",
    },
    {
      title: "Tike",
      image: require("../../../assets/tik.png"),
      time: "00:09:17:56",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Dashboard</Title>
      </View>
      <FlatList
        contentContainerStyle={{
          width: "100%",
          alignItems: "center",
        }}
        data={data}
        numColumns={2}
        horizontal={false}
        keyExtractor={(item, ind) => ind}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} time={item.time} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  subHeader: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "6%",
  },
  title: {
    marginLeft: "6%",
    marginBottom: "1%",
  },
});
export default Dashboard;
