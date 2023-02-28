import React, { useCallback, useContext } from "react";
import { View, Image, FlatList, SafeAreaView } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import mainSettings from "../constants/mainSettings";
import Setting from "../models/Setting";
import SettingsCard from "../components/cards/SettingsCard";
export default function Settings({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;

  const renderSettings = useCallback(
    ({ item }: { item: Setting }) => <SettingsCard item={item} />,
    []
  );
  const keyExtractor = useCallback((item: Setting) => item.name.toString(), []);
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
              text="Settings"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
        </View>
      </View>
      <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
        <View style={stylesConstants.rowAlignContainer}>
          <Image
            source={require("../../assets/dummyImages/currentUserPP.png")}
            style={[
              stylesConstants.cardImageOrIconContainer,
              { height: 70, width: 70 },
            ]}
          ></Image>

          <View
            style={[
              stylesConstants.rowSpaceBetweenContainer,
              { marginLeft: 20, flex: 1 },
            ]}
          >
            <View>
              <WhatsappText
                text="Dogukan Sakin"
                overrideStyles={[
                  stylesConstants.bigText,
                  {
                    color:
                      theme === "dark"
                        ? colors.lightComponentColor
                        : colors.darkSecondaryComponentColor,
                  },
                ]}
              />
              <WhatsappText
                text="o7"
                overrideStyles={[
                  stylesConstants.middleText,
                  stylesConstants.bottomText,
                ]}
              />
            </View>
            <Ionicons
              name="qr-code-outline"
              size={24}
              color={colors.greenComponentColor}
            />
          </View>
        </View>
        <FlatList
          data={mainSettings}
          renderItem={renderSettings}
          keyExtractor={keyExtractor}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
