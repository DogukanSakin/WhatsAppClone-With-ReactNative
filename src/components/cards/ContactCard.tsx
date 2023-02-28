import React, { useContext } from "react";
import { View, Image, Pressable } from "react-native";
import Contact from "../../models/Contact";
import themeStyles, { stylesConstants } from "../../constants/styles";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import colors from "../../constants/colors";

interface IProps {
  item: Contact;
  onPress?: () => void;
  showCardText?: boolean;
  overrideStyles?: object;
  showRemoveIcon?: boolean;
}
function ContactCard({
  item,
  onPress,
  showCardText = true,
  showRemoveIcon = false,
  overrideStyles,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;

  return (
    <Pressable
      onPress={onPress}
      style={[stylesConstants.rowContainer, { marginTop: 20 }, overrideStyles]}
    >
      <View>
        <Image
          source={item.avatar}
          style={stylesConstants.cardImageOrIconContainer}
        />
        {item.isSelected === true && (
          <View
            style={[
              themeStyles[currentTheme].cardBottomIconContainer,
              {
                backgroundColor:
                  showRemoveIcon === true
                    ? colors.darkPrimaryComponentColor
                    : colors.greenComponentColor,
              },
            ]}
          >
            {showRemoveIcon === true ? (
              <AntDesign
                name="close"
                size={14}
                color={colors.lightComponentColor}
              />
            ) : (
              <Feather
                name="check"
                size={14}
                color={colors.lightComponentColor}
              />
            )}
          </View>
        )}
      </View>
      {showCardText === true && (
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
      )}
    </Pressable>
  );
}

export default ContactCard;
