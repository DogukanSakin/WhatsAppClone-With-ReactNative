import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import ThemeContext from "../context/ThemeContext";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import PopUpMenu from "../components/PopUpMenu";
import { starredMessagesPageActions } from "../constants/actions";
import Input from "../components/Input";
import starredMessages from "../dummyData/starredMessages";
import StarredMessageCard from "../components/cards/StarredMessageCard";
import Message from "../models/Message";
export default function StarredMessages({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [data, setData] = useState<Message[]>(starredMessages);
  const searchStarredMessage = (text: string) => {
    if (text.trim() !== "") {
      const filteredStarredMessages = starredMessages.filter(
        (starredMessage: Message) => {
          return starredMessage.message.includes(text);
        }
      );
      setData(filteredStarredMessages);
    } else {
      setData(starredMessages);
    }
  };

  const renderStarredMessages = ({ item }: any) => (
    <StarredMessageCard item={item as Message} />
  );
  return (
    <View style={stylesConstants.container}>
      <View style={themeStyles[currentTheme].header}>
        <View style={themeStyles[currentTheme].headerInnerContainer}>
          <View style={stylesConstants.rowAlignContainer}>
            <AntDesign
              onPress={
                searchBarVisible === true
                  ? () => setSearchBarVisible(false)
                  : () => navigation.goBack()
              }
              name="arrowleft"
              size={24}
              color={
                theme === "dark"
                  ? colors.darkPrimaryComponentColor
                  : colors.lightComponentColor
              }
            />
            {searchBarVisible === true ? (
              <Input
                placeholder="Search..."
                onChangeText={(text: string) => searchStarredMessage(text)}
              />
            ) : (
              <WhatsappText
                fontFamily="bold"
                text="Starred messages"
                overrideStyles={[
                  stylesConstants.bigText,
                  { color: colors.lightComponentColor, marginLeft: 30 },
                ]}
              ></WhatsappText>
            )}
          </View>
          {searchBarVisible === false && (
            <View style={stylesConstants.rowContainer}>
              <Ionicons
                onPress={() => setSearchBarVisible(true)}
                name="search-outline"
                size={20}
                style={themeStyles[currentTheme].icon}
              />
              <PopUpMenu actions={starredMessagesPageActions}></PopUpMenu>
            </View>
          )}
        </View>
      </View>

      <View
        style={[
          themeStyles[currentTheme].tabViewPage,
          {
            backgroundColor:
              theme === "dark"
                ? colors.darkThirdyBackgroudColor
                : colors.lightSecondaryComponentColor,
          },
        ]}
      >
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={renderStarredMessages}
        ></FlatList>
      </View>
    </View>
  );
}
