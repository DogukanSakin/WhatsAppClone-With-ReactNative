import React from "react";
import { TextInput, View } from "react-native";
import colors from "../constants/colors";
import { stylesConstants } from "../constants/styles";
import useFonts from "../hooks/useFonts";
interface IProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
  overrideStyles?: object;
}
export default function Input({
  onChangeText,
  placeholder,
  overrideStyles,
}: IProps) {
  const { fontsLoaded } = useFonts();

  return (
    <View style={overrideStyles}>
      <TextInput
        onChangeText={(text: string) => onChangeText(text)}
        numberOfLines={1}
        placeholderTextColor={colors.darkPrimaryComponentColor}
        placeholder={placeholder}
        style={[
          stylesConstants.middleText,
          stylesConstants.input,
          { fontFamily: fontsLoaded ? "regular" : "System" },
        ]}
      />
    </View>
  );
}
