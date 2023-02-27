import React, { useContext, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Menu, MenuItem } from "react-native-material-menu";
import styles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "./texts/WhatsappText";
import Action from "../models/Action";
interface IProps {
  actions: Action[];
  onActionPress?: (action: any) => void;
  menuColor?: string;
}
export default function PopUpMenu({
  actions,
  onActionPress,
  menuColor,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const handleSelectAction = (action: Action) => {
    onActionPress && onActionPress(action);
    hideMenu();
  };

  return (
    <Menu
      style={styles[currentTheme].popUpMenu}
      visible={visible}
      anchor={
        <Entypo
          name="dots-three-vertical"
          size={20}
          style={stylesConstants.icon}
          color={menuColor ? menuColor : styles[currentTheme].icon.color}
          onPress={showMenu}
        />
      }
      onRequestClose={hideMenu}
    >
      {actions &&
        actions.map((data: Action) => {
          return (
            <MenuItem
              key={data.actionName}
              onPress={() => handleSelectAction(data)}
              children={
                <WhatsappText
                  text={data.actionName}
                  overrideStyles={styles[currentTheme].menuText}
                ></WhatsappText>
              }
            ></MenuItem>
          );
        })}
    </Menu>
  );
}
