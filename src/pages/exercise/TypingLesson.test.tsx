import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { loadLesson } from "../../resources/loadLesson";
import { TypingLesson } from "./TypingLesson";

it("displays a lesson", () => {
  const history = createMemoryHistory();
  const route = "/lesson21";
  history.push(route);
  window.scrollTo = jest.fn();

  render(
    <Router history={history}>
      <TypingLesson />
    </Router>
  );
  const lesson = loadLesson(21);
  const lessonElement = screen.getByText("fd fd fd");
  expect(lessonElement).toBeInTheDocument();
});
