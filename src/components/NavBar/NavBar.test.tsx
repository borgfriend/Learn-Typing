import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { NavBar } from "./NavBar";
it("renders a default button", () => {
  const { container } = render(<NavBar></NavBar>);
  expect(container).toMatchSnapshot();
});
