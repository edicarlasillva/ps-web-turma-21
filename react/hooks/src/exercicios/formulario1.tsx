import { ChangeEvent, useState } from "react";

export function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  return (
    <>
      <form>
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="email" value={email} onChange={handleEmailChange} />
      </form>

      <p>
        Olá, {name}. Seu e-mail é {email}
      </p>
    </>
  );
}
