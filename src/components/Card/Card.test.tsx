import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { Card } from "./Card";

it("renders a default button", () => {
	const { container } = render(<Card />);
	expect(container).toMatchSnapshot();
});
