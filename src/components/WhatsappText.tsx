import React, { useContext } from "react";
import { View, Text } from "react-native";
import useFontFamily from "../hooks/useFonts";
import ThemeContext from "../context/ThemeContext";
import colors from "../constants/colors";
interface IProps {
  fontFamily?: "regular" | "bold";
  text: string;
  overrideStyles?: object;
}
export default function WhatsappText({
  fontFamily = "regular",
  text,
  overrideStyles,
}: IProps) {
  const { onLayoutRootView, fontsLoaded } = useFontFamily();
  const { theme } = useContext(ThemeContext);
  return (
    <View onLayout={onLayoutRootView}>
      <Text
        style={[
          {
            fontFamily: fontsLoaded ? `${fontFamily}` : "System",
            color:
              theme === "dark"
                ? colors.darkPrimaryComponentColor
                : colors.lightComponentColor,
          },
          overrideStyles,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
