import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { stylesConstants } from "../constants/styles";
import colors from "../constants/colors";
interface IProps {
  iconName: any;
  onPress?: () => void;
  iconPacket?: "MaterialIcons" | "AntDesign";
}
export default function FloatingButton({
  iconName,
  onPress,
  iconPacket = "MaterialIcons",
}: IProps) {
  return (
    <Pressable style={stylesConstants.floatingButton} onPress={onPress}>
      {iconPacket === "AntDesign" && (
        <AntDesign
          name={iconName}
          size={24}
          color={colors.lightComponentColor}
        />
      )}
      {iconPacket === "MaterialIcons" && (
        <MaterialIcons
          name={iconName}
          size={24}
          color={colors.lightComponentColor}
        />
      )}
    </Pressable>
  );
}
