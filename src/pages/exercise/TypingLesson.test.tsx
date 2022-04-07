import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { loadLesson } from "../../resources/loadLesson";
import { TypingLesson } from "./TypingLesson";

it("displays a lesson", () => {
  const route = "/lesson21";

  window.scrollTo = jest.fn();

  render(
    <MemoryRouter initialEntries={[route]}>
      <TypingLesson />
    </MemoryRouter>
  );
  loadLesson(21);
  const lessonElement = screen.getByText("fd fd fd");
  expect(lessonElement).toBeInTheDocument();
});
