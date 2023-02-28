import React, { useContext } from "react";
import { View, Image } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import FloatingButton from "../components/buttons/FloatingButton";
interface IProps {
  searchInStatus?: string;
}
export default function Status({ searchInStatus }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  return (
    <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
      <View style={[stylesConstants.rowAlignContainer, { marginBottom: 20 }]}>
        <View>
          <Image
            source={require("../../assets/dummyImages/currentUserPP.png")}
            style={[
              stylesConstants.cardImageOrIconContainer,
              { width: 60, height: 60 },
            ]}
          ></Image>
          <View
            style={[
              themeStyles[currentTheme].cardBottomIconContainer,
              { backgroundColor: colors.greenComponentColor },
            ]}
          >
            <AntDesign
              name="plus"
              size={16}
              color={colors.lightComponentColor}
            />
          </View>
        </View>
        <View style={{ marginLeft: 20 }}>
          <WhatsappText
            text="My Status"
            overrideStyles={[
              stylesConstants.middleText,
              {
                color:
                  theme === "dark"
                    ? colors.lightComponentColor
                    : colors.darkSecondaryComponentColor,
              },
            ]}
          />
          <WhatsappText
            text="Tap to add status update"
            overrideStyles={[
              stylesConstants.smallText,
              stylesConstants.bottomText,
            ]}
          />
        </View>
      </View>
      <EncryptedText />
      <FloatingButton
        iconName="camera"
        iconPacket="FontAwesome"
      ></FloatingButton>
    </View>
  );
}
