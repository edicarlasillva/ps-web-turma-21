import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [text, setText] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setText("Hello");
  }

  return (
    <>
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <p>Você digitou: {text}</p>

        <button onClick={handleSubmit}>Trocar</button>
      </form>
    </>
  );
}
