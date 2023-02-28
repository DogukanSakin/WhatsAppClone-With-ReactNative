import React, { useContext } from "react";
import { View, Image } from "react-native";
import Call from "../../models/Call";
import { stylesConstants } from "../../constants/styles";
import contacts from "../../dummyData/contacts";
import Contact from "../../models/Contact";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
import colors from "../../constants/colors";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";

interface IProps {
  item: Call;
}
export default function CallCard({ item }: IProps) {
  const { theme } = useContext(ThemeContext);
  const contact = contacts.find((c: Contact) => {
    return c.id === item.contactID;
  });
  return (
    <View style={[stylesConstants.rowAlignContainer, { marginTop: 30 }]}>
      <Image
        source={contact!!.avatar}
        style={stylesConstants.cardImageOrIconContainer}
      />
      <View
        style={[
          stylesConstants.rowSpaceBetweenContainer,
          { marginLeft: 20, flex: 1 },
        ]}
      >
        <View>
          <WhatsappText
            fontFamily="bold"
            text={contact!!.name}
            overrideStyles={[
              stylesConstants.smallText,
              {
                color:
                  theme === "dark"
                    ? colors.lightComponentColor
                    : colors.darkSecondaryComponentColor,
              },
            ]}
          ></WhatsappText>
          <View style={stylesConstants.rowAlignContainer}>
            {item.type === "incoming" ? (
              <Feather
                name="arrow-down-left"
                size={16}
                color={
                  item.status === "answered"
                    ? colors.greenComponentColor
                    : "red"
                }
              />
            ) : (
              <Feather
                name="arrow-up-right"
                size={16}
                color={
                  item.status === "answered"
                    ? colors.greenComponentColor
                    : "red"
                }
              />
            )}
            <WhatsappText
              text={item.date + ", " + item.time}
              overrideStyles={[
                stylesConstants.bottomText,
                stylesConstants.smallestText,
              ]}
            ></WhatsappText>
          </View>
        </View>
        {item.isVideoCall === true ? (
          <Ionicons
            name="ios-videocam"
            size={24}
            color={colors.greenComponentColor}
          />
        ) : (
          <MaterialIcons
            name="call"
            size={24}
            color={colors.greenComponentColor}
          />
        )}
      </View>
    </View>
  );
}
