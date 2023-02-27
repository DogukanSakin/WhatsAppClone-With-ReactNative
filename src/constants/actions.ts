import Action from "../models/Action";
export const archivedPageActions = <Action[]>[new Action("Archive Settings")];
export const chatsPageActions = <Action[]>[
  new Action("New Group"),
  new Action("New Boardcast"),
  new Action("Linked Devices"),
  new Action("Starred Messages"),
  new Action("Settings"),
];
export const statusPageActions = <Action[]>[
  new Action("Status Privacy"),
  new Action("Settings"),
];
export const callsPageActions = <Action[]>[
  new Action("Clear call log"),
  new Action("Settings"),
];
export const starredMessagesPageActions = <Action[]>[new Action("Unstar all")];
export const messagesPageActions = <Action[]>[
  new Action("View contact"),
  new Action("Media, links, and docs"),
  new Action("Search"),
  new Action("Mute notifications"),
  new Action("Wallpaper"),
  new Action("More"),
];
