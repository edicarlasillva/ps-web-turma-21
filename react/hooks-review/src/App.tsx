import { Dashboard } from "./components/Dashboard";
import { CounterProvider } from "./contexts/CounterContext";

export function App() {
  return (
    <CounterProvider>
      <h1>Problemática das props</h1>

      <Dashboard />
    </CounterProvider>
  );
}
