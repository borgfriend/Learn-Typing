import * as React from "react";

import { Button } from "../../../components/Button/Button";
import { i18n } from "../../../i18n/en";
import { LessonStats } from "../TypingLesson";

export const ResultDisplay: React.FC<{
  lessonStats: LessonStats;
  resetAction: () => void;
}> = ({ lessonStats, resetAction }) => {
  const { mistakes, time } = lessonStats;
  return (
    <>
      <ul>
        <li>{i18n.Mistakes}: {mistakes}</li>
        <li>{i18n.Time}: {time}</li>
      </ul>
      <Button onClick={resetAction}>{i18n.Reset}</Button>
    </>
  );
};
