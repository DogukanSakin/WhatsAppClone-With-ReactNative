import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import PopUpMenu from "../components/PopUpMenu";
import { archivedPageActions } from "../constants/actions";
import { AntDesign } from "@expo/vector-icons";
import ChatCard from "../components/cards/ChatCard";
import Chat from "../models/Chat";
import chatsData from "../dummyData/chats";
import EncryptedText from "../components/texts/EncryptedText";
export default function Archived({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const renderChatsData = ({ item }: any) => <ChatCard item={item as Chat} />;

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
            <WhatsappText
              fontFamily="bold"
              text="Archived"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
          <PopUpMenu actions={archivedPageActions}></PopUpMenu>
        </View>
      </View>
      <View style={themeStyles[currentTheme].tabViewPage}>
        <WhatsappText
          text="These chats stay archived when new messages are received. Tap to change"
          overrideStyles={[
            themeStyles[currentTheme].bottomText,
            stylesConstants.middleText,
            { textAlign: "center" },
          ]}
        />
        <FlatList
          data={chatsData}
          renderItem={renderChatsData}
          keyExtractor={(item, index) => item.id.toString()}
        />
        <EncryptedText />
      </View>
    </View>
  );
}
