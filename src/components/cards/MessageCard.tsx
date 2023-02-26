import React, { useContext } from "react";
import { View } from "react-native";
import Message from "../../models/Message";
import WhatsappText from "../texts/WhatsappText";
import { stylesConstants } from "../../constants/styles";
import ThemeContext from "../../context/ThemeContext";
import colors from "../../constants/colors";
import themeStyles from "../../constants/styles";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  item: Message;
  overrideStyles?: object;
  textOverrideStyles?: object;
  isMessageStarred?: boolean;
}
export default function MessageCard({
  item,
  overrideStyles,
  textOverrideStyles,
  isMessageStarred = false,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  return (
    <View
      style={[overrideStyles, themeStyles[currentTheme].messageCardContainer]}
    >
      <WhatsappText
        text={item.message}
        overrideStyles={[
          stylesConstants.smallText,
          {
            color: colors.lightComponentColor,
          },
          textOverrideStyles,
        ]}
      />
      <View
        style={[
          stylesConstants.rowAlignContainer,
          {
            position: "absolute",
            right: 10,
            bottom: 0,
          },
        ]}
      >
        {isMessageStarred === true && (
          <AntDesign
            name="star"
            size={10}
            style={{ marginRight: 5 }}
            color={colors.darkPrimaryComponentColor}
          />
        )}

        <WhatsappText
          text={item.sendTime}
          overrideStyles={[
            stylesConstants.smallestText,
            stylesConstants.bottomText,
          ]}
        ></WhatsappText>
      </View>
    </View>
  );
}
