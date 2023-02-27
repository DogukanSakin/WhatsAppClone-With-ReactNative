import React, { useContext, useEffect, useState } from "react";
import { View, Image, ImageBackground, FlatList } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/rootStackParamList";
import ThemeContext from "../context/ThemeContext";
import themeStyles, { stylesConstants } from "../constants/styles";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Contact from "../models/Contact";
import contacts from "../dummyData/contacts";
import messages from "../dummyData/messages";
import PopUpMenu from "../components/PopUpMenu";
import { messagesPageActions } from "../constants/actions";
import Message from "../models/Message";
import MessageCard from "../components/cards/MessageCard";
type Props = NativeStackScreenProps<RootStackParamList, "Messages">;
export default function Messages({ navigation, route }: Props) {
  const { chat } = route.params;
  const [contact, setContact] = useState<Contact>();
  const [messagesData, setMessagesData] = useState<Message[]>();
  const renderMessages = ({ item }: { item: Message }) => (
    <MessageCard item={item} overrideStyles={{ marginTop: 20 }}></MessageCard>
  );

  useEffect(() => {
    const contact = contacts.find((c: Contact) => c.id === chat.id);
    setContact(contact);
    const data = messages.filter((m: Message) => m.chatID === chat.id);
    setMessagesData(data);
  }, []);

  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const currentBackgroundImage =
    theme === "dark"
      ? require("../../assets/images/defaultChatBackgroundDark.png")
      : require("../../assets/images/defaultChatBackgroundLight.png");
  return (
    <View style={stylesConstants.container}>
      <View style={themeStyles[currentTheme].header}>
        <View style={themeStyles[currentTheme].headerInnerContainer}>
          <View style={stylesConstants.rowAlignContainer}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={24}
              color={
                theme === "dark"
                  ? colors.darkPrimaryComponentColor
                  : colors.lightComponentColor
              }
            />
            {contact && (
              <>
                <Image
                  source={contact.avatar}
                  style={[
                    stylesConstants.cardImageOrIconContainer,
                    { height: 40, width: 40, marginLeft: 10 },
                  ]}
                ></Image>
                <View>
                  <WhatsappText
                    fontFamily="bold"
                    text={contact.name}
                    overrideStyles={[
                      stylesConstants.middleText,
                      { color: colors.lightComponentColor, marginLeft: 10 },
                    ]}
                  ></WhatsappText>
                  {contact.lastSeen && (
                    <WhatsappText
                      text={contact.lastSeen}
                      overrideStyles={[
                        stylesConstants.smallestText,
                        {
                          color: colors.lightComponentColor,
                          marginLeft: 10,
                        },
                      ]}
                    ></WhatsappText>
                  )}
                </View>
              </>
            )}
          </View>
          <View style={stylesConstants.rowSpaceBetweenContainer}>
            <Ionicons
              name="ios-videocam"
              size={24}
              color={colors.lightComponentColor}
            />
            <Ionicons
              name="call"
              size={24}
              style={stylesConstants.icon}
              color={colors.lightComponentColor}
            />
            <PopUpMenu
              actions={messagesPageActions}
              menuColor={colors.lightComponentColor}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={currentBackgroundImage}
        style={[stylesConstants.container, { padding: 20 }]}
      >
        <FlatList
          data={messagesData}
          renderItem={renderMessages}
          keyExtractor={(item, index) => item.id.toString()}
        ></FlatList>
      </ImageBackground>
    </View>
  );
}
