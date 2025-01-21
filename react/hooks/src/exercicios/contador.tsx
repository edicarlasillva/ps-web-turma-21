import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);
  // const posicao1 = count[0]
  // const posicao2 = count[1]

  // function handleIncrementCount() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <h1>Você clicou {count} vezes o botão</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
