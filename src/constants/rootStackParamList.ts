import Chat from "../models/Chat";
export type RootStackParamList = {
  MaterialTopRouter: undefined;
  Archived: undefined;
  SelectContact: { headerText: string };
  Chats: undefined;
  LinkedDevices: undefined;
  StarredMessages: undefined;
  Messages: { chat: Chat };
};
