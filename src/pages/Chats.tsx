import React, { useCallback, useContext, useMemo, useState } from "react";
import { View, FlatList, Pressable } from "react-native";
import themeStyles from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import { Foundation } from "@expo/vector-icons";
import colors from "../constants/colors";
import chatsData from "../dummyData/chats";
import ChatCard from "../components/cards/ChatCard";
import Chat from "../models/Chat";
import FloatingButton from "../components/buttons/FloatingButton";
import SearchContext from "../context/SearchContext";
import searchWithContactID from "../utils/searchWithContactID";
export default function Chats({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const { searchValue } = useContext(SearchContext);
  const renderChatsData = useCallback(
    ({ item }: { item: Chat }) => (
      <ChatCard item={item} onPress={(item: Chat) => handleGoMessages(item)} />
    ),
    []
  );
  const keyExtractor = useCallback((item: Chat) => item.id.toString(), []);
  const [data, setData] = useState<Chat[]>(chatsData);
  const handleGoMessages = (item: Chat) => {
    navigation.navigate("Messages", { chat: item });
  };

  useMemo(() => {
    if (searchValue.length > 0) {
      const result = searchWithContactID(chatsData, searchValue);
      result && setData(result);
    } else {
      setData(chatsData);
    }
  }, [searchValue, chatsData]);

  return (
    <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
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
        keyExtractor={keyExtractor}
      />
      <EncryptedText />
      <FloatingButton
        iconName="chat"
        onPress={() =>
          navigation.navigate("SelectContact", { headerText: "Select contact" })
        }
      />
    </View>
  );
}
