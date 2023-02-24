import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, Pressable } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import { Foundation } from "@expo/vector-icons";
import colors from "../constants/colors";
import chatsData from "../dummyData/chats";
import ChatCard from "../components/cards/ChatCard";
import Chat from "../models/Chat";
import FloatingButton from "../components/FloatingButton";
interface IProps {
  navigation: any;
  searchInChat: string;
}
export default function Chats({ navigation, searchInChat }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const renderChatsData = ({ item }: any) => <ChatCard item={item as Chat} />;
  const [data, setData] = useState<Chat[]>(chatsData);
  useEffect(() => {
    if (searchInChat.trim() !== "") {
      const filteredChats = chatsData.filter((chat: Chat) => {
        return chat.name.toLowerCase().includes(searchInChat.toLowerCase());
      });
      setData(filteredChats);
    }
  }, [searchInChat]);
  return (
    <View style={themeStyles[currentTheme].tabViewPage}>
      <Pressable
        onPress={() => navigation.navigate("Archived")}
        style={[
          themeStyles[currentTheme].pageInnerContainer,
          { marginBottom: 10 },
        ]}
      >
        <Foundation
          name="archive"
          size={20}
          color={
            theme === "dark"
              ? colors.darkPrimaryComponentColor
              : colors.greenComponentColor
          }
        />
        <WhatsappText
          text="Archived"
          fontFamily="bold"
          overrideStyles={[
            themeStyles[currentTheme].pageInnerText,
            { marginLeft: 20 },
          ]}
        />
      </Pressable>
      <FlatList
        data={data}
        renderItem={renderChatsData}
        keyExtractor={(item, index) => item.id.toString()}
      />
      <EncryptedText />
      <FloatingButton iconName="chat" />
    </View>
  );
}
