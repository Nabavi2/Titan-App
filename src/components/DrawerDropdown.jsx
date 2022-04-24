import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Layout from "../constants/Layout";
import AppText from "./AppText";
import Colors from "../constants/Colors";

function DrawerDropdown({ id }) {
  const size = Layout.window;
  const navigation = useNavigation();
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
        {id === 1 ? (
          <AppText
            style={{ fontFamily: "vsBold", marginLeft: size.width * 0.066 }}
          >
            Launchpad
          </AppText>
        ) : (
          <AppText
            style={{
              fontFamily: "vsBold",
              marginLeft: size.width * 0.065,
              marginRight: 22,
            }}
          >
            Lockers
          </AppText>
        )}
        {!status ? (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{ marginLeft: size.width * 0.15 }}
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
            style={{ marginLeft: size.width * 0.16 }}
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
              onPress={() => navigation.navigate("defexchange")}
            >
              <Text
                style={[
                  styles.text,
                  { color: status ? Colors.primary : Colors.text },
                ]}
              >
                Create launchpad
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("home")}
            >
              <Text
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Dashboard
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => navigation.navigate("home")}
            >
              <Text
                style={[
                  styles.text,
                  { color: !status ? Colors.primary : Colors.text },
                ]}
              >
                Manage Presal
              </Text>
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
  text: {
    fontFamily: "vsBold",
  },
});
export default DrawerDropdown;
