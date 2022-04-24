import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
function Dashboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <Title style={styles.title}>Dashboard</Title>
      </View>
      <CardContainer style={styles.card}>
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
        <View style={styles.cardTitle}>
          <Subtitle>hello</Subtitle>
        </View>
      </CardContainer>
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
    justifyContent: "center",
  },
  title: {
    marginLeft: "6%",
    marginBottom: "1%",
  },
  card: { width: wp(43), height: hp(32), margin: 10, padding: 5 },
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
    backgroundColor: "red",
    width: "100%",
    height: "13%",
    marginVertical: "3%",
    alignItems: "center",
  },
  subHeader: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "5%",
    justifyContent: "center",
  },
});
export default Dashboard;
