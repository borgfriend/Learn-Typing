import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw Error("Container not found");

const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
