import Chat from "../models/Chat";

export default <Chat[]>[
  new Chat(
    1,
    1,
    "John Doe",
    require("../../assets/dummyImages/1.png"),
    "read",
    "14:26",
    "Nice to hear that!"
  ),
  new Chat(
    2,
    2,
    "Jane Summer",
    require("../../assets/dummyImages/2.png"),
    "unread",
    "12:23",
    "Where are you?"
  ),
  new Chat(
    3,
    3,
    "Bob Marley",
    require("../../assets/dummyImages/3.png"),
    "unread",
    "2/19/23"
  ),
  new Chat(
    4,
    4,
    "Tom Cruise",
    require("../../assets/dummyImages/4.png"),
    "unread",
    "2/15/23",
    "Okey then, see you later"
  ),
  new Chat(
    5,
    5,
    "George Clooney",
    require("../../assets/dummyImages/5.png"),
    "unread",
    "2/11/23",
    "No, I'm not",
    "MY_ID"
  ),
  new Chat(
    6,
    6,
    "Laura Palmer",
    require("../../assets/dummyImages/6.png"),
    "read",
    "2/7/23",
    "Bye",
    "MY_ID"
  ),
  new Chat(
    7,
    7,
    "Frank Sinatra",
    require("../../assets/dummyImages/7.png"),
    "read",
    "2/5/23",
    "Thank you",
    "MY_ID"
  ),
  new Chat(
    8,
    8,
    "Lara Croft",
    require("../../assets/dummyImages/8.png"),
    "read",
    "2/1/23",
    "Good bye!",
    "MY_ID"
  ),
  new Chat(
    9,
    9,
    "Emely Blunt",
    require("../../assets/dummyImages/9.png"),
    "read",
    "1/26/23",
    "See you later"
  ),
  new Chat(
    10,
    10,
    "David Beckham",
    require("../../assets/dummyImages/10.png"),
    "read",
    "1/24/23",
    "Okey bro!",
    "MY_ID"
  ),
];
