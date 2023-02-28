import React, { useCallback, useContext, useMemo, useState } from "react";
import { View, Image, FlatList } from "react-native";
import themeStyles, { stylesConstants } from "../constants/styles";
import ThemeContext from "../context/ThemeContext";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";
import WhatsappText from "../components/texts/WhatsappText";
import EncryptedText from "../components/texts/EncryptedText";
import FloatingButton from "../components/buttons/FloatingButton";
import statusData from "../dummyData/status";
import Status from "../models/Status";
import StatusCard from "../components/cards/StatusCard";
import SearchContext from "../context/SearchContext";
import searchWithContactID from "../utils/searchWithContactID";
export default function ContactStatus() {
  const { theme } = useContext(ThemeContext);
  const { searchValue } = useContext(SearchContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const [data, setData] = useState<Status[]>(statusData);
  const renderStatusData = useCallback(
    ({ item }: { item: Status }) => <StatusCard item={item} />,
    []
  );
  const keyExtractor = useCallback((item: Status) => item.id.toString(), []);
  useMemo(() => {
    if (searchValue.length > 0) {
      const result = searchWithContactID(statusData, searchValue);
      result && setData(result);
    } else {
      setData(statusData);
    }
  }, [searchValue, statusData]);

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
      <WhatsappText
        text="Recent updates"
        overrideStyles={[
          stylesConstants.bottomText,
          stylesConstants.smallText,
          { marginTop: 20 },
        ]}
      ></WhatsappText>
      <FlatList
        data={data}
        renderItem={renderStatusData}
        keyExtractor={keyExtractor}
      ></FlatList>
      <EncryptedText />
      <FloatingButton
        iconName="camera"
        iconPacket="FontAwesome"
      ></FloatingButton>
    </View>
  );
}
