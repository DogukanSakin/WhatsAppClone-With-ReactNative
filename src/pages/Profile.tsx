import React, { useCallback, useContext, useState } from "react";
import { View, SafeAreaView, Image, FlatList } from "react-native";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import themeStyles, { stylesConstants } from "../constants/styles";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";
import SettingsCard from "../components/cards/SettingsCard";
import Setting from "../models/Setting";
import profileSettings from "../constants/settings/profileSettings";
import AlertModal from "../components/modals/AlertModal";
import Input from "../components/Input";
export default function Profile({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const renderSettings = useCallback(
    ({ item }: { item: Setting }) => (
      <SettingsCard
        item={item}
        overrideStyles={{ marginLeft: 0 }}
        onEdit={handleChangeInfo}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item: Setting) => item.name.toString(), []);
  const handleChangeInfo = (item: Setting) => {
    if (item.header === "Name") {
      return setModalVisible(true);
    } else {
      return navigation.navigate("About");
    }
  };
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView style={stylesConstants.container}>
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
              text="Profile"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
        </View>
      </View>
      <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
        {modalVisible && (
          <AlertModal
            isVisible={modalVisible}
            onClose={handleModalVisible}
            overrideStyles={{ margin: 0, justifyContent: "flex-end" }}
          >
            <WhatsappText
              text="Enter your name"
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
            <Input
              placeholderTextColor={
                theme === "dark"
                  ? colors.darkPrimaryComponentColor
                  : colors.darkSecondaryComponentColor
              }
              overrideInputStyles={{
                marginLeft: 0,
                height: 60,
                marginBottom: 30,
                borderBottomWidth: 1,
                borderColor: colors.greenComponentColor,
              }}
              onChangeText={(text: string) => console.log(text)}
              placeholder="Your name..."
            ></Input>
          </AlertModal>
        )}
        <View style={{ alignSelf: "center" }}>
          <Image
            source={require("../../assets/dummyImages/currentUserPP.png")}
            style={[
              stylesConstants.cardImageOrIconContainer,
              { width: 160, height: 160 },
            ]}
          ></Image>
          <View
            style={[
              stylesConstants.cardBottomIconContainer,
              {
                borderWidth: 0,
                backgroundColor: colors.greenComponentColor,
                height: 40,
                width: 40,
              },
            ]}
          >
            <FontAwesome
              name="camera"
              size={20}
              color={colors.lightComponentColor}
            ></FontAwesome>
          </View>
        </View>
        <FlatList
          data={profileSettings}
          renderItem={renderSettings}
          keyExtractor={keyExtractor}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
