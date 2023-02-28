import React, { useCallback, useContext, useState } from "react";
import { SafeAreaView, View, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import WhatsappText from "../components/texts/WhatsappText";
import colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";
import SettingsCard from "../components/cards/SettingsCard";
import Setting from "../models/Setting";
import chatSettings from "../constants/settings/chatSettings";
import AlertModal from "../components/modals/AlertModal";
import RadioGroup from "../components/radio group/RadioGroup";
import themeSettings from "../constants/settings/themeSettings";
import RadioItemSetting from "../models/RadioItemSetting";

export default function ChatSettings({ navigation }: any) {
  const { theme, setTheme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const renderSettings = useCallback(
    ({ item }: { item: Setting }) => (
      <SettingsCard item={item} onPress={selectSettings} />
    ),
    []
  );
  const keyExtractor = useCallback((item: Setting) => item.name.toString(), []);
  const [alertModalVisible, setAlertModalVisible] = useState<boolean>(false);
  const handleAlertModalVisible = () => {
    setAlertModalVisible(!alertModalVisible);
  };
  const selectSettings = (item: Setting) => {
    if (item.name === "Theme") {
      setAlertModalVisible(true);
    }
  };
  const [selected, setSelected] = useState<RadioItemSetting>();
  const onSelected = (item: RadioItemSetting) => {
    setSelected(item);
  };
  const onChangeTheme = () => {
    if (selected?.name === "Dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setAlertModalVisible(false);
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
              text="Chat settings"
              overrideStyles={[
                stylesConstants.bigText,
                { color: colors.lightComponentColor, marginLeft: 30 },
              ]}
            ></WhatsappText>
          </View>
        </View>
      </View>
      <View style={[themeStyles[currentTheme].tabViewPage, { paddingTop: 10 }]}>
        {alertModalVisible && (
          <AlertModal
            isVisible={alertModalVisible}
            onClose={handleAlertModalVisible}
            onOK={onChangeTheme}
          >
            <WhatsappText
              text="Choose theme"
              overrideStyles={[
                stylesConstants.bigText,
                {
                  marginBottom: 20,
                  color:
                    theme === "dark"
                      ? colors.lightComponentColor
                      : colors.darkSecondaryComponentColor,
                },
              ]}
            />
            <RadioGroup
              selected={selected}
              onSelected={onSelected}
              items={themeSettings}
            />
          </AlertModal>
        )}
        <WhatsappText
          text="Display"
          overrideStyles={[
            themeStyles[currentTheme].bottomText,
            stylesConstants.smallText,
          ]}
        />
        <FlatList
          data={chatSettings}
          renderItem={renderSettings}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
}
