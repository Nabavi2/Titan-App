import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";

import Title from "../../components/Title";
import Colors from "../../constants/Colors";
import { changeSelectedScreen } from "../../redxu/screenSlice";
import Card from "./components/Card";

function Dashboard(props) {
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
  const disptach = useDispatch();
  const focused = useIsFocused();
  useEffect(() => {
    if (focused) {
      disptach(changeSelectedScreen("dashboard"));
    }
  }, [focused]);
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Dashboard</Title>
      </View>
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={styles.listContent}
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
  listContent: {
    width: "100%",
    paddingLeft: "4%",
  },
});
export default Dashboard;
