import Contact from "../models/Contact";
export default <Contact[]>[
  new Contact(1, "John Doe", require("../../assets/dummyImages/1.png")),
  new Contact(
    2,
    "Jane Summer",
    require("../../assets/dummyImages/2.png"),
    "Available"
  ),
  new Contact(
    3,
    "Bob Marley",
    require("../../assets/dummyImages/3.png"),
    "Available"
  ),
  new Contact(
    4,
    "Tom Cruise",
    require("../../assets/dummyImages/4.png"),
    "Busy"
  ),
  new Contact(
    5,
    "George Clooney",
    require("../../assets/dummyImages/5.png"),
    "Sleeping"
  ),
  new Contact(
    6,
    "Laura Palmer",
    require("../../assets/dummyImages/6.png"),
    "At the gym"
  ),
  new Contact(7, "Frank Sinatra", require("../../assets/dummyImages/7.png")),
  new Contact(8, "Lara Croft", require("../../assets/dummyImages/8.png")),
  new Contact(
    9,
    "Emely Blunt",
    require("../../assets/dummyImages/9.png"),
    "All is well!!"
  ),
  new Contact(10, "David Beckham", require("../../assets/dummyImages/10.png")),
];
