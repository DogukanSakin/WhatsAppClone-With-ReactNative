import React, { useContext } from "react";
import { View, Image } from "react-native";
import Status from "../../models/Status";
import contacts from "../../dummyData/contacts";
import themeStyles, { stylesConstants } from "../../constants/styles";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
import colors from "../../constants/colors";

interface IProps {
  item: Status;
}
export default function StatusCard({ item }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;

  const contact = contacts.find((c) => {
    return c.id === item.contactID;
  });

  return (
    <View style={[stylesConstants.rowContainer, { marginTop: 20 }]}>
      <Image
        source={contact!!.avatar}
        style={[
          stylesConstants.cardImageOrIconContainer,
          { borderWidth: 3, borderColor: colors.greenComponentColor },
        ]}
      />
      <View style={{ marginLeft: 20 }}>
        <WhatsappText
          text={contact!!.name}
          overrideStyles={themeStyles[currentTheme].pageInnerText}
        ></WhatsappText>
        <WhatsappText
          text={item.time}
          overrideStyles={[
            stylesConstants.bottomText,
            stylesConstants.smallText,
            ,
            { marginTop: 4 },
          ]}
        ></WhatsappText>
      </View>
    </View>
  );
}
