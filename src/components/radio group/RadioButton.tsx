import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import RadioItemSetting from "../../models/RadioItemSetting";
import { stylesConstants } from "../../constants/styles";
import colors from "../../constants/colors";
import WhatsappText from "../texts/WhatsappText";
import ThemeContext from "../../context/ThemeContext";
interface IProps {
  item: RadioItemSetting;
  selected?: RadioItemSetting;
  onSelected(item: RadioItemSetting): void;
}
function RadioButton({ item, selected, onSelected }: IProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[stylesConstants.rowAlignContainer, { marginBottom: 20 }]}
      onPress={() => onSelected(item)}
    >
      <View
        style={[
          stylesConstants.radioButton,
          {
            borderColor:
              selected?.id === item.id
                ? colors.greenComponentColor
                : colors.darkPrimaryComponentColor,
          },
        ]}
      >
        {selected?.id === item.id && (
          <View style={stylesConstants.radioButtonSelected} />
        )}
      </View>
      <WhatsappText
        text={item.name}
        overrideStyles={[
          stylesConstants.middleText,
          {
            color:
              theme === "dark"
                ? colors.lightComponentColor
                : colors.darkSecondaryComponentColor,
            marginLeft: 30,
          },
        ]}
      />
    </TouchableOpacity>
  );
}
//check props same

function areEqual(prevProps: IProps, nextProps: IProps) {
  return prevProps.selected?.id === nextProps.selected?.id;
}
export default React.memo(RadioButton, areEqual);
