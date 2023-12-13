import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export const API_URL = "http://www.omdbapi.com?apikey=17a4411b";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
