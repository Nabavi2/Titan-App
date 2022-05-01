import React from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";

import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import SmallCart from "./components/SmallCart";
import Carton from "../../../assets/Carton";

const size = Layout.window;
function StakeScreen() {
  const data = [
    {
      id: 1,
      title: "You Staked:",
      number: "0",
    },
    {
      id: 2,
      title: "Ape Balance:",
      number: "0",
    },
    {
      id: 3,
      title: "Total Staked:",
      number: "0",
    },
    {
      id: 4,
      title: "Total Stakers:",
      number: "0",
    },
    {
      id: 5,
      title: "Total Supply:",
      number: "0",
    },
    {
      id: 6,
      title: "Total Distributed BNB:",
      number: "0",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.cart}>
        <Text style={styles.firstText}>$Ape Stake</Text>
        <Text style={[styles.text, { marginBottom: 0 }]}>
          Stake $Ape tokens and recieve BNB rewards on
        </Text>
        <Text style={[styles.text, { marginBottom: 20 }]}>
          each transactions
        </Text>
        <CustomButton
          title="Learn more about staking here"
          style={styles.firstButton}
        ></CustomButton>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollableCart}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          data={data}
          keyExtractor={(id) => id}
          renderItem={({ item }) => (
            <SmallCart title={item.title} number={item.number} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={[
            styles.cart,
            { width: "80%", height: size.height * 0.23, marginTop: -1 },
          ]}
        >
          <Carton />
          <Text
            style={[
              styles.firstText,
              { fontSize: 20, marginBottom: 10, marginTop: -5 },
            ]}
          >
            Rewards
          </Text>
          <Text style={[styles.text, { marginBottom: 10 }]}>
            0.000000 in BNB
          </Text>
          <CustomButton
            title="Withdraw"
            style={styles.secondButton}
          ></CustomButton>
        </View>
        {/* The last cart section */}
        <View style={styles.lastCart}>
          <Text style={styles.descriptionText}>
            Enter amount you wish to stake or press Max. Press APPROVE and wait
            for 1st transaction. (Existing stakers will not need to approve)
            Press the STAKE button, wait for transaction. Your tokens are
            staked!
          </Text>
          <View style={styles.inputRow}>
            <Text>0</Text>
            <Text>MAX</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cart: {
    height: size.height * 0.24,
    width: size.width * 0.93,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    alignSelf: "center",
    paddingHorizontal: 25,
  },
  firstText: {
    fontSize: 25,
    fontFamily: "vsBold",
    color: Colors.white,
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    color: Colors.white,
    alignSelf: "center",
    marginHorizontal: 9,
  },
  firstButton: {
    width: size.width * 0.75,
    height: size.height * 0.06,
    backgroundColor: Colors.secondary,
    marginBottom: 7,
    borderRadius: 30,
  },
  scrollableCart: {
    elevation: 1,
    borderRadius: 10,
    paddingTop: 10,
    width: "92%",
    paddingHorizontal: 3,
    backgroundColor: Colors.inputBackground,
    shadowColor: Colors.inputPropColor,
    alignSelf: "center",
  },
  secondButton: {
    width: size.width * 0.4,
    height: size.height * 0.05,
    backgroundColor: Colors.secondary,
    marginBottom: 7,
    borderRadius: 10,
    marginHorizontal: size.width * 0.17,
  },
  inputRow: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    width: "96%",
    height: size.height * 0.04,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: size.height * 0.04,
    paddingLeft: 10,
    paddingRight: 10,
  },
  descriptionText: {
    width: size.width * 0.6,
    fontSize: 9,
    marginRight: size.width * 0.12,
    color: Colors.white,
    marginLeft: 15,
  },
  lastCart: {
    marginTop: -1,
    height: size.height * 0.24,
    width: size.width * 0.85,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    alignSelf: "center",
    paddingHorizontal: 25,
  },
});

export default StakeScreen;
