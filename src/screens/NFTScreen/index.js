import React from "react";
import { StyleSheet, View } from "react-native";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import Pnft from "../../../assets/Pnft";
import AppText from "../../components/AppText";
import CustomButton from "../../components/CustomButton";

const size = Layout.window;
function NFTScreen(props) {
  return (
    <View style={styles.container}>
      <View styles={styles.columnContainer}>
        <View style={styles.image}>
          <Pnft />
        </View>
        <View
          style={{ width: "75%", alignSelf: "center", alignItems: "center" }}
        >
          <AppText style={styles.text}>Buy an NFT</AppText>
          <AppText style={styles.text}>Mint Full John Wick</AppText>
          <AppText style={styles.text}>WIN $5000!!</AppText>
          <CustomButton
            title="Mint"
            style={{
              marginTop: 20,
              width: size.width * 0.3,
              height: size.height * 0.04,
            }}
          />
          <AppText style={{ fontSize: 8 }}>0.15 BNB per Ape Lab</AppText>
          <CustomButton style={styles.whiteButton} />
          <CustomButton
            title="Load NFT"
            style={{ width: size.width * 0.3, height: size.height * 0.04 }}
          />
          <AppText style={{ fontSize: 17 }}>You own 0 NFT’s</AppText>
          <AppText style={{ fontSize: 9, marginVertical: 5 }}>
            Deep within the Binance Smart Chain there lies an expensive
            laboratory. Rich scientists built it to run tests on poor apes. But
            the apes didn’t want to be poor anymore, and rose up!
          </AppText>
          <AppText style={{ fontSize: 8, marginVertical: 5 }}>
            They overthrew the scientists and ran them off. But the scientists
            left in such a hurry, they forgot their credit cards!Now armed with
            some credit and an online shopping account, they accessorized.
            Everything they ever wanted to buy. Including a large…pink… club?
            They aren’t sure what it was but it wasn’t their money so who cares?
          </AppText>
          <AppText style={styles.textDescription}>
            Meet the Ape Lab NFT Gang!
          </AppText>
          <AppText style={styles.textDescription}>
            Every LabApe Minted 33% of the revenue goes into the
          </AppText>
          <AppText style={styles.textDescription}>
            $Ape token and burned
          </AppText>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#f3f6fa",
    width: "100%",
  },
  columnContainer: {
    width: "70%",
    alignSelf: "center",
  },
  image: {
    height: size.height * 0.2,
    width: size.width * 0.5,
    backgroundColor: Colors.background,
    alignSelf: "center",
  },
  text: {
    fontSize: 22,
    alignSelf: "center",
  },
  whiteButton: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginVertical: 10,
    width: size.width * 0.3,
    height: size.height * 0.04,
  },
  textDescription: { fontSize: 9.5, fontFamily: "vsBold" },
});
export default NFTScreen;
