import React from "react";
import { Pressable } from "react-native";
import WhatsappText from "../texts/WhatsappText";
import { stylesConstants } from "../../constants/styles";
import colors from "../../constants/colors";

interface IProps {
  onPress?: () => void;
  placeholder: string;
  overrideStyles?: object;
}
export default function WhatsAppButton({
  onPress,
  placeholder,
  overrideStyles,
}: IProps) {
  return (
    <Pressable
      style={[stylesConstants.whatsappButtonContainer, overrideStyles]}
    >
      <WhatsappText
        text={placeholder}
        overrideStyles={[
          stylesConstants.middleText,
          { color: colors.lightComponentColor },
        ]}
      />
    </Pressable>
  );
}
