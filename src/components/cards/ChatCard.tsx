import React, { useContext } from "react";
import { View, Image, Pressable } from "react-native";
import themeStyles, { stylesConstants } from "../../constants/styles";
import ThemeContext from "../../context/ThemeContext";
import WhatsappText from "../texts/WhatsappText";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import Chat from "../../models/Chat";
import contacts from "../../dummyData/contacts";
import Contact from "../../models/Contact";

interface IProps {
  item: Chat;
  onPress?: (item: Chat) => void;
}
function ChatCard({ item, onPress }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const handleOnPress = () => {
    if (onPress) {
      onPress(item);
    }
  };
  const contact = contacts.find((c: Contact) => {
    return c.id === item.contactID;
  });
  return (
    <Pressable
      style={[stylesConstants.rowContainer, { marginTop: 20 }]}
      onPress={handleOnPress}
    >
      <Image
        source={contact!!.avatar}
        style={stylesConstants.cardImageOrIconContainer}
      />
      <View style={{ marginLeft: 16, flex: 1 }}>
        <WhatsappText
          fontFamily="bold"
          text={contact!!.name}
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
//check props equal
function areEqual(prevProps: IProps, nextProps: IProps) {
  return prevProps.item.id === nextProps.item.id;
}
export default React.memo(ChatCard, areEqual);
