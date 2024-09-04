import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import App from "./App";
import i18n from "./i18n/en.json";

import { expect, it } from "vitest";

it("contains the app title", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleElement = screen.getByText(i18n.APP_TITLE);
  expect(titleElement).toBeInTheDocument();
});
