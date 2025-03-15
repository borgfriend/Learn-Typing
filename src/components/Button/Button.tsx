import React from "react";
import styled from "styled-components";

type colors = "default" | "primary";

const StyledButton = styled.button`
  background: red;
  color: white;
  padding: 0.5rem 0.75rem;
  font-weight: bold;
  cursor: pointer;
`;
const PrimaryButton = styled(StyledButton)`
  background: blue;
`;

interface IButtonProps {
	onClick?: () => void;
	color?: colors;
	children?: React.ReactNode;
}
/**
 * A Button Component
 * A button executes
 * @param props
 */
export const Button: React.FC<IButtonProps> = ({
	onClick,
	children,
	color = "default",
}) => {
	const buttonTypes = {
		default: StyledButton,
		primary: PrimaryButton,
	};
	const DisplayButton = buttonTypes[color];
	return <DisplayButton onClick={onClick}>{children}</DisplayButton>;
};
