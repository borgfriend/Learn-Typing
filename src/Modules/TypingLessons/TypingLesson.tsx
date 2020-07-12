import React from "react";
import { Card } from "../../components/Card/Card";
import { Exercise } from "./Components/Exercise";
import { ResultDisplay } from "./Components/ResultDisplay";

export const TypingLesson: React.FC<{ lesson: CharField[] }> = ({ lesson }) => {
  const [isComplete, setComplete] = React.useState(false);
  const [lessonStats, setLessonStats] = React.useState({mistakes: 0, time: 0})

  const resetAction = () => setComplete(false);
  const completeLesson = (stats: {mistakes: number, time: number})=> {
    setLessonStats(stats);
    setComplete(true);
  }

  return (
    <Card>
      {isComplete ? (
        <ResultDisplay
          {...lessonStats}
          resetAction={resetAction}
        />
      ) : (
        <Exercise {...{lesson, completeLesson}} />
      )}
    </Card>
  );
};
