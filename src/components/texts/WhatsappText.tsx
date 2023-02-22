import React from "react";
import { View, Text } from "react-native";
import useFontFamily from "../../hooks/useFonts";

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
  return (
    <View onLayout={onLayoutRootView}>
      <Text
        style={[
          {
            fontFamily: fontsLoaded ? `${fontFamily}` : "System",
          },
          overrideStyles,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
