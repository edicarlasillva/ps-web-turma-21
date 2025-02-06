import { useState } from "react";
import { useContact } from "../../contexts/hooks/useContact";

export function ContactList() {
  const { deleteContact, searchContact } = useContact();

  const [query, setQuery] = useState("");

  return (
    <>
      <h2>Pesquisar</h2>

      <input
        type="text"
        placeholder="Pesquisar contato"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {searchContact(query).map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>

            <button onClick={() => deleteContact(contact.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  );
}
