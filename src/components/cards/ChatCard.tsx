import React, { useContext } from "react";
import { View, Image } from "react-native";
import styles from "../../constants/styles";
import ThemeContext from "../../context/ThemeContext";
import WhatsappText from "../texts/WhatsappText";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import Chat from "../../models/Chat";
interface IProps {
  item: Chat;
}
export default function ChatCard({ item }: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  return (
    <View style={[styles[currentTheme].rowContainer, { marginTop: 20 }]}>
      <Image
        source={item.avatar}
        style={styles[currentTheme].cardImageOrIconContainer}
      />
      <View style={{ marginLeft: 16, flex: 1 }}>
        <WhatsappText
          fontFamily="bold"
          text={item.name}
          overrideStyles={styles[currentTheme].pageInnerText}
        />
        <View style={styles[currentTheme].rowAlignContainer}>
          {item.last_message_sender_id === "MY_ID" && (
            <Ionicons
              style={{ marginRight: 4 }}
              name="checkmark-done-outline"
              size={20}
              color={
                item.read_status === "read"
                  ? "#8feeff"
                  : colors.darkPrimaryComponentColor
              }
            />
          )}
          {item.last_message ? (
            <WhatsappText
              text={item.last_message}
              overrideStyles={[
                styles[currentTheme].bottomText,
                styles[currentTheme].middleText,
                { marginTop: 6 },
              ]}
            />
          ) : (
            <>
              <MaterialCommunityIcons
                style={{ marginRight: 4 }}
                name="circle-off-outline"
                size={18}
                color={colors.darkPrimaryComponentColor}
              />
              <WhatsappText
                text="This message was deleted."
                overrideStyles={[
                  styles[currentTheme].bottomText,
                  styles[currentTheme].middleText,
                  { marginTop: 6, fontStyle: "italic" },
                ]}
              />
            </>
          )}
        </View>
      </View>
      <WhatsappText
        text={item.last_message_time}
        overrideStyles={[
          styles[currentTheme].bottomText,
          styles[currentTheme].smallText,
        ]}
      />
    </View>
  );
}
