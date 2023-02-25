import Action from "../models/Action";
export const archivedPageActions = <Action[]>[new Action("Archive Settings")];
export const chatsPageActions = <Action[]>[
  new Action("New Group"),
  new Action("New Boardcast"),
  new Action("Linked Devices"),
  new Action("Starred messages"),
  new Action("Settings"),
];
export const statusPageActions = <Action[]>[
  new Action("Status privacy"),
  new Action("Settings"),
];
export const callsPageActions = <Action[]>[
  new Action("Clear call log"),
  new Action("Settings"),
];
