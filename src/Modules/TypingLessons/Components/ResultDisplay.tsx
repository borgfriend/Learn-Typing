import * as React from "react";

import { Button } from "../../../components/Button/Button";
import { LessonStats } from "../TypingLesson";

export const ResultDisplay: React.FC<{
  lessonStats: LessonStats;
  resetAction: () => void;
}> = ({ lessonStats, resetAction }) => {
  const { mistakes, time } = lessonStats;
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
