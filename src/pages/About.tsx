import React, { useCallback, useContext, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import themeStyles, { stylesConstants } from "../constants/styles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import PopUpMenu from "../components/PopUpMenu";
import { aboutPageActions } from "../constants/actions";
import AlertModal from "../components/modals/AlertModal";
import Input from "../components/Input";
import abouts from "../constants/abouts";
import About from "../models/About";

export default function AboutPage({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleModalVisible = () => {
    setModalVisible(!modalVisible);
  };
  const renderAbouts = useCallback(
    ({ item }: { item: About }) => (
      <WhatsappText
        text={item.name}
        overrideStyles={[
          stylesConstants.middleText,
          {
            marginTop: 30,
            color:
              theme === "dark"
                ? colors.lightComponentColor
                : colors.darkSecondaryComponentColor,
          },
        ]}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item: About) => item.name.toString(), []);
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
              text="About"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
          <PopUpMenu actions={aboutPageActions}></PopUpMenu>
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
              text="Add about"
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
              overrideInputStyles={{
                marginLeft: 0,
                height: 60,
                marginBottom: 30,
                borderBottomWidth: 1,
                borderColor: colors.greenComponentColor,
              }}
              onChangeText={(text: string) => console.log(text)}
              placeholder="Add an about..."
            ></Input>
          </AlertModal>
        )}
        <WhatsappText
          text="Currently set to"
          overrideStyles={[
            stylesConstants.smallText,
            stylesConstants.bottomText,
          ]}
        />
        <View
          style={[stylesConstants.rowSpaceBetweenContainer, { marginTop: 10 }]}
        >
          <WhatsappText
            text="o7"
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
          <MaterialIcons
            onPress={() => setModalVisible(true)}
            name="edit"
            size={24}
            color={colors.greenComponentColor}
          />
        </View>
        <FlatList
          data={abouts}
          renderItem={renderAbouts}
          keyExtractor={keyExtractor}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
