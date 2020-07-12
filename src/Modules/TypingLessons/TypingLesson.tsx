import React from "react";
import { Card } from "../../components/Card/Card";
import { Exercise } from "./Components/Exercise";
import { ResultDisplay } from "./Components/ResultDisplay";
import { useSelector } from "react-redux";
import { ExerciseData, CharField } from "../../Stores/ExerciseStore";

export const TypingLesson: React.FC<{ lesson: CharField[] }> = ({ lesson }) => {
  const lessonComplete = useSelector(
    (state: ExerciseData) => state.lessonComplete
  );
  return <Card>{lessonComplete ? <ResultDisplay /> : <Exercise lesson={lesson}/>}</Card>;
};
