import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { Exercise } from "./subpages/Exercise";
import { ResultDisplay } from "./subpages/ResultDisplay";
import { useParams } from "react-router";
import { loadLesson } from "../../resources/loadLesson";

export interface LessonStats {
  mistakes: number;
  time: number;
}

export const TypingLesson: React.FC = () => {
  const [isComplete, setComplete] = useState<boolean>(false);
  const [lessonStats, setLessonStats] = useState<LessonStats>({
    mistakes: 0,
    time: 0,
  });
  const { id='' } = useParams<{id: string}>();
  const lessonId = parseInt(id, 10);
  const lesson = loadLesson(lessonId);

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
