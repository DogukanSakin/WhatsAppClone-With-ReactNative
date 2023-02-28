import React, { useContext } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import themeStyles, { stylesConstants } from "../../constants/styles";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
import colors from "../../constants/colors";

interface IProps {
  isVisible: boolean;
  onClose: () => void;
  children: any;
  onOK?: () => void;
}
export default function AlertModal({
  isVisible,
  onClose,
  children,
  onOK,
}: IProps) {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      style={stylesConstants.alertModalContainer}
    >
      <View style={themeStyles[currentTheme].alertModalInnerContainer}>
        {children}
        <View
          style={[stylesConstants.rowAlignContainer, { alignSelf: "flex-end" }]}
        >
          <WhatsappText
            onPress={onClose}
            text="Cancel"
            overrideStyles={[
              stylesConstants.smallText,
              {
                marginRight: 20,
                color: colors.greenComponentColor,
              },
            ]}
          ></WhatsappText>
          <WhatsappText
            onPress={onOK}
            text="OK"
            overrideStyles={[
              stylesConstants.smallText,
              { color: colors.greenComponentColor },
            ]}
          ></WhatsappText>
        </View>
      </View>
    </Modal>
  );
}
