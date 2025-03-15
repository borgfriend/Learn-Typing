import type * as React from "react";
import styled, { keyframes } from "styled-components";

const cursorBlink = keyframes`
    0% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
`;

export const StyledExerciseChar = styled.span`
  font-family: "Courier New";
`;

const CharOk = styled(StyledExerciseChar)`
  background-color: lightgreen;
`;

const CharError = styled(StyledExerciseChar)`
  background-color: red;
`;

const CurrentChar = styled(StyledExerciseChar)`
  background-color: yellow;
  animation-name: ${cursorBlink};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;

interface IExerciseChar {
	data: CharField;
	isCurrent: boolean;
}

export const ExerciseChar: React.FC<IExerciseChar> = ({ data, isCurrent }) => {
	let displayChar = <>{data.value}</>;
	if (data.value === "\n") {
		displayChar = (
			<span>
				<br />
			</span>
		);
	}
	const displayMap = {
		ok: CharOk,
		error: CharError,
		current: CurrentChar,
		transparent: StyledExerciseChar,
	};
	const displayType = isCurrent ? "current" : data.color;
	const DisplayElement = displayMap[displayType];

	return <DisplayElement>{displayChar}</DisplayElement>;
};
