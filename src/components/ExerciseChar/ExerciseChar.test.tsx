import { render } from "@testing-library/react";
import React from "react";
import { ExerciseChar } from "./ExerciseChar";

it("renders default as transparent", () => {
  const { container } = render(
    <ExerciseChar
      data={{ color: "transparent", value: "a" }}
      isCurrent={false}
    ></ExerciseChar>
  );

  expect(container.firstChild).toHaveStyle(`background-color: rgba(0, 0, 0, 0)`);
});

it("renders ok green", () => {
  const { container } = render(
    <ExerciseChar
      data={{ color: "ok", value: "a" }}
      isCurrent={false}
    ></ExerciseChar>
  );

  expect(container.firstChild).toHaveStyle(
    `background-color: rgb(144, 238, 144)`
  );
});

it("renders error red", () => {
  const { container } = render(
    <ExerciseChar
      data={{ color: "error", value: "a" }}
      isCurrent={false}
    ></ExerciseChar>
  );

  expect(container.firstChild).toHaveStyle(`background-color: rgb(255,0,0)`);
});

it("renders current yellow", () => {
  const { container } = render(
    <ExerciseChar
      data={{ color: "ok", value: "a" }}
      isCurrent={true}
    ></ExerciseChar>
  );

  expect(container.firstChild).toHaveStyle(`background-color: rgb(255,255,0)`);
});

it("renders converts enter into break yellow", () => {
  const { container } = render(
    <ExerciseChar
      data={{ color: "transparent", value: "\n" }}
      isCurrent={true}
    ></ExerciseChar>
  );

  expect(container.firstChild).toHaveStyle(`background-color: rgb(255,255,0)`);
  expect(container.querySelector("br")).toBeDefined();
});
