// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App';  // make sure the path is correct


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
