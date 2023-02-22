import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
export default function Calls() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  return (
    <View style={styles[currentTheme].tabViewPage}>
      <Text>Calls</Text>
    </View>
  );
}
