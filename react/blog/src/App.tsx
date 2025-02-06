import { RouterProvider } from "react-router-dom";

import { ThemeProviderComponent } from "./contexts/ThemeContext";

import { router } from "./routes";

import GlobalStyles from "./styles/global";

export function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProviderComponent>
  );
}
