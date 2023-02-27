import React from "react";
import { View, FlatList } from "react-native";
import RadioButton from "./RadioButton";
import RadioItemSetting from "../../models/RadioItemSetting";
interface IProps {
  items: RadioItemSetting[];
  selected?: RadioItemSetting;
  onSelected(item: RadioItemSetting): void;
}
export default function RadioGroup({ items, selected, onSelected }: IProps) {
  const renderItem = ({ item }: { item: RadioItemSetting }) => (
    <RadioButton item={item} selected={selected} onSelected={onSelected} />
  );
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
