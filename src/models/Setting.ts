export default class {
  name: string;
  description?: string;
  iconName?: any;
  iconPack?: string;
  navigationPath?: string;
  header?: string;
  editable?: boolean;
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
      | "MaterialCommunityIcons",
    navigationPath?: string,
    header?: string,
    editable?: boolean
  ) {
    this.name = name;
    this.description = description;
    this.iconName = iconName;
    this.iconPack = iconPack;
    this.navigationPath = navigationPath;
    this.header = header;
    this.editable = editable;
  }
}
