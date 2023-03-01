import Setting from "../../models/Setting";

export default <Setting[]>[
  new Setting(
    "Dogukan Sakin",
    "This is not your username or pin. This name will be visible to WhatsApp",
    "user-alt",
    "FontAwesome5",
    "",
    "Name",
    true
  ),
  new Setting("o7", "", "info-outline", "MaterialIcons", "", "About", true),
  new Setting("+00 000 000 000", "", "call", "MaterialIcons", "", "Phone"),
];
