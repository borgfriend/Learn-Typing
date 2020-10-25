import { render } from "@testing-library/react";
import React from "react";
import { Card } from "./Card";

it("renders a default button", () => {
  const { container } = render(<Card></Card>);
  expect(container).toMatchSnapshot();
});
