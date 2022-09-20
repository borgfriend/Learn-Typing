import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import React from 'react'

it("displays a lesson", async () => {
  window.scrollTo = jest.fn();

  render(
    <MemoryRouter initialEntries={[{ pathname: "/lesson21" }]}>
      <App />
    </MemoryRouter>
  );

  const lessonElements = await screen.findAllByText("f");
  expect(lessonElements.length).toBe(3);
});
