import contacts from "../dummyData/contacts";
import Contact from "../models/Contact";
import Status from "../models/Status";
export default function searchWithContactID(data: any, searchValue: string) {
  const filteredData = data.filter((chat: Status) => {
    const contact: Contact | undefined = contacts.find((contact: Contact) => {
      return contact.id === chat.contactID;
    });
    if (contact) {
      return contact.name.toLowerCase().includes(searchValue.toLowerCase());
    }
  });
  return filteredData;
}
