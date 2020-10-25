import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

it("renders a default button", () => {
  const { container } = render(<Button></Button>);
  expect(container.firstChild).toHaveStyle(`background-color: red`);
  expect(container).toMatchSnapshot();
});

it("renders a primary button", () => {
  const { container } = render(<Button color="primary">{"Label"}</Button>);
  expect(container.firstChild).toHaveStyle(`background-color: blue`);
  expect(container).toMatchSnapshot();
});

it("can interact with the button", () => {
  const mockFn = jest.fn();
  const { container } = render(
    <Button color="primary" onClick={mockFn}>
      {"Label"}
    </Button>
  );
  fireEvent.click(container.firstChild as Element);
  expect(mockFn).toBeCalled();
});
