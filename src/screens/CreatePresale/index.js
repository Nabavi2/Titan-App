import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView, StyleSheet, View } from "react-native";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import Title from "../../components/Title";
import LaptopPop from "../../../assets/laptopPop";
import Colors from "../../constants/Colors";
import CustomInput from "../../components/CustomInput";
import MessageModal from "./components/MessageModal";
import CustomButton from "../../components/CustomButton";

function CreatePresale(props) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <View style={{ height: hp(100), width: wp(100) }}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <MessageModal
          isVisible={showMessage}
          onRequestClose={() => {
            console.log("Pressed");
            setShowMessage(false);
          }}
        />
        <CardContainer style={styles.card}>
          <LaptopPop width={"22%"} height={"10%"} />

          <Title style={styles.title}>Create Presale</Title>
          <AppText style={styles.subtitle}>
            Lock tokens in a instant. Simply fill out the below form
          </AppText>
          <View style={styles.inputsContainer}>
            <CustomInput
              title="Token Address"
              placeholder="Enter contact address"
            />
            <View style={styles.box} />
            <CustomInput title="Hard Cap" placeholder="Example 100 BNB" />
            <View style={styles.box} />
            <CustomInput title="Promocode" placeholder="Example 50 BNB" />
            <View style={styles.box} />
            <CustomInput title="Liquidity%" placeholder="70%" />
            <View style={styles.box} />
            <CustomInput title="Select Router" placeholder="PancakeSwap v2" />
            <View style={styles.box} />
            <CustomInput title="Listing Rate" placeholder="Example 50 BNB" />
            <View style={styles.box} />
            <CustomInput title="Presale Rate" placeholder="Example 50 BNB" />
            <View style={styles.box} />
            <View style={styles.buttonsContainer}>
              <CustomButton
                title="Create Presale"
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
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
        <AppText>dkfjsldfjlsd</AppText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(100),
    padding: "5%",
  },
  contentContainerStyle: {
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
  },
  card: {
    alignItems: "center",
    paddingVertical: "7%",
  },
  title: {
    fontFamily: "vsBold",
    color: Colors.primary,
    marginTop: "2%",
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
    marginBottom: "5%",
    width: "100%",
  },
  createPresale: {
    width: "45%",
    height: "30%",
  },
  deposit: {
    width: "45%",
    height: "30%",
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
