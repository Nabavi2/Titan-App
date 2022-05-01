// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import Colors from "../../constants/Colors";
// import Layout from "../../constants/Layout";

// const size = Layout.window;

// function ScanScreen(props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Honeypot Scan</Text>
//       <Text style={styles.textDescription}>
//         Honeypot Scan provides checks for the code in the
//       </Text>
//       <Text style={styles.textDescription}>
//         contract for "Honey Pots". If not a honey pot still always
//       </Text>
//       <Text style={styles.textDescription}>do your own research!</Text>
//       <Text
//         style={[
//           styles.title,
//           {
//             fontSize: 16,
//             marginBottom: size.height * 0.02,
//             marginTop: size.height * 0.02,
//           },
//         ]}
//       >
//         Enter token address
//       </Text>
//       <View style={[styles.inputContainer, { width: size.width * 0.8 }]}>
//         <Ionicons
//           name="search-sharp"
//           size={22}
//           color={Colors.primary}
//           style={{ marginLeft: -8 }}
//         />
//         <TextInput
//           placeholder="Enter token address to check honeypot"
//           style={{ width: size.width * 0.45, fontSize: 9 }}
//         />

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.cart}>
//         <View style={styles.row}>
//           <Text style={styles.text}>Address</Text>
//           <Text style={styles.text}>N/A</Text>
//         </View>
//         <View style={styles.separator}></View>
//         <View style={styles.row}>
//           <Text style={styles.text}>Token name</Text>
//           <Text style={styles.text}>N/A</Text>
//         </View>
//         <View style={styles.separator}></View>
//         <View style={styles.row}>
//           <Text style={styles.text}>Symbol</Text>
//           <Text style={styles.text}>N/A</Text>
//         </View>
//         <View style={styles.separator}></View>
//         <View style={styles.row}>
//           <Text style={styles.text}>Price</Text>
//           <Text style={styles.text}>0</Text>
//         </View>
//         <View style={styles.separator}></View>
//         <View style={styles.row}>
//           <Text style={styles.text}>Buy tax</Text>
//           <Text style={styles.text}>0%</Text>
//         </View>
//         <View style={styles.separator}></View>
//         <View style={styles.row}>
//           <Text style={styles.text}>Sell tax</Text>
//           <Text style={styles.text}>0%</Text>
//         </View>
//         <View
//           style={[styles.separator, { marginBottom: size.height * 0.046 }]}
//         ></View>
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     height: size.height * 0.75,
//     width: size.width * 0.93,
//     backgroundColor: Colors.primary,
//     borderRadius: 16,
//     elevation: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//     paddingHorizontal: 25,
//     margin: 10,
//     marginTop: 15,
//   },
//   title: {
//     fontSize: 25,
//     fontFamily: "vsBold",
//     marginTop: size.height * 0.04,
//     marginBottom: size.height * 0.03,
//     color: Colors.white,
//   },
//   textDescription: {
//     fontSize: 11,
//     color: Colors.white,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     height: size.height * 0.045,
//     width: size.width * 0.73,
//     alignSelf: "center",
//     backgroundColor: Colors.white,
//     elevation: 0.5,
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
//     backgroundColor: Colors.secondary,
//     width: size.width * 0.28,
//     borderRadius: 20,
//     height: "100%",
//     marginRight: -15,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: Colors.white,
//     fontSize: 12,
//   },
//   cart: {
//     height: size.height * 0.39,
//     width: size.width * 0.81,
//     backgroundColor: Colors.inputBackground,
//     borderRadius: 16,
//     elevation: 3,
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//     paddingHorizontal: 25,
//     margin: 10,
//     marginTop: 15,
//     marginBottom: size.height * 0.08,
//   },
//   separator: {
//     backgroundColor: "#d1c4ff",
//     height: 2,
//     width: size.width * 0.78,
//   },
//   text: { fontFamily: "vietnamMedium" },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: size.width * 0.78,
//     paddingHorizontal: 10,
//     marginTop: size.height * 0.024,
//   },
// });
// export default ScanScreen;
