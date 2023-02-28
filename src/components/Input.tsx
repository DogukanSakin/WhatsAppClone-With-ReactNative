import React, { useContext } from "react";
import { TextInput, View } from "react-native";
import colors from "../constants/colors";
import { stylesConstants } from "../constants/styles";
import useFonts from "../hooks/useFonts";
import ThemeContext from "../context/ThemeContext";
interface IProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
  overrideStyles?: object;
  overrideInputStyles?: object;
  placeholderTextColor?: string;
}
export default function Input({
  onChangeText,
  placeholder,
  overrideStyles,
  overrideInputStyles,
  placeholderTextColor,
}: IProps) {
  const { fontsLoaded } = useFonts();
  const { theme } = useContext(ThemeContext);
  return (
    <View style={overrideStyles}>
      <TextInput
        onChangeText={(text: string) => onChangeText(text)}
        numberOfLines={1}
        placeholderTextColor={
          placeholderTextColor
            ? placeholderTextColor
            : theme === "dark"
            ? colors.darkPrimaryComponentColor
            : colors.lightComponentColor
        }
        placeholder={placeholder}
        style={[
          stylesConstants.middleText,
          stylesConstants.input,
          {
            fontFamily: fontsLoaded ? "regular" : "System",
            color:
              theme === "dark"
                ? colors.darkPrimaryComponentColor
                : colors.lightComponentColor,
          },
          overrideInputStyles,
        ]}
      />
    </View>
  );
}
