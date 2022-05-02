import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StyleSheet, View } from "react-native";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import Title from "../../components/Title";
import LaptopPop from "../../../assets/laptopPop";
import Colors from "../../constants/Colors";
import CustomInput from "../../components/CustomInput";
import MessageModal from "./components/MessageModal";
import CustomButton from "../../components/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import CustomScrollView from "../../components/CustomScrollView";

function CreatePresale({ route }) {
  const [showMessage, setShowMessage] = useState(false);
  const { type } = route.params;

  return (
    <CustomScrollView
      contentContainerStyle={styles.contentStyle}
      style={styles.container}
    >
      <MessageModal
        isVisible={showMessage}
        onRequestClose={() => {
          console.log("Pressed");
          setShowMessage(false);
        }}
      />
      <CardContainer
        style={{
          ...styles.card,
          height: type === "presale" ? hp(127) : hp(97),
        }}
      >
        {type === "presale" ? (
          <LaptopPop width={"22%"} height={"10%"} />
        ) : (
          <MaterialIcons name="lock-outline" size={70} color={Colors.primary} />
        )}

        <Title style={styles.title}>
          {type === "lock" ? "Lock Tokens" : "Create Presale"}
        </Title>
        <AppText style={styles.subtitle}>
          Lock tokens in a instant. Simply fill out the below form
        </AppText>

        <View style={styles.inputsContainer}>
          <CustomInput
            title="Token Address"
            placeholder="Enter contact address"
          />
          <View style={styles.box} />
          <CustomInput
            title={type === "presale" ? "Hard Cap" : "Reward Token address"}
            placeholder={
              type === "lock" ? "Enter contact address" : "Example 100 BNB"
            }
          />
          <View style={styles.box} />
          <CustomInput
            title={
              type === "lock" ? "Enter amount of tokens lock" : "Promocode"
            }
            placeholder={type === "lock" ? "1000000" : "Example 50 BNB"}
          />
          <View style={styles.box} />
          <CustomInput
            title={type === "lock" ? "Unlock date" : "Liquidity%"}
            placeholder={type === "lock" ? "2022-03-19" : "70%"}
          />
          <View style={styles.box} />
          <CustomInput
            title={type === "lock" ? "Lock link" : "Select Router"}
            placeholder={
              type === "lock" ? " Logolink.jpg/png" : "PancakeSwap v2"
            }
          />
          {type === "presale" && <View style={styles.box} />}
          {type === "presale" && (
            <CustomInput title="Listing Rate" placeholder="Example 50 BNB" />
          )}
          <View style={styles.box} />
          {type === "presale" && (
            <CustomInput title="Presale Rate" placeholder="Example 50 BNB" />
          )}
          {type === "presale" && <View style={styles.box} />}
          <View style={styles.buttonsContainer}>
            <CustomButton
              title={type === "presale" ? "Create Presale" : "Create Lock"}
              onPress={() => setShowMessage(true)}
              style={styles.createPresale}
            />
            <CustomButton
              title="Deposit"
              style={styles.deposit}
              textStyle={styles.depositText}
            />
          </View>
        </View>
      </CardContainer>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    paddingVertical: "5%",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  title: {
    fontFamily: "vsBold",
    color: Colors.primary,
  },
  subtitle: {
    fontSize: 10,
  },
  inputsContainer: {
    width: "100%",
    marginTop: "10%",
    paddingHorizontal: "7%",
  },
  box: {
    height: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2%",

    width: "100%",
  },
  createPresale: {
    width: "45%",
    height: hp(5.5),
  },
  deposit: {
    width: "45%",
    height: hp(5.5),
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: hp(100) / 120,
  },
  depositText: {
    color: Colors.secondary,
  },
});

export default CreatePresale;
