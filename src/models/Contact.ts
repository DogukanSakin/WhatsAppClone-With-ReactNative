export default class {
  id: number;
  name: string;
  avatar: any;
  about?: string;
  isSelected?: boolean;
  constructor(
    id: number,
    name: string,
    avatar: any,
    about?: string,
    isSelected?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.about = about;
    this.avatar = avatar;
    this.isSelected = isSelected;
  }
}
