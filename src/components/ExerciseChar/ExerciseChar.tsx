import * as React from "react";
import styled, { keyframes } from "styled-components";

const cursorBlink = keyframes`
    0% {
      background-color: yellow;
    }
    100% {
      background-color: transparent;
    }
`;

 const StyledExerciseChar = styled.span`
  font-family: 'Courier New'
`;

const CharOk = styled(StyledExerciseChar)`
    background-color: lightgreen;
`

const CharError = styled(StyledExerciseChar)`
    background-color: red;
`

const CurrentChar = styled(StyledExerciseChar)`
    background-color: yellow;
    animation-name: ${cursorBlink};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
interface IExerciseChar {
  data: CharField;
  isCurrent: boolean;
}

export const ExerciseChar: React.FC<IExerciseChar> = ({ data, isCurrent }) => {
  let displayChar = <>{data.value}</>;
  if (data.value === "\n"){
      displayChar = (
        <span>
          <br />
        </span>
      )
  }
  if (isCurrent){
      return <CurrentChar>{displayChar}</CurrentChar>
  }
  if (data.color === "ok"){
            return <CharOk>{displayChar}</CharOk>

  }
    if (data.color === "error"){
            return <CharError>{displayChar}</CharError>

  }
  return (
    <StyledExerciseChar>
      {displayChar}
    </StyledExerciseChar>
  );
};
