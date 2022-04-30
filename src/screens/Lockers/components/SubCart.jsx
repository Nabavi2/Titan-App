import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

import AppText from "../../../components/AppText";
import Subtitle from "../../../components/Subtitle";
import CardContainer from "../../../components/CardContainer";
import CustomButton from "../../../components/CustomButton";
import Colors from "../../../constants/Colors";
import Details from "./Details";
import Layout from "../../../constants/Layout";

const size = Layout.window;
function SubCard({ image, title }) {
  const navigation = useNavigation();
  const [showDetial, setShowDetail] = useState(false);
  return (
    <CardContainer style={styles.card}>
      {/* <Details
        image={image}
        visible={showDetial}
        onRequestClose={() => setShowDetail(false)}
      /> */}
      {/* Image section */}
      <View style={styles.cardImageWrapper}>
        <Image resizeMode="cover" source={image} style={styles.cardImage} />
      </View>
      {/* Card title section */}
      <View style={styles.cardTitle}>
        <Subtitle style={styles.cardTitleText}>{title}</Subtitle>
      </View>
      <View style={styles.separator}></View>
      {/* Range section */}
      <View style={styles.dateTimeRow}>
        <AppText style={styles.dateTimeText}>Unlock Date/Time</AppText>
        <AppText style={styles.dateText}>20/03/2022</AppText>
      </View>

      {/* Other view section */}
      <View style={styles.viewMore}>
        <View style={styles.rowTexts}>
          <View style={styles.moreButton}>
            <AppText style={{ fontSize: 8, color: Colors.primary }}>
              Owner
            </AppText>
            <AppText style={{ fontSize: 8, color: Colors.primary }}>
              Address
            </AppText>
          </View>
          <AppText
            style={{ color: Colors.primary, fontSize: 7, marginLeft: 10 }}
          >
            0x35C6B73....765b70343914
          </AppText>
        </View>
        <View style={styles.separator}></View>
        <View style={[styles.rowTexts, { marginVertical: 5 }]}>
          <AppText style={{ fontSize: 7, marginRight: size.width * 0.033 }}>
            UNLOCKS IN:
          </AppText>
          <AppText
            style={{
              color: Colors.primary,
              fontSize: 7,
              marginLeft: size.width * 0.1,
            }}
          >
            10:59:57
          </AppText>
        </View>
        <CustomButton
          onPress={() =>
            navigation.navigate("details", {
              image1: image,
            })
          }
          title="View Lock"
          textStyle={styles.viewPresale}
          style={{ width: "80%", marginVertical: 5 }}
        />
      </View>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    width: wp(43),
    height: hp(34),
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 5,
  },
  cardImageWrapper: {
    width: "100%",
    height: "35%",
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
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    width: "97%",
    height: 2,
    backgroundColor: Colors.black,
    alignSelf: "center",
  },
  dateTimeRow: {
    marginTop: 6,
    width: "100%",
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitleText: { color: Colors.primary, fontFamily: "vsBold" },
  rowTexts: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timeBageWrapper: {
    width: "30%",
    height: "50%",
    borderRadius: 3,
  },

  timeBageText: {
    marginTop: "-4%",
    fontSize: 5,
    marginLeft: "8%",
  },

  dateTimeText: {
    color: Colors.primary,
    fontSize: 9,
  },
  dateText: {
    fontSize: 9,
    color: Colors.black,
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
  viewMore: {
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  moreButton: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "4%",
  },
  moreIcon: { marginLeft: "2%", marginTop: "2%" },
  viewPresale: { fontSize: 8 },
  modalWrapper: {
    margin: 0,
    height: Layout.window.height,
    backgroundColor: Colors.white,
  },
});

export default SubCard;
