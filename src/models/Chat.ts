export default class {
  id: number;
  contactID: number;
  name: string;
  avatar: any;
  read_status: "read" | "unread";
  last_message_time: string;
  last_message?: string;
  last_message_sender_id?: "MY_ID" | number;
  constructor(
    id: number,
    contactID: number,
    name: string,
    avatar: any,
    read_status: "read" | "unread",
    last_message_time: string,
    last_message?: string,
    last_message_sender_id?: "MY_ID" | number
  ) {
    this.id = id;
    this.contactID = contactID;
    this.name = name;
    this.avatar = avatar;
    this.read_status = read_status;
    this.last_message_time = last_message_time;
    this.last_message = last_message;
    this.last_message_sender_id = last_message_sender_id;
  }
}
