import { ChangeEvent, useState } from "react";
import { useContact } from "../../contexts/hooks/useContact";

export function ContactForm() {
  const { addContact } = useContact();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleAddContact() {
    if (formData.name && formData.email && formData.phone) {
      addContact(formData.name, formData.email, formData.phone);

      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }

  return (
    <>
      <h1>Adicionar contato</h1>

      <div>
        <input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Digite seu e-mail"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <input
          type="text"
          placeholder="Digite seu telefone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <button onClick={handleAddContact}>Adicionar contato</button>
      </div>
    </>
  );
}
