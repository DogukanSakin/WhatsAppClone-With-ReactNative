import React, { useContext, useState } from "react";
import { SafeAreaView, View } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import RadioGroup from "../components/radio group/RadioGroup";
import RadioItemSetting from "../models/RadioItemSetting";
import statusPrivacySettings from "../constants/settings/statusPrivacySettings";

export default function StatusPrivacy({ navigation }: any) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [selected, setSelected] = useState<RadioItemSetting>();
  const onSelected = (item: RadioItemSetting) => {
    setSelected(item);
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
              text="Status Privacy"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
        </View>
      </View>
      <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 20 }]}>
        <WhatsappText
          text="Who can see my status updates"
          overrideStyles={[
            stylesConstants.smallText,
            stylesConstants.bottomText,
            { marginBottom: 20 },
          ]}
        />
        <RadioGroup
          selected={selected}
          onSelected={onSelected}
          items={statusPrivacySettings}
        />
        <WhatsappText
          text="Changes to your privacy settings won't affect status updates that you've sent already"
          overrideStyles={[
            stylesConstants.smallText,
            stylesConstants.bottomText,
            { marginTop: 20 },
          ]}
        />
      </View>
    </SafeAreaView>
  );
}
