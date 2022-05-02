import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import CustomScrollView from "../../components/CustomScrollView";
import GlobalStyles from "../../constants/GlobalStyles";
import ChevLeft from "../../../assets/chev-left";
import Subtitle from "../../components/Subtitle";
import CustomInput from "../../components/CustomInput";
import Colors from "../../constants/Colors";
import Medium from "../../../assets/medium";
import ChevDown from "../../../assets/chev-down";
import Upload from "../../../assets/upload";
import { Input } from "react-native-elements";

function SubmitInfo(props) {
  const [linkType, setLinkType] = useState("Choose a method");
  const [logoLinkText, setLogoLinkText] = useState("");
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
            <Menu onSelect={(value) => setLinkType(value)}>
              <MenuTrigger>
                <View style={GlobalStyles.inputStyle}>
                  <View style={styles.menuTriggerRow}>
                    <AppText
                      style={
                        linkType === "Choose a method"
                          ? styles.menuDescription
                          : { ...styles.menuDescription, fontFamily: "vietnam" }
                      }
                    >
                      {linkType}
                    </AppText>
                    <ChevDown />
                  </View>
                </View>
              </MenuTrigger>
              <MenuOptions
                customStyles={{
                  optionText: {
                    fontFamily: "vietnamMedium",
                    fontSize: 13,
                    color: Colors.primary,
                  },
                  optionsContainer: {
                    borderRadius: wp(100) / 65,
                    padding: "5%",
                  },
                }}
              >
                <MenuOption text="Choose a method" value={"Choose a method"} />
                <MenuOption text="Logo link URL" value={"Logo link URL"} />
                <MenuOption
                  text="Logo link upload"
                  value={"Logo link upload"}
                />
              </MenuOptions>
            </Menu>
            {linkType === "Logo link upload" && (
              <View style={styles.upload}>
                <AppText style={styles.uploadText}>Upload</AppText>
                <Upload width={"20%"} height={"30%"} />
              </View>
            )}
            {linkType === "Logo link URL" && (
              <Input
                containerStyle={{ ...GlobalStyles.inputStyle, marginTop: "6%" }}
                placeholder="Type here"
                placeholderTextColor={"rgba(110, 0, 255, 0.61)"}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                inputStyle={
                  logoLinkText.length === 0
                    ? styles.urlText
                    : { ...styles.urlText, fontFamily: "vietnam" }
                }
                value={logoLinkText}
                onChangeText={(val) => setLogoLinkText(val)}
              />
            )}
          </View>
          <CustomInput
            hasIcon
            titleStyle={styles.inputTitleStyle}
            title={"Website Link"}
            icon={<MaterialIcons name="web" size={24} color={Colors.primary} />}
          />
          <CustomInput
            hasIcon
            titleStyle={styles.inputTitleStyle}
            icon={<AntDesign name="github" size={24} color={Colors.primary} />}
            title={"Github Link"}
          />
          <CustomInput
            hasIcon
            titleStyle={styles.inputTitleStyle}
            title={"Twitter Link"}
            icon={<AntDesign name="twitter" size={24} color={Colors.primary} />}
          />
          <CustomInput
            hasIcon
            titleStyle={styles.inputTitleStyle}
            title={"Medium Link"}
            icon={<Medium width={wp(5)} height={hp(3)} />}
          />
          <CustomInput
            hasIcon
            titleStyle={styles.inputTitleStyle}
            title={"Reddit Link"}
            icon={
              <FontAwesome name="reddit" size={24} color={Colors.primary} />
            }
          />
          <CustomInput
            hasIcon
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
  menuDescription: {
    fontSize: 10,
    color: "rgba(68, 10, 211, 0.6)",
    fontFamily: "vItalic",
  },
  menuTriggerRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  upload: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e1e1",
    borderWidth: 1,
    borderColor: "#000",
    width: wp(25),
    height: hp(5),
    borderRadius: wp(100) / 75,
    marginTop: "3%",
  },
  uploadText: {
    fontSize: 13,
    fontFamily: "vsBold",
    marginRight: "7%",
  },
  urlText: {
    fontFamily: "vItalic",
    fontSize: 10,
    color: "rgba(68, 10, 211, 0.86)",
  },
});

export default SubmitInfo;
