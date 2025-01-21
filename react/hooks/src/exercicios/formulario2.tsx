import { ChangeEvent, useState } from "react";

interface IFormData {
  name: string;
  email: string;
}

export function App() {
  const [formData, setFormData] = useState<IFormData>({ name: "", email: "" });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <>
      <form>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </form>

      <p>
        Olá, {formData.name}. Seu e-mail é {formData.email}
      </p>
    </>
  );
}
