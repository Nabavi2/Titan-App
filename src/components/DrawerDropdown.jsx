import React, { useState } from "react";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import AppText from "./AppText";

function DrawerDropdown({ id }) {
  const size = Layout.window;
  const navigation = useNavigation;
  const [status, setStatus] = useState(false);

  return (
    <View>
      <Pressable
        style={{ flexDirection: "row" }}
        onPressIn={() => setStatus(!status)}
      >
        {id === 1 ? (
          <MaterialCommunityIcons
            name="rocket-launch-outline"
            size={24}
            color={Colors.black}
          />
        ) : (
          <MaterialIcons name="lock-outline" size={28} color={Colors.black} />
        )}
        <AppText
          style={{ ...styles.text, marginLeft: "13%", fontFamily: "vsBold" }}
        >
          {id === 1 ? "Launchpad" : "Lockers"}
        </AppText>
        {!status ? (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{
              // marginLeft: "20%",

              justifyContent: "center",
              backgroundColor: "red",
            }}
          >
            <AntDesign
              name="caretright"
              size={18}
              color="black"
              style={styles.dropIcon}
            />
          </Pressable>
        ) : (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{ marginLeft: size.width * 0.13 }}
          >
            <AntDesign
              name="caretdown"
              size={18}
              color={Colors.primary}
              style={styles.dropIcon}
            />
          </Pressable>
        )}
      </Pressable>
      <Pressable style={{ marginLeft: size.width * 0.2 }}>
        {status ? (
          <View>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.07,
              }}
              onPress={() => navigation.navigate("defixchange")}
            >
              <AppText
                style={[
                  styles.text,
                  { color: status ? Colors.primary : Colors.text },
                ]}
              >
                Create launchpad
              </AppText>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("home")}
            >
              <AppText
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Dashboard
              </AppText>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("home")}
            >
              <AppText
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Manage Presal
              </AppText>
            </Pressable>
          </View>
        ) : null}
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
  dropIcon: {
    // marginLeft: "20%",
    width: "100%",
  },
});
export default DrawerDropdown;
