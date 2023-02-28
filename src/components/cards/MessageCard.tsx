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
function MessageCard({
  item,
  overrideStyles,
  textOverrideStyles,
  isMessageStarred = false,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  return (
    <View
      style={[
        themeStyles[currentTheme].messageCardContainer,
        {
          alignSelf: item.senderID === "MY_ID" ? "flex-end" : "flex-start",
          backgroundColor:
            item.senderID === "MY_ID"
              ? theme === "dark"
                ? colors.headerLight
                : colors.lightMessageCardBackground
              : theme === "dark"
              ? colors.headerDark
              : colors.lightComponentColor,
          borderTopLeftRadius: item.senderID !== "MY_ID" ? 0 : 10,
          borderTopRightRadius: item.senderID === "MY_ID" ? 0 : 10,
        },

        overrideStyles,
      ]}
    >
      <View style={stylesConstants.rowSpaceBetweenContainer}>
        <WhatsappText
          text={item.message}
          overrideStyles={[
            stylesConstants.smallText,
            {
              color:
                theme === "dark"
                  ? colors.lightComponentColor
                  : colors.darkSecondaryComponentColor,
            },
            textOverrideStyles,
          ]}
        />
        <View style={[stylesConstants.rowAlignContainer, { marginTop: 10 }]}>
          {isMessageStarred === true && (
            <AntDesign
              name="star"
              size={10}
              color={colors.darkPrimaryComponentColor}
            />
          )}

          <WhatsappText
            text={item.sendTime}
            overrideStyles={[
              { marginLeft: 5 },
              stylesConstants.smallestText,
              stylesConstants.bottomText,
              { color: colors.darkPrimaryComponentColor },
            ]}
          ></WhatsappText>
        </View>
      </View>
    </View>
  );
}

function areEqual(prevProps: IProps, nextProps: IProps) {
  return (
    prevProps.item.message === nextProps.item.message &&
    prevProps.item.sendTime === nextProps.item.sendTime &&
    prevProps.isMessageStarred === nextProps.isMessageStarred
  );
}
export default React.memo(MessageCard, areEqual);
