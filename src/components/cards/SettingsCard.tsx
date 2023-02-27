import React, { useContext } from "react";
import { View } from "react-native";
import Setting from "../../models/Setting";
import WhatsappText from "../texts/WhatsappText";
import { stylesConstants } from "../../constants/styles";
import ThemeContext from "../../context/ThemeContext";
import colors from "../../constants/colors";
import {
  Entypo,
  MaterialIcons,
  Fontisto,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
interface IProps {
  item: Setting;
  overrideStyles?: object;
}
export default function SettingsCard({ item, overrideStyles }: IProps) {
  const { theme } = useContext(ThemeContext);

  const SettingIcon: any = () => {
    if (item.iconName) {
      switch (item.iconPack) {
        case "Entypo":
          return (
            <Entypo
              name={item.iconName}
              size={24}
              color={colors.darkPrimaryComponentColor}
              style={{ marginRight: 20 }}
            />
          );
        case "MaterialIcons":
          return (
            <MaterialIcons
              name={item.iconName}
              size={24}
              color={colors.darkPrimaryComponentColor}
              style={{ marginRight: 20 }}
            />
          );
        case "Fontisto":
          return (
            <Fontisto
              name={item.iconName}
              size={24}
              color={colors.darkPrimaryComponentColor}
              style={{ marginRight: 20 }}
            />
          );
        case "Ionicons":
          return (
            <Ionicons
              name={item.iconName}
              size={24}
              color={colors.darkPrimaryComponentColor}
              style={{ marginRight: 20 }}
            />
          );
        case "FontAwesome5":
          return (
            <FontAwesome5
              name={item.iconName}
              size={24}
              color={colors.darkPrimaryComponentColor}
              style={{ marginRight: 20 }}
            />
          );
      }
    }
  };
  return (
    <View
      style={[
        { marginTop: 20, marginLeft: 20 },
        stylesConstants.rowAlignContainer,
        overrideStyles,
      ]}
    >
      <SettingIcon />

      <View>
        <WhatsappText
          text={item.name}
          overrideStyles={[
            stylesConstants.middleText,
            {
              color:
                theme === "dark"
                  ? colors.lightComponentColor
                  : colors.darkSecondaryComponentColor,
            },
          ]}
        ></WhatsappText>
        {item.description && (
          <WhatsappText
            text={item.description}
            overrideStyles={[
              stylesConstants.bottomText,
              stylesConstants.smallText,
            ]}
          ></WhatsappText>
        )}
      </View>
    </View>
  );
}
