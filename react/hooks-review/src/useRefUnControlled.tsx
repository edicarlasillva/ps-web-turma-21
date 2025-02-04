import { FormEvent, useRef } from "react";

export function App() {
  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const typedName = inputRef.current?.value;
    console.log(typedName);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" ref={inputRef} />
      </div>
      <p>{inputRef.current?.value}</p>
      <button>Enviar</button>
    </form>
  );
}
