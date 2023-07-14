import ReactDOM from "react-dom/client";
import React from "react";
import {router} from "./routes/routesApp";

import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
