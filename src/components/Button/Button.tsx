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
const StyledDefaultButton = styled(StyledButton)`
  background: blue;
`;

interface IButtonProps {
  onClick?: () => void;
  color?: colors;
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
    if (color === "default"){
        return (<StyledDefaultButton onClick={onClick}>{children}</StyledDefaultButton>)
    } else {
        return (<StyledButton onClick={onClick}>{children}</StyledButton>)
    }
};
