import React, { useContext, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";
import styles from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "./texts/WhatsappText";
export default function PopUpMenu() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  return (
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
            text="New group"
            overrideStyles={styles[currentTheme].menuText}
          ></WhatsappText>
        }
      ></MenuItem>
      <MenuItem
        onPress={hideMenu}
        children={
          <WhatsappText
            text="New broadcast"
            overrideStyles={styles[currentTheme].menuText}
          ></WhatsappText>
        }
      ></MenuItem>
      <MenuItem
        onPress={hideMenu}
        children={
          <WhatsappText
            text="Linked devices"
            overrideStyles={styles[currentTheme].menuText}
          ></WhatsappText>
        }
      ></MenuItem>
      <MenuItem
        onPress={hideMenu}
        children={
          <WhatsappText
            text="Starred messages"
            overrideStyles={styles[currentTheme].menuText}
          ></WhatsappText>
        }
      ></MenuItem>
      <MenuItem
        onPress={hideMenu}
        children={
          <WhatsappText
            text="Settings"
            overrideStyles={styles[currentTheme].menuText}
          ></WhatsappText>
        }
      ></MenuItem>
    </Menu>
  );
}
