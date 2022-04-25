import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import AppNavigation from "./src/navigation/AppNavigation";

export default function App() {
  const [loaded] = useFonts({
    vietnam: require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    vietnamBold: require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    vsBold: require("./assets/fonts/BeVietnamPro-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <MenuProvider>
        <StatusBar style="auto" />
        <AppNavigation />
      </MenuProvider>
    </NativeBaseProvider>
  );
}
