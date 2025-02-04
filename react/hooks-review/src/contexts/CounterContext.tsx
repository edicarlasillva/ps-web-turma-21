import { createContext, ReactNode, useState } from "react";

interface ICounterContext {
  count: number;
  increment: () => void;
}

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterContext = createContext<ICounterContext | undefined>(
  undefined
);

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
