import React, { useContext } from "react";
import { View, Image } from "react-native";
import Contact from "../../models/Contact";
import themeStyles, { stylesConstants } from "../../constants/styles";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
interface IProps {
  item: Contact;
}
export default function ContactCard({ item }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  return (
    <View style={[stylesConstants.rowContainer, { marginTop: 20 }]}>
      <Image
        source={item.avatar}
        style={stylesConstants.cardImageOrIconContainer}
      />
      <View style={{ marginLeft: 16, flex: 1, justifyContent: "center" }}>
        <WhatsappText
          fontFamily="bold"
          text={item.name}
          overrideStyles={themeStyles[currentTheme].pageInnerText}
        />
        {item.about && (
          <WhatsappText
            text={item.about}
            overrideStyles={[
              themeStyles[currentTheme].bottomText,
              stylesConstants.middleText,
              { marginTop: 6 },
            ]}
          />
        )}
      </View>
    </View>
  );
}
