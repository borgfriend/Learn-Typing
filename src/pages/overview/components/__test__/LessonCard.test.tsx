import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { LessonCard } from "../LessonCard";
import React from "react";

describe("LessonCard", () => {
  const lessonData = { id: 1, title: "Lesson 1", description: "This is lesson 1" };

  it("renders the lesson title and description", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LessonCard lessonData={lessonData} />
      </MemoryRouter>
    );

    expect(getByText("Lesson 1")).toBeDefined();
    expect(getByText("This is lesson 1")).toBeDefined();
  });

  it("renders a link with the correct href", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <LessonCard lessonData={lessonData} />
      </MemoryRouter>
    );

    const link = getByRole("link", { name: /start lesson lesson 1/i });
    expect(link).toHaveAttribute("href", "/lesson/1");
  });

  it("renders a button with the correct aria-label", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <LessonCard lessonData={lessonData} />
      </MemoryRouter>
    );

    const button = getByRole("button", { name: /Start lesson lesson 1/i });
    expect(button).toBeDefined();
  });
});