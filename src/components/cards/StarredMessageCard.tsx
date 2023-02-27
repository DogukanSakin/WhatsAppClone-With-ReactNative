import React, { useContext } from "react";
import { View, Image, Dimensions } from "react-native";
import Message from "../../models/Message";
import contacts from "../../dummyData/contacts";
import { stylesConstants } from "../../constants/styles";
import Contact from "../../models/Contact";
import WhatsappText from "../texts/WhatsappText";
import colors from "../../constants/colors";
import ThemeContext from "../../context/ThemeContext";
import MessageCard from "./MessageCard";
interface IProps {
  item: Message;
}
export default function StarredMessageCard({ item }: IProps) {
  const { theme } = useContext(ThemeContext);
  const deviceSize = Dimensions.get("window");
  const getMessageSender = () => {
    const sender = contacts.find(
      (contact: Contact) => contact.id === item.senderID
    );
    return sender;
  };
  const sender = getMessageSender();
  return (
    <View style={[stylesConstants.rowAlignContainer, { marginTop: 10 }]}>
      {sender && (
        <>
          <Image
            source={sender?.avatar}
            style={[
              stylesConstants.cardImageOrIconContainer,
              { height: 30, width: 30 },
            ]}
          ></Image>
          <View style={{ marginTop: 10 }}>
            <View
              style={[
                stylesConstants.rowAlignContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <WhatsappText
                text={sender.name + " ▸ You"}
                fontFamily="bold"
                overrideStyles={[
                  stylesConstants.smallText,
                  {
                    marginLeft: 10,
                    color:
                      theme === "dark"
                        ? colors.lightComponentColor
                        : colors.darkPrimaryComponentColor,
                  },
                ]}
              ></WhatsappText>
              <WhatsappText
                text={item.sendDate}
                overrideStyles={[
                  stylesConstants.smallestText,
                  stylesConstants.bottomText,
                ]}
              ></WhatsappText>
            </View>
            <MessageCard
              isMessageStarred
              item={item}
              textOverrideStyles={{
                color:
                  theme === "dark"
                    ? colors.lightComponentColor
                    : colors.darkSecondaryComponentColor,
              }}
              overrideStyles={[
                {
                  borderTopLeftRadius: 0,
                  width: deviceSize.width * 0.8,
                  backgroundColor:
                    theme === "dark"
                      ? colors.darkSecondaryComponentColor
                      : colors.lightComponentColor,
                  marginTop: 6,
                  marginLeft: 10,
                },
              ]}
            />
          </View>
        </>
      )}
    </View>
  );
}
