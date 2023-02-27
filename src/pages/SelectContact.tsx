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
import FloatingButton from "../components/buttons/FloatingButton";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../constants/rootStackParamList";
type Props = NativeStackScreenProps<RootStackParamList, "SelectContact">;
export default function NewGroup({ navigation, route }: Props) {
  const { headerText } = route.params;
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [data, setData] = useState<Contact[]>(contactData);
  const [selectedContacts, setSelectedContacts] = useState<Contact[] | null>(
    []
  );
  const handleSelectContact = (item: Contact) => {
    const filteredContacts = contactData.filter((contact: Contact) => {
      if (contact.id === item.id) {
        item.isSelected = !item.isSelected;
      }
      return contact;
    });
    setData(filteredContacts);

    const selectedContacts = filteredContacts.filter((contact: Contact) => {
      return contact.isSelected === true;
    });
    selectedContacts.length > 0
      ? setSelectedContacts(selectedContacts)
      : setSelectedContacts(null);
  };
  const renderContacts = ({ item }: { item: Contact }) => (
    <ContactCard item={item} onPress={() => handleSelectContact(item)} />
  );
  const renderSelectedContacts = ({ item }: { item: Contact }) => (
    <ContactCard
      showRemoveIcon
      overrideStyles={{ marginRight: 20, marginBottom: 10 }}
      showCardText={false}
      item={item}
      onPress={() => handleSelectContact(item)}
    />
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
                text={headerText}
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
        {selectedContacts !== null && (
          <View>
            <FlatList
              data={selectedContacts}
              horizontal={true}
              renderItem={renderSelectedContacts}
            ></FlatList>
          </View>
        )}

        <FlatList
          data={data}
          renderItem={renderContacts}
          keyExtractor={(item, index) => item.id.toString()}
        />
        <FloatingButton iconName="arrowright" iconPacket="AntDesign" />
        <EncryptedText />
      </View>
    </View>
  );
}
