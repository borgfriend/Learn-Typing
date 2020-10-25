import { render } from "@testing-library/react";
import React from "react";
import { NavBar } from "./NavBar";

it("renders a default button", () => {
  const { container } = render(<NavBar></NavBar>);
  expect(container).toMatchSnapshot();
});
