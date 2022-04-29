// import React, { useState } from "react";
// import { View, StyleSheet, Image, Pressable } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

// import AppText from "../../../components/AppText";
// import CustomModal from "../../../components/CustomModal";
// import Colors from "../../../constants/Colors";
// import Layout from "../../../constants/Layout";

// const size = Layout.window;
// const Details = ({ image, visible, onRequestClose }) => {
//   return (
//     <CustomModal
//       visible={visible}
//       onRequestClose={onRequestClose}
//       isLocker={true}
//     >
//       <View style={styles.blackCart}>
//         <Pressable style={styles.iconContainer} onPressIn={onRequestClose}>
//           <AntDesign name="arrowleft" size={24} color={Colors.white} />
//         </Pressable>
//         <Image source={image} style={styles.image} />
//       </View>
//       <View style={styles.whiteCart}>
//         <View style={styles.column}>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Token Name</AppText>
//             <AppText style={styles.text2}>10</AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Token Address</AppText>
//             <AppText style={styles.text2}>teST</AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Owner Address</AppText>

//             <AppText style={styles.text2}>
//               0x35C6B73748272329cBf4ca0762F8765b70343914
//             </AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Amount of Token Locked</AppText>
//             <AppText style={styles.text2}>
//               0x35C6B73748272329cBf4ca0762F8765b70343914
//             </AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Unlock Date/Time</AppText>
//             <AppText style={styles.text2}>10 Dec 2021 0:0:00</AppText>
//           </View>

//           <View style={styles.row}>
//             <AppText style={styles.text}>Unlock in</AppText>

//             <AppText style={styles.text2}>10 Dec 2021 0:0:00</AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Rewards earned during Lock</AppText>

//             <AppText style={styles.text2}>111</AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Token Name</AppText>

//             <AppText style={styles.text2}>teST</AppText>
//           </View>
//           <View style={styles.row}>
//             <AppText style={styles.text}>Lock Further</AppText>
//             <AppText style={styles.text2}>Lock Further</AppText>
//           </View>
//         </View>
//       </View>
//     </CustomModal>
//   );
// };
// const styles = StyleSheet.create({
//   blackCart: {
//     width: size.width * 0.9,
//     height: size.height * 0.3,
//     backgroundColor: Colors.black,
//     justifyContent: "center",
//     alignItems: "center",
//     elevation: 0.8,
//     borderRadius: 10,
//     margin: 10,
//     alignSelf: "center",
//   },
//   iconContainer: {
//     marginLeft: -size.width * 0.75,
//     marginTop: -10,
//   },
//   image: {
//     height: size.width * 0.4,
//     width: size.width * 0.6,
//   },
//   whiteCart: {
//     height: size.width * 0.9,
//     width: size.width * 0.9,
//     backgroundColor: Colors.white,
//     elevation: 0.6,
//     borderRadius: 10,
//     alignSelf: "center",
//     marginTop: 20,
//   },
//   column: {
//     flexDirection: "column",
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     justifyContent: "space-between",
//   },
//   text: {
//     color: Colors.primary,
//     fontSize: 7,
//   },
//   text2: {
//     fontSize: 7,
//     color: Colors.black,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 10,
//   },
// });
// export default Details;
