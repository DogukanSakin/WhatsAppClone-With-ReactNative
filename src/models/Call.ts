export default class {
  id: number;
  contactID: number;
  date: string;
  time: string;
  type: string;
  status: string;
  isVideoCall: boolean;
  constructor(
    id: number,
    contactID: number,
    date: string,
    time: string,
    type: "incoming" | "outgoing",
    status: "missed" | "answered",
    isVideoCall: boolean
  ) {
    this.id = id;
    this.contactID = contactID;
    this.date = date;
    this.time = time;
    this.type = type;
    this.status = status;
    this.isVideoCall = isVideoCall;
  }
}
