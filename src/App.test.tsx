import { render, screen } from "@testing-library/react";
import React from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router";
import i18n from "../src/i18n/en.json";
import App from "./App";



it("contains the app title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleElement = screen.getByText(i18n.APP_TITLE);
  expect(titleElement).toBeInTheDocument();
});
