import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../constants/Colors";

import GlobalStyles from "../constants/GlobalStyles";
function LounchpadComponent(props) {
  const [status, setStatus] = useState(false);
  const data = [
    {
      id: "1",
      title: "Create launchpad",
    },
    {
      id: "2",
      title: "Dashboard",
    },
    {
      id: "3",
      title: "Manage presale",
    },
  ];
  return (
    <View style={[styles.container, { height: !status ? 100 : 20 }]}>
      <Pressable onPressIn={() => setStatus(!status)}>
        {status ? (
          <Image source={require("../../assets/drop1.png")} />
        ) : (
          <Image source={require("../../assets/drop2.png")} /> && (
            <FlatList
              data={data}
              keyExtractor={(id, item) => id}
              renderItem={({ item }) => {
                return <Text>{item.title}</Text>;
              }}
            />
          )
        )}
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: Colors.inputBackground,
    marginLeft: 100,
  },
  imageButton: {
    width: 10,
    height: 10,
  },
});
export default LounchpadComponent;
