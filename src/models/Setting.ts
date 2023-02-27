export default class {
  name: string;
  description?: string;
  iconName?: any;
  iconPack?: string;
  constructor(
    name: string,
    description?: string,
    iconName?: any,
    iconPack?:
      | "Entypo"
      | "MaterialIcons"
      | "Fontisto"
      | "Ionicons"
      | "FontAwesome5"
  ) {
    this.name = name;
    this.description = description;
    this.iconName = iconName;
    this.iconPack = iconPack;
  }
}
