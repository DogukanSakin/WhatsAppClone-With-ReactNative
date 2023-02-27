import Message from "../models/Message";

export default <Message[]>[
  new Message(1, 1, "MY_ID", "Hello, how are you?", "Today", "12:00", 1),
  new Message(2, "MY_ID", 1, "I'm fine, thank you!", "Today", "12:01", 1),
  new Message(3, 1, "MY_ID", "Nice to hear that!", "Today", "12:02", 1),
];
