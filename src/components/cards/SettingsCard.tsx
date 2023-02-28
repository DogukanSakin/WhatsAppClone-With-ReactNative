import React, { useContext } from "react";
import { View, Pressable } from "react-native";
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
  MaterialCommunityIcons,
} from "@expo/vector-icons";
interface IProps {
  item: Setting;
  overrideStyles?: object;
  onPress?: (setting: Setting) => void;
}
function SettingsCard({ item, overrideStyles, onPress }: IProps) {
  const { theme } = useContext(ThemeContext);
  const handleOnPress = () => {
    if (onPress) {
      onPress(item);
    }
  };
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
        case "MaterialCommunityIcons":
          return (
            <MaterialCommunityIcons
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
    <Pressable
      onPress={handleOnPress}
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
    </Pressable>
  );
}
function areEqual(prevProps: IProps, nextProps: IProps) {
  return prevProps.item.name === nextProps.item.name;
}
export default React.memo(SettingsCard, areEqual);
