import Contador from "../Contador/Contador";
import InputComponent from "../InputComponent/InputComponent.jsx";
import App from "../App";
import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="contador" element={<Contador />}/>
      <Route path="inputs" element={<InputComponent />}/>
    </Route>
  )
);
