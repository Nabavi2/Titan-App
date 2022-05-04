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
          height: type === "presale" ? hp(205.5) : hp(97),
        }}
      >
        {type === "presale" ? (
          <LaptopPop width={"22%"} height={"6%"} />
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
          {type === "presale" && (
            <CustomInput title="Minimum Contribution" placeholder="0.1" />
          )}
          {type === "presale" && <View style={styles.box} />}
          {type === "presale" && (
            <CustomInput title="Maximum Contribution" placeholder="2" />
          )}
          {type === "presale" && <View style={styles.box} />}
          {type === "presale" && (
            <CustomInput
              title="Presale start date"
              placeholder="2022/03/05 00:00:00"
            />
          )}
          {type === "presale" && <View style={styles.box} />}
          {type === "presale" && (
            <CustomInput
              title="Presale end date"
              placeholder="2022/03/25 00:00:00"
            />
          )}
          {type === "presale" && <View style={styles.box} />}
          {type === "presale" && (
            <CustomInput
              title="Liquidity Lock Time"
              placeholder="2022/04/15 00:00:00"
            />
          )}

          {type === "presale" && (
            <View style={styles.noteRow}>
              <AppText style={styles.note}>Note:</AppText>
              <AppText
                style={{
                  ...styles.note,
                  color: Colors.secondary,
                  fontFamily: "vietnam",
                }}
              >
                {" "}
                You must have the ability to whitelist (exclude families)
                multiple addressed or turn off special transfer. If any button
                restance or other special transfers are to take place.
              </AppText>
            </View>
          )}
          {type === "presale" && (
            <View style={styles.createbuttonContainer}>
              <CustomButton
                textStyle={{ fontSize: 18 }}
                title={"CREATE"}
                onPress={() => setShowMessage(true)}
                style={styles.createButton}
              />
            </View>
          )}
          {type === "lock" && (
            <View style={styles.buttonsContainer}>
              <CustomButton
                title={"Create Lock"}
                style={styles.createPresale}
              />
              <CustomButton
                title="Deposit"
                style={styles.deposit}
                textStyle={styles.depositText}
              />
            </View>
          )}
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
  note: {
    fontFamily: "vsBold",
    fontSize: 15,
  },
  noteRow: {
    width: "100%",
    height: hp(14),
    flexDirection: "row",
    marginTop: "8%",
    paddingRight: "7%",
  },
  createbuttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  createButton: {
    width: "75%",
    height: hp(6.3),
    marginTop: "10%",
    backgroundColor: "#FF9670",
  },
});

export default CreatePresale;
