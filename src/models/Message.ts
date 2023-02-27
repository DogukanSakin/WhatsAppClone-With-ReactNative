export default class {
  id: number;
  senderID: number | "MY_ID";
  receiverID: number | "MY_ID";
  message: string;
  sendDate: string;
  sendTime: string;
  chatID?: number;
  constructor(
    id: number,
    senderID: number | "MY_ID",
    receiverID: number | "MY_ID",
    message: string,
    sendDate: string,
    sendTime: string,
    chatID?: number
  ) {
    this.id = id;
    this.senderID = senderID;
    this.receiverID = receiverID;
    this.message = message;
    this.sendDate = sendDate;
    this.sendTime = sendTime;
    this.chatID = chatID;
  }
}
