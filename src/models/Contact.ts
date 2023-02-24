export default class {
  name: string;
  avatar: any;
  about?: string;

  constructor(name: string, avatar: any, about?: string) {
    this.name = name;
    this.about = about;
    this.avatar = avatar;
  }
}
