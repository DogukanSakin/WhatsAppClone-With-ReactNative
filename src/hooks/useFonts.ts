import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
export default function useFontFamily() {
  const [fontsLoaded] = useFonts({
    bold: require("../../assets/fonts/bold2.otf"),
    regular: require("../../assets/fonts/regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  return { onLayoutRootView, fontsLoaded };
}
