import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { AddNewContact } from "../pages/AddNewContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/novo-contato",
    element: <AddNewContact />,
  },
]);
