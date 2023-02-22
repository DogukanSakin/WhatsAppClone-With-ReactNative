import React, { useContext } from "react";
import { View } from "react-native";
import ThemeContext from "../../context/ThemeContext";
import styles from "../../constants/styles";
import WhatsappText from "./WhatsappText";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../constants/colors";
export default function EncryptedText() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  return (
    <View
      style={[
        styles[currentTheme].rowAlignContainer,
        { justifyContent: "center", marginTop: 10 },
      ]}
    >
      <FontAwesome
        name="lock"
        size={16}
        style={styles[currentTheme].endcryptedIcon}
      />
      <WhatsappText
        text="Your personal messages are "
        overrideStyles={[
          styles[currentTheme].bottomText,
          styles[currentTheme].smallestText,
        ]}
      />
      <WhatsappText
        text="end-to-end encrypted"
        overrideStyles={[
          styles[currentTheme].bottomText,
          styles[currentTheme].smallestText,
          { color: colors.greenComponentColor },
        ]}
      />
    </View>
  );
}
