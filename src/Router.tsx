import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WhatsappText from "./components/WhatsappText";
import ThemeContext from "./context/ThemeContext";
import styles from "./constants/styles";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";
export default function Router() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  return (
    <View style={styles[currentTheme].container}>
      <View style={styles[currentTheme].header}>
        <View style={styles[currentTheme].headerInnerContainer}>
          <WhatsappText
            fontFamily="bold"
            text="WhatsApp"
            overrideStyles={styles[currentTheme].headerText}
          ></WhatsappText>

          <View style={styles[currentTheme].iconContainer}>
            <Feather
              name="camera"
              size={20}
              style={styles[currentTheme].icon}
              color={styles[currentTheme].icon.color}
            ></Feather>
            <Ionicons
              name="search-outline"
              size={20}
              style={styles[currentTheme].icon}
              color={styles[currentTheme].icon.color}
            />
            <Menu
              style={styles[currentTheme].popUpMenu}
              visible={visible}
              anchor={
                <Entypo
                  name="dots-three-vertical"
                  size={20}
                  style={styles[currentTheme].icon}
                  color={styles[currentTheme].icon.color}
                  onPress={showMenu}
                />
              }
              onRequestClose={hideMenu}
            >
              <MenuItem
                onPress={hideMenu}
                children={
                  <WhatsappText
                    text="WhatsApp"
                    overrideStyles={styles[currentTheme].menuText}
                  ></WhatsappText>
                }
              ></MenuItem>
            </Menu>
          </View>
        </View>
      </View>
    </View>
  );
}
