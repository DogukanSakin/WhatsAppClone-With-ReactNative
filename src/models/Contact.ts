export default class {
  id: number;
  name: string;
  avatar: any;
  about?: string;
  isSelected?: boolean;
  lastSeen?: string;
  constructor(
    id: number,
    name: string,
    avatar: any,
    about?: string,
    isSelected?: boolean,
    lastSeen?: string
  ) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.avatar = avatar;
    this.isSelected = isSelected;
    this.lastSeen = lastSeen;
  }
}
