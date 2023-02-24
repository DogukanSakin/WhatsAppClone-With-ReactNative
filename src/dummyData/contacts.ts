import Contact from "../models/Contact";
export default <Contact[]>[
  new Contact("John Doe", require("../../assets/dummyImages/1.png")),
  new Contact(
    "Jane Summer",
    require("../../assets/dummyImages/2.png"),
    "Available"
  ),
  new Contact(
    "Bob Marley",
    require("../../assets/dummyImages/3.png"),
    "Available"
  ),
  new Contact("Tom Cruise", require("../../assets/dummyImages/4.png"), "Busy"),
  new Contact(
    "George Clooney",
    require("../../assets/dummyImages/5.png"),
    "Sleeping"
  ),
  new Contact(
    "Laura Palmer",
    require("../../assets/dummyImages/6.png"),
    "At the gym"
  ),
  new Contact("Frank Sinatra", require("../../assets/dummyImages/7.png")),
  new Contact("Lara Croft", require("../../assets/dummyImages/8.png")),
  new Contact(
    "Emely Blunt",
    require("../../assets/dummyImages/9.png"),
    "All is well!!"
  ),
  new Contact("David Beckham", require("../../assets/dummyImages/10.png")),
];
