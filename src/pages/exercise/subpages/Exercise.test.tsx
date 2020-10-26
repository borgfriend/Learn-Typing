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
      lesson={[
        { value: "a", color: "transparent" },
        { value: "b", color: "transparent" },
      ]}
      completeLesson={mockFn}
    ></Exercise>
  );
  expect(container).toMatchSnapshot();

  fireEvent.keyDown(document, { key: "a", code: 56, charCode: 56 });
  fireEvent.keyDown(document.body, { key: "Space", code: 32, charCode: 32 });
  fireEvent.keyDown(document, { key: "Enter", code: 13, charCode: 13 });

  expect(container).toMatchSnapshot();
  expect(mockFn).toHaveBeenCalled();
});
