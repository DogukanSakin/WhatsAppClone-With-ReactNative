import React, { useContext } from "react";
import { View, Image, Pressable } from "react-native";
import themeStyles, { stylesConstants } from "../../constants/styles";
import ThemeContext from "../../context/ThemeContext";
import WhatsappText from "../texts/WhatsappText";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import Chat from "../../models/Chat";
interface IProps {
  item: Chat;
  onPress?: (item: Chat) => void;
}
export default function ChatCard({ item, onPress }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const handleOnPress = () => {
    if (onPress) {
      onPress(item);
    }
  };
  return (
    <Pressable
      style={[stylesConstants.rowContainer, { marginTop: 20 }]}
      onPress={handleOnPress}
    >
      <Image
        source={item.avatar}
        style={stylesConstants.cardImageOrIconContainer}
      />
      <View style={{ marginLeft: 16, flex: 1 }}>
        <WhatsappText
          fontFamily="bold"
          text={item.name}
          overrideStyles={themeStyles[currentTheme].pageInnerText}
        />
        <View style={stylesConstants.rowAlignContainer}>
          {item.last_message_sender_id === "MY_ID" && (
            <Ionicons
              style={{ marginRight: 4 }}
              name="checkmark-done-outline"
              size={20}
              color={
                item.read_status === "read"
                  ? "#8feeff"
                  : colors.darkPrimaryComponentColor
              }
            />
          )}
          {item.last_message ? (
            <WhatsappText
              text={item.last_message}
              overrideStyles={[
                themeStyles[currentTheme].bottomText,
                stylesConstants.middleText,
                { marginTop: 6 },
              ]}
            />
          ) : (
            <>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="circle-off-outline"
                size={18}
                color={colors.darkPrimaryComponentColor}
              />
              <WhatsappText
                text="This message was deleted."
                overrideStyles={[
                  themeStyles[currentTheme].bottomText,
                  stylesConstants.middleText,
                  { marginTop: 6, fontStyle: "italic" },
                ]}
              />
            </>
          )}
        </View>
      </View>
      <WhatsappText
        text={item.last_message_time}
        overrideStyles={[
          themeStyles[currentTheme].bottomText,
          stylesConstants.smallText,
        ]}
      />
    </Pressable>
  );
}
