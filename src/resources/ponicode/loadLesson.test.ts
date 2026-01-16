import { describe, expect, test } from "vitest";
import * as loadLesson from "../loadLesson";

// @ponicode
describe("loadLesson.loadLesson", () => {
	test("0", () => {
		const result = loadLesson.loadLesson(0);
		expect(result).toMatchSnapshot();
	});

	test("1", () => {
		const result = loadLesson.loadLesson(-5.48);
		expect(result).toMatchSnapshot();
	});

	test("2", () => {
		const result = loadLesson.loadLesson(100);
		expect(result).toMatchSnapshot();
	});

	test("3", () => {
		const result = loadLesson.loadLesson(-100);
		expect(result).toMatchSnapshot();
	});

	test("4", () => {
		const result = loadLesson.loadLesson(Number.NEGATIVE_INFINITY);
		expect(result).toMatchSnapshot();
	});

	test("5", () => {
		const result = loadLesson.loadLesson(1);
		expect(result).toMatchSnapshot();
	});

	test("6", () => {
		const result = loadLesson.loadLesson(Number.POSITIVE_INFINITY);
		expect(result).toMatchSnapshot();
	});
});
