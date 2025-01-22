import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { router } from "./routes";
import themes from "./themes";

import GlobalStyles from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
