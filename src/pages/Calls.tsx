import React, { useContext, useMemo, useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import { Fontisto } from "@expo/vector-icons";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import FloatingButton from "../components/buttons/FloatingButton";
import EncryptedText from "../components/texts/EncryptedText";
import callsData from "../dummyData/calls";
import Call from "../models/Call";
import CallCard from "../components/cards/CallCard";
import Contact from "../models/Contact";
import contacts from "../dummyData/contacts";
import SearchContext from "../context/SearchContext";
import { useIsFocused } from "@react-navigation/native";
interface IProps {
  searchInCalls: string;
  navigation: any;
}
export default function Calls() {
  const { theme } = useContext(ThemeContext);
  const { searchValue } = useContext(SearchContext);

  const focused = useIsFocused();
  const currentTheme = theme as keyof typeof themeStyles;
  const [calls, setCalls] = useState<Call[]>(callsData);

  const renderCalls = useCallback(
    ({ item }: { item: Call }) => <CallCard item={item} />,
    []
  );
  const keyExtractor = useCallback((item: Call) => item.id.toString(), []);
  const memoizedSearch = () => {
    if (searchValue.length > 0) {
      const filteredChats = callsData.filter((call: Call) => {
        const contact: Contact | undefined = contacts.find(
          (contact: Contact) => {
            return contact.id === call.contactID;
          }
        );
        if (contact) {
          return contact.name.toLowerCase().includes(searchValue.toLowerCase());
        }
      });
      setCalls(filteredChats);
    } else {
      setCalls(callsData);
    }
  };
  useMemo(() => {
    memoizedSearch();
  }, [searchValue, callsData, focused]);
  return (
    <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
      <View style={stylesConstants.rowAlignContainer}>
        <View style={stylesConstants.greenIconContainer}>
          <Fontisto name="link2" size={24} color={colors.lightComponentColor} />
        </View>
        <View style={{ marginLeft: 20 }}>
          <WhatsappText
            text="Create call link"
            overrideStyles={[
              stylesConstants.middleText,
              {
                color:
                  theme === "dark"
                    ? colors.lightComponentColor
                    : colors.darkSecondaryComponentColor,
              },
            ]}
          ></WhatsappText>
          <WhatsappText
            text="Share a link for your WhatsApp call"
            overrideStyles={[
              stylesConstants.smallText,
              stylesConstants.bottomText,
              { marginTop: 6 },
            ]}
          ></WhatsappText>
        </View>
      </View>
      <WhatsappText
        text="Recent"
        overrideStyles={[
          stylesConstants.bottomText,
          stylesConstants.smallText,
          { marginTop: 20 },
        ]}
      ></WhatsappText>
      <FlatList
        data={calls}
        renderItem={renderCalls}
        keyExtractor={keyExtractor}
      ></FlatList>
      <EncryptedText />
      <FloatingButton iconName="add-call"></FloatingButton>
    </View>
  );
}
