import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";
import {it, expect,vi } from "vitest"

it("renders a default button", () => {
  const { container } = render(<Button></Button>);
  expect(container.firstChild).toHaveStyle(`background-color: rgb(255, 0 , 0)`);
  expect(container).toMatchSnapshot();
});

it("renders a primary button", () => {
  const { container } = render(<Button color="primary">{"Label"}</Button>);
  expect(container.firstChild).toHaveStyle(`background-color: rgb(0, 0, 255)`);
  expect(container).toMatchSnapshot();
});

it("can interact with the button", () => {
  const mockFn = vi.fn();
  const { container } = render(
    <Button color="primary" onClick={mockFn}>
      {"Label"}
    </Button>
  );

  if (container.firstChild) {
    fireEvent.click(container.firstChild);
  }

  expect(mockFn).toBeCalled();
});
