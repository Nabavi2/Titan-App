import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, StatusBar, Image, ScrollView } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AppText from "../../../components/AppText";
import CardContainer from "../../../components/CardContainer";
import Subtitle from "../../../components/Subtitle";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";
import UpcomingBage from "./UpcomingBage";

function ModalDetail({ image }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />

      {/* Header */}
      <View style={styles.header}>
        <MaterialIcons name="keyboard-backspace" size={28} color="black" />
        <Ionicons name="ios-heart" size={26} color="#F24E1E" />
      </View>
      {/* Image */}
      <Image source={image} style={styles.image} />
      <ScrollView
        style={styles.cardsContainer}
        contentContainerStyle={styles.scrollContent}
      >
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
        </CardContainer>
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
  },
  image: {
    width: "20%",
    height: "11%",
    borderWidth: 5,
    borderColor: Colors.secondary,
    borderRadius: hp(100) / 80,
  },
  cardsContainer: {
    width: "100%",
    marginTop: "5%",
  },
  scrollContent: {
    width: "100%",
    paddingHorizontal: "5%",
    alignItems: "center",
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
    // backgroundColor: "lightgreen",
  },
  upComingTitleText: {
    fontSize: 22,
    fontFamily: "vsBold",
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
    height: hp(7),
    marginVertical: "5%",
  },
  socialText: {
    fontSize: 10,
    marginTop: "1.5%",
    marginLeft: "3%",
  },
});

export default ModalDetail;


