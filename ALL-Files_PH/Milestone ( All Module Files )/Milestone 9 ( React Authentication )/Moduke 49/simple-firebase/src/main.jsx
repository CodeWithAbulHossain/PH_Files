import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Main from "./Layout/Main";
import Login from "./componnents/Login/Login";
import Home from "./componnents/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
