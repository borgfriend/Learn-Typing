import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it, vi } from "vitest";
import App from "../../App";
it("displays a lesson", async () => {
  //@ts-ignore
  window.scrollTo = vi.fn();

  render(
    <MemoryRouter initialEntries={[{ pathname: "/lesson21" }]}>
      <App />
    </MemoryRouter>
  );

  const lessonElements = await screen.findAllByText("f");
  expect(lessonElements.length).toBe(3);
});
