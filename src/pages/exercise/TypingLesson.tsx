import React, { useEffect, useState } from "react";
import { Card } from "../../../src/components/Card/Card";
import { loadLesson } from "../../../src/resources/loadLesson";
import { Exercise } from "./subpages/Exercise";
import { ResultDisplay } from "./subpages/ResultDisplay";

export interface LessonStats {
  mistakes: number;
  time: number;
}

export const TypingLesson: React.FC<{ id: string }> = ({ id }) => {
  const [isComplete, setComplete] = useState<boolean>(false);
  const [lessonStats, setLessonStats] = useState<LessonStats>({
    mistakes: 0,
    time: 0,
  });

  const lessonId = parseInt(id, 10);
  const lesson = loadLesson(lessonId);
  console.log({ lesson, id });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
