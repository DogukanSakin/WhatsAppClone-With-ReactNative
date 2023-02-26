export default class {
  id: number;
  senderID: number;
  message: string;
  sendDate: string;
  sendTime: string;

  constructor(
    id: number,
    senderID: number,
    message: string,
    sendDate: string,
    sendTime: string
  ) {
    this.id = id;
    this.senderID = senderID;
    this.message = message;
    this.sendDate = sendDate;
    this.sendTime = sendTime;
  }
}
