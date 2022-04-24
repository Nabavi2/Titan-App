import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";

function DrawerDropdown(props) {
  const [status, setStatus] = useState(false);
  return (
    <View>
      <Pressable
        style={{ flexDirection: "row" }}
        onPressIn={() => setStatus(!status)}
      >
        <MaterialCommunityIcons
          name="rocket-launch-outline"
          size={24}
          color={focused ? Colors.white : Colors.black}
        />
        <Text style={[styles.text, { marginLeft: 30 }]}>Lounchpad</Text>
        {!status ? (
          <Pressable
            onPressIn={() => setStatus(!status)}
            style={{ marginLeft: size.width * 0.16 }}
          >
            <AntDesign
              name="caretright"
              size={18}
              color="black"
              style={styles.dropIcon}
            />
          </Pressable>
        ) : null}
        {status ? (
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
        ) : null}
      </Pressable>
      <Pressable style={{ marginLeft: size.width * 0.2 }}>
        {status ? (
          <Column>
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
          </Column>
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
});
export default DrawerDropdown;
