import React, { useContext } from "react";
import { View, FlatList, Pressable } from "react-native";
import styles from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import { Foundation } from "@expo/vector-icons";
import colors from "../constants/colors";
import chatsData from "../dummyData/chats";
import ChatCard from "../components/cards/ChatCard";
import Chat from "../models/Chat";
export default function Chats({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  const renderChatsData = ({ item }: any) => <ChatCard item={item as Chat} />;
  return (
    <View style={styles[currentTheme].tabViewPage}>
      <Pressable
        onPress={() => navigation.navigate("Archived")}
        style={[styles[currentTheme].pageInnerContainer, { marginBottom: 10 }]}
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
            styles[currentTheme].pageInnerText,
            { marginLeft: 20 },
          ]}
        />
      </Pressable>
      <FlatList
        data={chatsData}
        renderItem={renderChatsData}
        keyExtractor={(item, index) => item.id.toString()}
      />
      <EncryptedText />
    </View>
  );
}
