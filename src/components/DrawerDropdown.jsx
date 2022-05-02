import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Layout from "../constants/Layout";
import AppText from "./AppText";
import Colors from "../constants/Colors";
import Launch from "../../assets/Launch";
import Lock from "../../assets/Lock";

function DrawerDropdown({ id }) {
  const size = Layout.window;
  const navigation = useNavigation();
  const [generalStatus, setGeneralStatus] = useState(false);
  const [lounchStatus, setLounchStatus] = useState(false);
  const [dashboardStatus, setDashboardStatus] = useState(false);
  const [presalStatus, setPresalStatus] = useState(false);
  return (
    <View>
      <Pressable
        style={{ flexDirection: "row" }}
        onPressIn={() => setGeneralStatus(!generalStatus)}
      >
        {id === 1 ? <Launch /> : <Lock />}
        {id === 1 ? (
          <AppText
            style={{ fontFamily: "vsBold", marginLeft: size.width * 0.068 }}
          >
            Launchpad
          </AppText>
        ) : (
          <AppText
            style={{
              fontFamily: "vsBold",
              marginLeft: size.width * 0.071,
              marginRight: 27,
            }}
          >
            Lockers
          </AppText>
        )}
        {!generalStatus ? (
          <Pressable
            onPressIn={() => setGeneralStatus(!generalStatus)}
            style={{ marginLeft: size.width * 0.12 }}
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
            onPressIn={() => setGeneralStatus(!generalStatus)}
            style={{ marginLeft: size.width * 0.12 }}
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
      <Pressable
        style={{ marginLeft: size.width * 0.2 }}
        onPressIn={() => setGeneralStatus(!generalStatus)}
      >
        {generalStatus ? (
          <View>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.07,
              }}
              onPress={() => {
                setLounchStatus(true);
                setDashboardStatus(false);
                setPresalStatus(false);
                navigation.navigate("createPresale", {
                  type: id === 1 ? "presale" : "lock",
                });
              }}
            >
              <Text
                style={[
                  styles.text,
                  { color: lounchStatus ? Colors.primary : Colors.text },
                ]}
              >
                {id === 1 ? "Create Launchpad" : "Create Lock"}
              </Text>
            </Pressable>
            <Pressable
              style={{
                marginVertical: 8,
                marginLeft: -size.width * 0.065,
              }}
              onPress={() => {
                setLounchStatus(false);
                setDashboardStatus(true);
                setPresalStatus(false);
                navigation.navigate("dashboard");
              }}
            >
              <Text
                style={[
                  styles.text,
                  { color: dashboardStatus ? Colors.primary : Colors.text },
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
              onPress={() => {
                setLounchStatus(false);
                setDashboardStatus(false);
                setPresalStatus(true);
                navigation.navigate("managePresale");
              }}
            >
              <Text
                style={[
                  styles.text,
                  { color: presalStatus ? Colors.primary : Colors.text },
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
