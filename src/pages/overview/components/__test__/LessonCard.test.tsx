import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { LessonCard } from "../LessonCard";

describe("LessonCard", () => {
	const lessonData = {
		id: 1,
		title: "Lesson 1",
		description: "This is lesson 1",
	};

	it("renders the lesson title and description", () => {
		const { getByText } = render(
			<MemoryRouter>
				<LessonCard lessonData={lessonData} />
			</MemoryRouter>,
		);

		expect(getByText("Lesson 1")).toBeDefined();
		expect(getByText("This is lesson 1")).toBeDefined();
	});

	it("renders a link with the correct href", () => {
		const { getByRole } = render(
			<MemoryRouter>
				<LessonCard lessonData={lessonData} />
			</MemoryRouter>,
		);

		const link = getByRole("link", { name: "Start Lesson" });
		expect(link).toHaveAttribute("href", "/lesson/1");
	});

	it("renders a button with the correct aria-label", () => {
		const { getByRole } = render(
			<MemoryRouter>
				<LessonCard lessonData={lessonData} />
			</MemoryRouter>,
		);

		const button = getByRole("button", { name: "Start Lesson" });
		expect(button).toBeDefined();
	});
});
