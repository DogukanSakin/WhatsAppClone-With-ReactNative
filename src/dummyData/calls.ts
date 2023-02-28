import Call from "../models/Call";

export default <Call[]>[
  new Call(1, 1, "2020-01-01", "12:00", "incoming", "answered", false),
  new Call(2, 1, "2020-03-01", "17:22", "outgoing", "missed", true),
  new Call(3, 4, "2020-03-06", "17:22", "incoming", "answered", false),
  new Call(4, 2, "2020-03-06", "18:34", "outgoing", "missed", false),
  new Call(5, 3, "2020-03-06", "20:31", "incoming", "answered", true),
  new Call(6, 7, "2020-03-10", "12:12", "outgoing", "answered", false),
];
