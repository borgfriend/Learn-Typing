import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { Exercise } from "./Exercise";

it("renders an empty exercise", () => {
  const mockFn = jest.fn();
  const { container } = render(
    <Exercise lesson={[]} completeLesson={mockFn}></Exercise>
  );
  expect(container).toMatchSnapshot();
});

it("renders an exercise", () => {
  const mockFn = jest.fn();
  const { container } = render(
    <Exercise
      lesson={[{ value: "a", color: "transparent" }]}
      completeLesson={mockFn}
    ></Exercise>
  );
  expect(container).toMatchSnapshot();
  fireEvent.keyPress(document, {target: { keyValue: "a" }});  
  expect(mockFn).toHaveBeenCalled();
});
