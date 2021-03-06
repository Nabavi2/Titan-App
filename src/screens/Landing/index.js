import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

function Landing(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topCol}>
        <Text style={styles.topText}>Welcome to</Text>
        <Text style={styles.titleText}>TítanX</Text>
        <Text style={styles.subText}>
          TitanX is a full DeFi multi tool platform Real time BSC data analysis,
          Decentralized Launchpad Protocol.
        </Text>
        <View style={styles.rowButtons}>
          <Pressable
            style={styles.primaryButton}
            onPress={() => {
              navigation.navigate("home");
            }}
          >
            <Text style={styles.primaryButtonText}>Launchpad</Text>
          </Pressable>
          <Pressable
            style={styles.secondaryButton}
            onPress={() => console.log("pressed")}
          >
            <Text style={styles.secondaryButtonText}>Charts</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottomCol}>
        <Image
          source={require("../../../assets/land.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "8%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  topCol: {
    width: "80%",
    alignSelf: "flex-start",
    height: "50%",
    justifyContent: "flex-end",
  },
  bottomCol: {
    width: "100%",
    height: "50%",
    alignItems: "flex-end",
  },
  img: {
    marginRight: "2%",
    marginTop: "8%",
    width: "60%",
    height: "60%",
  },
  topText: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: "vietnam",
  },
  titleText: {
    fontSize: 35,
    color: Colors.white,
    fontFamily: "vietnamBold",
  },
  subText: {
    fontSize: 16,
    color: Colors.white,
    fontFamily: "vietnam",
  },
  rowButtons: {
    marginTop: "10%",
    flexDirection: "row",
    width: "100%",
    height: "10%",
    alignItems: "center",
  },
  primaryButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.yellow,
    width: "45%",
    height: "100%",
    marginRight: "10%",
    borderRadius: Layout.window.width / 45,
  },
  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    height: "100%",
    borderWidth: 2,
    borderColor: Colors.yellow,
    borderRadius: Layout.window.width / 45,
  },
  primaryButtonText: {
    fontSize: 16,
    marginTop: "-1.5%",
    color: Colors.primary,
    fontFamily: "vietnamBold",
  },
  secondaryButtonText: {
    fontSize: 16,
    marginTop: "-1.5%",
    color: Colors.white,
    fontFamily: "vietnamBold",
  },
});
export default Landing;
