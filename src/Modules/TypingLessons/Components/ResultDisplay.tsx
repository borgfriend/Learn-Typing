import * as React from "react";

import { Button } from "../../../components/Button/Button";


export const ResultDisplay: React.FC<{
  mistakes: number;
  time: number;
  resetAction: () => void;
}> = ({ mistakes, time, resetAction }) => {
  return (
    <>
      <ul>
        <li>Mistakes: {mistakes}</li>
        <li>Time: {time}</li>
      </ul>
      <Button onClick={resetAction}>Reset</Button>
    </>
  );
};
