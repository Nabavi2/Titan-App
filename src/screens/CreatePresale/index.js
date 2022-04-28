import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import GlobalStyles from "../../constants/GlobalStyles";
import Title from "../../components/Title";
import LaptopPop from "../../../assets/laptopPop";
import Colors from "../../constants/Colors";
import CustomInput from "../../components/CustomInput";
import MessageModal from "./components/MessageModal";

function CreatePresale(props) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <View style={styles.container}>
      <MessageModal
        isVisible={showMessage}
        onRequestClose={() => setShowMessage(false)}
      />
      <CardContainer style={styles.card}>
        <Pressable
          style={{ width: "30%", height: "20%", backgroundColor: "red" }}
          onPress={() => setShowMessage(true)}
        >
          <LaptopPop width={"22%"} height={"10%"} />
        </Pressable>
        <Title style={styles.title}>Create Presale</Title>
        <AppText style={styles.subtitle}>
          Lock tokens in a instant. Simply fill out the below form
        </AppText>
        <ScrollView
          showsVerticalScrollIndicator={true}
          style={styles.inputsContainer}
          contentContainerStyle={styles.inputsContentContainer}
        >
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
        </ScrollView>
      </CardContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "5%",
  },
  card: {
    flex: 1,
    width: "100%",
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
  },
  inputsContentContainer: {
    paddingHorizontal: "7%",
  },
  box: {
    height: 40,
  },
});

export default CreatePresale;
