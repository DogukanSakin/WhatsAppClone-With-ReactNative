import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import contactData from "../dummyData/contacts";
import EncryptedText from "../components/texts/EncryptedText";
import Input from "../components/Input";
import Contact from "../models/Contact";
import ContactCard from "../components/cards/ContactCard";
import FloatingButton from "../components/FloatingButton";

export default function NewGroup({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [data, setData] = useState<Contact[]>(contactData);
  const renderContacts = ({ item }: any) => (
    <ContactCard item={item as Contact} />
  );
  const handleSearch = (text: string) => {
    if (text.trim() !== "") {
      const filteredContacts = contactData.filter((contact: Contact) => {
        return contact.name.toLowerCase().includes(text.toLowerCase());
      });
      setData(filteredContacts);
    } else {
      setData(contactData);
    }
  };
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
                onChangeText={(text: string) => handleSearch(text)}
              />
            ) : (
              <WhatsappText
                fontFamily="bold"
                text="New group"
                overrideStyles={[
                  stylesConstants.bigText,
                  { color: colors.lightComponentColor, marginLeft: 30 },
                ]}
              ></WhatsappText>
            )}
          </View>
          {searchBarVisible === false && (
            <Ionicons
              onPress={() => setSearchBarVisible(true)}
              name="search-outline"
              size={20}
              style={themeStyles[currentTheme].icon}
            />
          )}
        </View>
      </View>
      <View style={themeStyles[currentTheme].tabViewPage}>
        <FlatList
          data={data}
          renderItem={renderContacts}
          keyExtractor={(item, index) => item.name.toString()}
        />
        <FloatingButton iconName="arrowright" iconPacket="AntDesign" />
        <EncryptedText />
      </View>
    </View>
  );
}
