import React, { useContext } from "react";
import { View, Image } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import WhatsAppButton from "../components/buttons/WhatsAppButton";
export default function LinkedDevices({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
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
              text="Linked Devices"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
        </View>
      </View>
      <View
        style={[
          themeStyles[currentTheme].tabViewPage,
          {
            backgroundColor:
              theme === "dark"
                ? colors.darkThirdyBackgroudColor
                : colors.lightComponentColor,
          },
        ]}
      >
        <View style={themeStyles[currentTheme].tabViewPageInfoBox}>
          <Image
            source={require("../../assets/images/linked.png")}
            style={{
              height: 200,
              width: 200,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <WhatsappText
            text="Use WhatsApp on other devices"
            overrideStyles={[
              stylesConstants.bigText,
              {
                textAlign: "center",
                marginBottom: 10,
                color:
                  theme === "dark"
                    ? colors.lightComponentColor
                    : colors.darkSecondaryComponentColor,
              },
            ]}
          />
          <WhatsappText
            text="Use WhatsApp on Web, Desktop, and other devices."
            overrideStyles={[
              stylesConstants.smallestText,
              {
                textAlign: "center",
                marginBottom: 20,
                color: colors.darkPrimaryComponentColor,
              },
            ]}
          />
          <WhatsAppButton
            placeholder="Link a device"
            overrideStyles={{ marginBottom: 10 }}
          />
        </View>
        <EncryptedText />
      </View>
    </View>
  );
}
