import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import AppText from "../../components/AppText";
import CardContainer from "../../components/CardContainer";
import CustomProgressbar from "../../components/CustomProgressbar";
import CustomScrollView from "../../components/CustomScrollView";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Colors from "../../constants/Colors";

function ManagePresale(props) {
  return (
    <CustomScrollView
      style={styles.container}
      contentContainerStyle={styles.contentStyle}
    >
      {/* Presale Manager  */}
      <CardContainer style={styles.managerCard}>
        <Title style={styles.managerTitle}>Presale Manager</Title>
        <AppText style={styles.managerSubtitle}>
          Update, Deposit and manage presale with ease
        </AppText>
        <CustomProgressbar
          title={"0/2"}
          titleStyle={styles.progressTitle}
          startValue={"0 BNB"}
          endValue={"2 BNB"}
          style={styles.progressbar}
        />
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Name</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>Gold</Subtitle>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Symbol</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>GLD</Subtitle>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Token Address</Subtitle>
          <View style={styles.linkContainer}>
            <Subtitle
              style={{
                ...styles.managerRowSubtitle,
                color: Colors.primary,
              }}
            >
              0x4bdgs....sfjt6E
            </Subtitle>
          </View>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Presale Address</Subtitle>
          <View style={styles.linkContainer}>
            <Subtitle
              style={{
                ...styles.managerRowSubtitle,
                color: Colors.primary,
              }}
            >
              0xsfgy.....Dwd9T
            </Subtitle>
          </View>
        </View>
        <View style={styles.managerRow}>
          <Subtitle style={styles.managerRowTitle}>Presale link</Subtitle>
          <Subtitle style={styles.managerRowSubtitle}>
            https://apelab.app
          </Subtitle>
        </View>
      </CardContainer>
      <CardContainer style={styles.stepsCard}>
        <Subtitle style={styles.stepsTitle}>Presale Steps</Subtitle>
        <View style={styles.stepsContainer}>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>1.</Subtitle>
            <View>
              <AppText style={styles.stepText}>
                Exclude presale from fee’s
              </AppText>
              <AppText style={styles.stepSubtext}>
                Only for liquidity generation!
              </AppText>
            </View>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>2.</Subtitle>
            <View>
              <AppText style={styles.stepText}>Remove Fees</AppText>
              <AppText style={styles.stepSubtext}>
                Only for liquidity generation!
              </AppText>
            </View>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>3.</Subtitle>
            <AppText style={styles.stepText}>Deposit Tokens</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>4.</Subtitle>
            <AppText style={styles.stepText}>Finalize Presale</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>5.</Subtitle>
            <AppText style={styles.stepText}>Burn Tokens</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>6.</Subtitle>
            <AppText style={styles.stepText}>This is Step 6</AppText>
          </View>
          <View style={styles.stepRow}>
            <Subtitle style={styles.stepNumber}>7.</Subtitle>
            <AppText style={styles.stepText}>Withdraw Liquidity</AppText>
          </View>
        </View>
      </CardContainer>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  managerCard: {
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: "7%",
    overflow: "hidden",
    marginBottom: "2%",
    height: hp(60),
  },
  managerTitle: {
    fontFamily: "vsBold",
  },
  managerSubtitle: {
    fontSize: 11,
    paddingHorizontal: "18%",
    textAlign: "center",
    marginTop: "0.5%",
  },
  progressbar: {
    marginTop: "2%",
    marginBottom: "3%",
    marginLeft: "2%",
  },
  progressTitle: {
    fontSize: 12,
    fontFamily: "vietnamBold",
    color: Colors.primary,
  },
  managerRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    alignItems: "center",
    marginVertical: "4%",
  },
  managerRowTitle: {
    fontSize: 18,
  },
  managerRowSubtitle: {
    fontSize: 15,
  },
  linkContainer: {
    flexDirection: "row",
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
  },
  stepsCard: {
    marginVertical: "2%",
    paddingHorizontal: "7%",
    paddingVertical: "5%",
    height: hp(54),
  },
  stepsTitle: {
    fontSize: 20,
  },
  stepsContainer: {
    flex: 1,
    marginTop: "5%",
  },
  stepRow: {
    flexDirection: "row",
    width: "100%",
    marginVertical: "3%",
  },
  stepNumber: {
    fontSize: 15,
    marginRight: "10%",
  },
  stepText: {
    fontSize: 15,
  },
  stepSubtext: {
    fontSize: 10,
    color: Colors.secondary,
  },
});

export default ManagePresale;
