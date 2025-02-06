import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface IContactContext {
  contacts: IContact[];
  addContact: (name: string, email: string, phone: string) => void;
  deleteContact: (id: string) => void;
  searchContact: (query: string) => IContact[];
}

interface ContactProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext<IContactContext | undefined>(
  undefined
);

export function ContactProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storageContacts = localStorage.getItem("contactsList");
    return storageContacts ? JSON.parse(storageContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  // adiciona um contato
  const addContact = useCallback(
    (name: string, email: string, phone: string) => {
      setContacts((prevState) => [
        ...prevState,
        {
          id: uuid(),
          name,
          email,
          phone,
        },
      ]);
    },
    []
  );

  // exclui um contato
  const deleteContact = useCallback((id: string) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  }, []);

  // perquisa contato
  const searchContact = useCallback(
    (query: string) => {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    [contacts]
  );

  const ContactContextValue = {
    contacts,
    addContact,
    deleteContact,
    searchContact,
  };

  return (
    <ContactContext.Provider value={ContactContextValue}>
      {children}
    </ContactContext.Provider>
  );
}
