import React, { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Exercise } from "./Components/Exercise";
import { ResultDisplay } from "./Components/ResultDisplay";

export interface LessonStats {
  mistakes: number;
  time: number;
}

export const TypingLesson: React.FC<{ lesson: CharField[] }> = ({ lesson }) => {
  const [isComplete, setComplete] = useState<boolean>(false);
  const [lessonStats, setLessonStats] = useState<LessonStats>({ mistakes: 0, time: 0 });

  const resetAction = () => setComplete(false);
  const completeLesson = (stats: LessonStats) => {
    setLessonStats(stats);
    setComplete(true);
  };

  return (
    <Card>
      {isComplete ? (
        <ResultDisplay {...{ resetAction, lessonStats }} />
      ) : (
        <Exercise {...{ lesson, completeLesson }} />
      )}
    </Card>
  );
};
