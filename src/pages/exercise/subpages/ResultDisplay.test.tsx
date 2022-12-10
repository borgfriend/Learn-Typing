import { fireEvent, render } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { i18n } from "../../../i18n/en";
import { ResultDisplay } from "./ResultDisplay";

it("renders a default button", () => {
  const mockFn = vi.fn();
  const { container, getByText } = render(
    <ResultDisplay
      lessonStats={{ mistakes: 0, time: 0 }}
      resetAction={mockFn}
    ></ResultDisplay>
  );
  expect(container).toMatchSnapshot();
  const resetButton = getByText(i18n.Reset);
  fireEvent.click(resetButton);
  expect(mockFn).toHaveBeenCalled();
});
