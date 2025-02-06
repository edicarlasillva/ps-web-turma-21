import { RouterProvider } from "react-router-dom";

import { ContactProvider } from "./contexts/ContactContext";
import { router } from "./routes";

export function App() {
  return (
    <ContactProvider>
      <RouterProvider router={router} />
    </ContactProvider>
  );
}
