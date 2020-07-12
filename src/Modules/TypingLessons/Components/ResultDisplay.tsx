import * as React from "react";

import { Button } from "../../../components/Button/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateMistakes,
  calculateTime,
  ExerciseData,
  reset
} from "../../../Stores/ExerciseStore";

export const ResultDisplay: React.FC = () => {
  const { mistakes, time } = useSelector((state: ExerciseData) => {
    return {
      mistakes: calculateMistakes(state),
      time: calculateTime(state)
    };
  });
  const dispatch = useDispatch();
  const resetHandler = () => dispatch(reset());
  return (
    <>
      <ul>
        <li>Mistakes: {mistakes}</li>
        <li>Time: {time}</li>
      </ul>
      <Button onClick={resetHandler}>Reset</Button>
    </>
  );
};
