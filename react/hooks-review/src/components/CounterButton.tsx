import { useCounter } from "../contexts/hooks/useCounter";

export function CounterButton() {
  const { increment } = useCounter();

  return (
    <>
      <h2>Counter Button</h2>

      <button onClick={increment}>Incrementar</button>
    </>
  );
}
