import { ChangeEvent, FormEvent, useState } from "react";

interface ISubmissions {
  firstName: string;
  lastName: string;
  email: string;
}

export function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submissions, setSubmissions] = useState<ISubmissions[]>([]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmissions((prevState) => [...prevState, formData]);

    setFormData({ firstName: "", lastName: "", email: "" });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nome:</label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor="">Sobrenome</label>
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor="">E-mail</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <br />

        <button>Enviar</button>
      </form>

      <h2>Envios</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.email}>
            {submission.firstName} {submission.lastName} ({submission.email})
          </li>
        ))}
      </ul>
    </>
  );
}
