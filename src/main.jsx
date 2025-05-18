import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import FindBook from "./pages/FindBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Books /> },
      {
        path: "/addbook",
        element: <AddBook />,
      },
      {
        path: "/findbook",
        element: <FindBook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
