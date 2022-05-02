import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import AppNavigation from "./src/navigation/AppNavigation";
import { store } from "./src/redxu/ConfigStore";

export default function App() {
  const [loaded] = useFonts({
    vietnam: require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    vietnamBold: require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    vsBold: require("./assets/fonts/BeVietnamPro-SemiBold.ttf"),
    vietnamMedium: require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    vItalic: require("./assets/fonts/BeVietnamPro-Italic.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MenuProvider>
          <StatusBar style="auto" />
          <AppNavigation />
        </MenuProvider>
      </NativeBaseProvider>
    </Provider>
  );
}
