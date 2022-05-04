import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import AppText from "../../../components/AppText";
import CardContainer from "../../../components/CardContainer";
import CustomButton from "../../../components/CustomButton";
import CustomProgressbar from "../../../components/CustomProgressbar";
import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";
import Colors from "../../../constants/Colors";
import PresaleInfoRow, { Rowstyles } from "./PresaleInfoRow";
import UpcomingBage from "./UpcomingBage";

function ModalDetail({ image, onRequestClose }) {
  const [value, setValue] = useState(0.2);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={onRequestClose}>
          <MaterialIcons name="keyboard-backspace" size={28} color="black" />
        </Pressable>
        <Ionicons name="ios-heart" size={26} color="#F24E1E" />
      </View>
      <ScrollView
        style={styles.cardsContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Image */}
        <Image source={image} style={styles.image} />
        {/* Up coming */}
        <CardContainer style={styles.upComing}>
          <View style={styles.upComingContainer}>
            <View style={styles.upComingTitle}>
              <Subtitle style={styles.upComingTitleText}>GOLD</Subtitle>
              <UpcomingBage />
            </View>
            <View style={styles.startTimeContianer}>
              <AppText style={{ fontSize: 12 }}>Sale Starts in:</AppText>
              <View style={styles.sparkleRow}>
                <Image
                  resizeMode="contain"
                  style={styles.sparkle}
                  source={require("../../../../assets/Vector.png")}
                />
                <AppText style={{ fontSize: 15, color: Colors.primary }}>
                  03:17:47:59
                </AppText>
              </View>
            </View>
          </View>
        </CardContainer>
        {/* Socials  */}
        <CardContainer style={styles.socialsContainer}>
          <AppText style={styles.socialText}>Socials</AppText>
          <View style={styles.iconsContainer}>
            <MaterialIcons name="web" size={20} color={Colors.primary} />

            <AntDesign name="github" size={20} color={Colors.primary} />
            <AntDesign name="twitter" size={20} color={Colors.primary} />
            <Image
              resizeMode="contain"
              source={require("../../../../assets/medium.png")}
              style={{ width: "10%", height: "35%" }}
            />
            <FontAwesome name="telegram" size={20} color={Colors.primary} />
            <FontAwesome name="reddit" size={20} color={Colors.primary} />
            <MaterialCommunityIcons
              name="certificate-outline"
              size={20}
              color={Colors.primary}
            />
          </View>
        </CardContainer>
        {/* Amount section */}
        <CardContainer style={styles.amountCard}>
          <Title style={styles.amountCardTitle}>Presale Not Started</Title>
          <CustomProgressbar
            style={styles.CustomProgressbar}
            title={"0 BNB / 100 BNB"}
            value={value}
            startValue="0.1 BNB"
            endValue={"2 BNB"}
          />
          <View style={styles.contributed}>
            <AppText style={styles.contributedTitle}>
              Your contributed amount{"\n"}(in BNB)
            </AppText>
            <View style={styles.contributedBage}>
              <AppText style={styles.contributedText}>0 BNB</AppText>
            </View>
          </View>
          <View style={styles.purchased}>
            {/* used from contributed part styles */}
            <AppText style={styles.contributedTitle}>
              Amount of purchased{"\n"}tokens
            </AppText>
            <View style={styles.contributedBage}>
              <AppText style={styles.contributedText}>0 SNG</AppText>
            </View>
          </View>
        </CardContainer>
        {/* White list presale */}
        <CardContainer style={styles.whiteList}>
          {/* used from amountCardTitle style */}
          <Title style={styles.amountCardTitle}>Whitelisted Presale!</Title>
          <AppText style={styles.whitelistNote}>
            Your wallet needs to be whitelisted to participate in this presale.
          </AppText>
          <CustomButton
            textStyle={styles.customButtonText}
            title={"My this is some text"}
            style={styles.customButton}
          />
        </CardContainer>
        {/* Presale information */}
        <CardContainer style={styles.presaleInfo}>
          <View style={styles.presaleInfoHeader}>
            <Title style={styles.presaleInfoTitle}>Presale Information</Title>
          </View>

          <View style={Rowstyles.PIRow}>
            <View>
              <Subtitle style={Rowstyles.PIRowTitle}>Token Address</Subtitle>
              <AppText style={styles.PIRowDescription}>
                This is some description for the token.
              </AppText>
            </View>
            <View style={Rowstyles.linkContainer}>
              <Subtitle
                style={{
                  ...Rowstyles.PIRowSubtitle,
                  color: Colors.primary,
                }}
              >
                0xsfgy.....Dwd9T
              </Subtitle>
            </View>
          </View>
          <PresaleInfoRow title={"Listing on"} rest={"Poscokeswap"} />
          <PresaleInfoRow title={"Soft Cap"} rest={"50"} />
          <PresaleInfoRow title={"Hard Cap"} rest={"100"} />
          <PresaleInfoRow title={"Liquidity %"} rest={"70"} />
          <PresaleInfoRow title={"Enable Whitelist"} rest={"ND"} />
          <PresaleInfoRow title={"Listing Rate"} rest={"10"} />
          <PresaleInfoRow title={"Presale Rate"} rest={"20"} />
          <PresaleInfoRow title={"Presale Rate"} rest={"20"} />
          <PresaleInfoRow title={"Minimum Contribution"} rest={"0.1"} />
          <PresaleInfoRow title={"Maximum Contribution"} rest={"2"} />
          <PresaleInfoRow
            title={"Presale start date"}
            rest={"20 May 2022 00:00:00"}
          />
          <PresaleInfoRow
            title={"Presale end date"}
            rest={"20 May 2022 00:00:00"}
          />
          <PresaleInfoRow
            title={"Liquidity lock time"}
            rest={"25 Jul 2022 00:00:00"}
          />
        </CardContainer>
        {/* Emergency withdraw & Public cancel */}
        <CardContainer style={styles.EPCard}>
          <View style={styles.EPRowsContainer}>
            <View style={styles.EPRow}>
              <View>
                <AppText style={styles.presaleInfoTitle}>
                  Emergency Withdraw
                </AppText>
                <AppText style={styles.PIRowDescription}>
                  This is some description about emergency widthdraw.
                </AppText>
              </View>
              <CustomButton
                textStyle={{ fontSize: 12 }}
                title={"Withdraw"}
                style={styles.withdrawButton}
              />
            </View>
            <View
              style={{
                ...styles.EPRow,
                borderTopColor: "#000",
                borderTopWidth: 1,
              }}
            >
              <View style={styles.EPCol}>
                <AppText style={styles.presaleInfoTitle}>Public Cancel</AppText>
                <AppText style={styles.EPDescription}>
                  This is some description about emergency widthdraw.This is
                  This is
                </AppText>
              </View>
              <CustomButton
                textStyle={styles.publicCancelButtonText}
                title={"Submit"}
                style={styles.publicCancelButton}
              />
            </View>
          </View>
        </CardContainer>
        <View style={{ height: 120 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginTop: "5%",
    marginBottom: "3%",
  },
  image: {
    width: "25%",
    height: "8%",
    marginBottom: "8%",
    borderWidth: 5,
    borderColor: Colors.secondary,
    borderRadius: hp(100) / 80,
  },
  cardsContainer: {
    width: "100%",
  },
  scrollContent: {
    width: "100%",
    paddingHorizontal: "5%",
    alignItems: "center",
    paddingBottom: "10%",
  },
  upComing: {
    width: "100%",
    height: hp(9),
  },
  upComingContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  upComingTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  upComingTitleText: {
    fontSize: 22,
    fontFamily: "vietnamMedium",
    marginRight: "3%",
  },
  startTimeContianer: { alignItems: "flex-end" },
  sparkleRow: { flexDirection: "row", alignItems: "center" },
  sparkle: {
    marginTop: "5%",
    marginRight: "2%",
    width: "10%",
    height: "80%",
  },
  socialsContainer: {
    width: "100%",
    height: hp(8.3),
    marginVertical: "5%",
  },
  socialText: {
    fontSize: 10,
    fontFamily: "vietnamMedium",
    marginTop: "1.5%",
    marginLeft: "3%",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "65%",
    borderTopColor: "rgba(0, 0, 0, 0.25)",
    borderTopWidth: 1,
  },
  amountCard: {
    width: "100%",
    height: hp(60),
    paddingHorizontal: "5%",
    paddingTop: "7%",
    paddingBottom: "2%",
    alignItems: "center",
  },
  amountCardTitle: {
    color: Colors.secondary,
    fontSize: 25,
    fontFamily: "vietnamMedium",
  },
  amountProgressTitle: {
    fontSize: 14,
    marginTop: "12%",
  },
  progress: {
    marginTop: "2%",
    marginBottom: "1%",
    height: "3.8%",
    width: "90%",
    borderRadius: wp(100) / 2,
  },
  progressRange: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    marginBottom: "11%",
  },
  progressRangText: {
    fontFamily: "vietnamMedium",
  },
  CustomProgressbar: { marginVertical: "12%" },
  contributed: {
    width: "90%",
    height: "21%",
    borderTopWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderTopColor: "rgba(0, 0, 0, 0.4)",
    borderBottomColor: "rgba(0, 0, 0, 0.4)",
  },
  contributedTitle: { fontSize: 15 },
  contributedBage: {
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    height: "40%",
    borderRadius: wp(100) / 2,
  },
  contributedText: {
    fontSize: 12,
    fontFamily: "vietnamMedium",
    color: Colors.primary,
  },
  purchased: {
    width: "90%",
    height: "21%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.4)",
  },
  whiteList: {
    marginVertical: "5%",
    width: "100%",
    height: hp(24),
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "7%",
  },
  whitelistNote: {
    fontSize: 13,
    fontFamily: "vietnamMedium",
    textAlign: "center",
    paddingHorizontal: "1%",
  },
  customButton: {
    marginTop: "5%",
    backgroundColor: "rgba(255, 46, 0, 0.3)",
    width: "80%",
    height: hp(4.5),
  },
  customButtonText: {
    color: Colors.secondary,
    fontSize: 12,
    fontFamily: "vietnamMedium",
  },
  presaleInfo: {
    height: hp(96),
    width: "100%",
  },
  presaleInfoHeader: {
    flexDirection: "row",
    width: "100%",
    height: "6.5%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    paddingHorizontal: "7%",
    alignItems: "center",
    marginBottom: "4%",
  },
  presaleInfoTitle: {
    fontSize: 15,
    fontFamily: "vietnamMedium",
  },

  PIRowDescription: {
    color: Colors.secondary,
    fontSize: 8,
  },
  EPCard: {
    width: "100%",
    height: hp(23),
    marginVertical: "5%",
  },
  EPRowsContainer: {
    flex: 1,
    paddingHorizontal: "3%",
  },
  EPRow: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "3%",
    paddingHorizontal: "3%",
  },
  withdrawButton: {
    width: "21%",
    height: hp(4.5),
    marginTop: "1%",
  },
  publicCancelButton: {
    width: "21%",
    height: hp(4.5),
    backgroundColor: Colors.white,
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  publicCancelButtonText: { fontSize: 12, color: Colors.secondary },
  EPDescription: {
    fontSize: 8,
  },
  EPCol: {
    width: "60%",
    marginBottom: "3%",
  },
});

export default ModalDetail;
