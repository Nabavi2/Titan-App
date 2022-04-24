import React from "react";
import { View, Text, StyleSheet, Image, PixelRatio } from "react-native";
import CardContainer from "../../components/CardContainer";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";
import GlobalStyles from "../../constants/GlobalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppText from "../../components/AppText";
import Subtitle from "../../components/Subtitle";
import Layout from "../../constants/Layout";
import { AntDesign, Feather } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Dashboard</Title>
      </View>
      <CardContainer style={styles.card}>
        {/* Image section */}
        <View style={styles.cardImageWrapper}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/boy.png")}
            style={styles.cardImage}
          />
          <AppText style={styles.cardImageText}>
            Sale starts in : {"\n  "}00:09:17:46
          </AppText>
        </View>
        {/* Card title section */}
        <View style={styles.cardTitle}>
          <Subtitle style={styles.cardTitleText}>GOLD</Subtitle>
          <View style={styles.timeBageWrapper}>
            <View style={styles.timeBageOp} />
            <View style={styles.timeBage}>
              <Feather name="clock" size={10} color={Colors.secondary} />
              <AppText style={styles.timeBageText}>Upcoming</AppText>
            </View>
          </View>
        </View>
        {/* Range section */}
        <View style={styles.rangeContainer}>
          <AppText style={styles.rangeTitle}>Soft/Hard Cap:</AppText>
          <AppText style={styles.rangeAmount}>10-20 BNB</AppText>
        </View>
        {/* About section */}
        <View style={styles.aboutContainer}>
          <AppText style={styles.about}>About</AppText>
          <AppText style={styles.aboutDescription}>
            Lorem ipsum dolor sit amet. Ea quia nostrum aut dolore tempore ad
            velit numquam et praesentium autem eum explicabo eius. Et ullam
            porro qui consequatur alias ut deserunt totam 33 quidem consectetur.
            Id quia temporibus qui ratione{" "}
          </AppText>
        </View>
        {/* Other view section */}
        <View
          style={{
            // backgroundColor: "lightgreen",
            width: "100%",
            height: "20%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: "2%",
              marginBottom: "4%",
            }}
          >
            <AppText style={{ fontSize: 6, color: Colors.primary }}>
              View more
            </AppText>
            <AntDesign
              name="down"
              size={8}
              color={Colors.primary}
              style={{ marginLeft: "2%", marginTop: "2%" }}
            />
          </View>
          <CustomButton title="View Presale" textStyle={{ fontSize: 8 }} />
        </View>
      </CardContainer>
      <Text>{PixelRatio.get()}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subHeader: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "6%",
  },
  title: {
    marginLeft: "6%",
    marginBottom: "1%",
  },
  card: { width: wp(43), height: hp(35), margin: 10, padding: 5 },
  cardImageWrapper: {
    width: "100%",
    height: "25%",
    borderRadius: wp(100) / 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: wp(100) / 50,
  },
  cardImageText: {
    fontSize: 8,
    color: Colors.white,
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
  },
  cardTitle: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    marginTop: "1%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 3,
  },
  cardTitleText: { color: Colors.primary, fontFamily: "vsBold" },
  timeBageWrapper: {
    width: "30%",
    height: "50%",
    borderRadius: 3,
    overflow: "hidden",
  },
  timeBageOp: {
    backgroundColor: "#FFB500",
    opacity: 0.3,
    flex: 1,
  },
  timeBage: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "18%",
    left: "4%",
    zIndex: 1,
  },
  timeBageText: {
    marginTop: "-4%",
    fontSize: 5,
    marginLeft: "8%",
  },
  rangeContainer: {
    width: "100%",
    height: "12%",
  },
  rangeTitle: {
    fontSize: 8,
  },
  rangeAmount: {
    fontSize: 11,
    color: Colors.secondary,
    marginTop: "-1%",
  },
  aboutContainer: {
    width: "100%",
    maxHeight: "29%",
  },
  about: {
    fontSize: 10,
    color: Colors.primary,
  },
  aboutDescription: {
    fontSize: 7,
  },
});
export default Dashboard;
