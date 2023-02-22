import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import PopUpMenu from "../components/PopUpMenu";
import { archivedPageActions } from "../constants/actions";
export default function Archived() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  return (
    <View style={styles[currentTheme].container}>
      <View style={styles[currentTheme].header}>
        <View style={styles[currentTheme].headerInnerContainer}>
          <WhatsappText
            fontFamily="bold"
            text="Archived"
            overrideStyles={[
              styles[currentTheme].bigText,
              { color: colors.lightComponentColor },
            ]}
          ></WhatsappText>
          <PopUpMenu actions={archivedPageActions}></PopUpMenu>
        </View>
      </View>
    </View>
  );
}
