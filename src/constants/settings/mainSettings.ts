import Setting from "../../models/Setting";
export default <Setting[]>[
  new Setting("Account", "Security and privacy settings", "key", "Entypo"),
  new Setting(
    "Privaciy",
    "Block contacts, disappering messages",
    "lock",
    "MaterialIcons"
  ),
  new Setting("Avatar", "Create, edit, profile photo", "persons", "Fontisto"),
  new Setting(
    "Chats",
    "Theme, wallpapers, chat history",
    "chat",
    "MaterialIcons",
    "ChatSettings"
  ),
  new Setting(
    "Notifications",
    "Message, group & call tones",
    "notifications",
    "Ionicons"
  ),
  new Setting(
    "Storage and data",
    "Network usage, auto-download",
    "data-usage",
    "MaterialIcons"
  ),
  new Setting("App language", "English", "language", "MaterialIcons"),
  new Setting(
    "Help",
    "Help center, contact us, privacy policy",
    "help-outline",
    "MaterialIcons"
  ),
  new Setting("Invite a friend", "", "user-friends", "FontAwesome5"),
];
