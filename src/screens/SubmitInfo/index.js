import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Menu, MenuTrigger } from "react-native-popup-menu";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import CustomScrollView from "../../components/CustomScrollView";
import GlobalStyles from "../../constants/GlobalStyles";
import ChevLeft from "../../../assets/chev-left";
import Subtitle from "../../components/Subtitle";
import CustomInput from "../../components/CustomInput";
import Colors from "../../constants/Colors";
import Medium from "../../../assets/medium";
import Image from "../../../assets/image";

function SubmitInfo(props) {
  return (
    <CustomScrollView style={GlobalStyles.center}>
      <CardContainer style={styles.card}>
        <View style={styles.headerRow}>
          <ChevLeft style={styles.chev} />
          <Subtitle style={styles.title}>Submit Information</Subtitle>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.menuContainer}>
            <View style={styles.menuHeaderRow}>
              <FontAwesome name="photo" size={24} color={Colors.primary} />
              <AppText style={styles.logoText}>Logo Link</AppText>
            </View>
            <Menu>
              <MenuTrigger>
                <View style={GlobalStyles.inputStyle}>
                  <AppText>Choose an option</AppText>
                </View>
              </MenuTrigger>
            </Menu>
          </View>
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            title={"Website Link"}
            icon={<MaterialIcons name="web" size={24} color={Colors.primary} />}
          />
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            icon={<AntDesign name="github" size={24} color={Colors.primary} />}
            title={"Github Link"}
          />
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            title={"Twitter Link"}
            icon={<AntDesign name="twitter" size={24} color={Colors.primary} />}
          />
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            title={"Medium Link"}
            icon={<Medium width={wp(5)} height={hp(3)} />}
          />
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            title={"Reddit Link"}
            icon={
              <FontAwesome name="reddit" size={24} color={Colors.primary} />
            }
          />
          <CustomInput
            titleStyle={styles.inputTitleStyle}
            title={"Telegram Link"}
            icon={
              <FontAwesome name="telegram" size={24} color={Colors.primary} />
            }
          />
        </View>
      </CardContainer>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: hp(103),
  },
  headerRow: {
    width: "100%",
    height: "7%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "7%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  title: { fontFamily: "vsBold" },
  chev: {
    position: "absolute",
    left: "8%",
  },
  inputsContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
  },
  inputTitleStyle: { color: Colors.primary, fontFamily: "vsBold" },
  menuTrigger: {
    width: "100%",
    height: hp(8),
    marginVertical: "6%",
    justifyContent: "center",
    borderBottomWidth: 0,
  },
  menuContainer: {
    width: "100%",
    marginBottom: "4%",
  },
  logoText: {
    fontSize: 13,
    fontFamily: "vsBold",
    color: Colors.primary,
    marginLeft: "4%",
  },
  menuHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1%",
  },
});

export default SubmitInfo;
