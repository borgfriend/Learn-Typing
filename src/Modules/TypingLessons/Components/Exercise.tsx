import React, { useEffect } from "react";
import { ExerciseChar } from "../../../components/ExerciseChar/ExerciseChar";
import { useDispatch } from "react-redux";
import {
  endLesson,
  startLesson,
  CharField
} from "../../../Stores/ExerciseStore";

export const Exercise: React.FC<{lesson: CharField[]}> = ({lesson =[]}) => {
  const dispatch = useDispatch();
  const [exerciseFields, setExerciseFields] = React.useState(lesson);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const isLastIndex = currentIndex === exerciseFields.length

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Space" && e.target === document.body) {
        e.preventDefault();
      }

      if (isLastIndex) {
        dispatch(endLesson({mistakeCount: calculateMistakes(exerciseFields)}));
        return;
      }
      const keyValue =(e.key === "Enter") ? "\n" : e.key;

      const newExerciseFields = [...exerciseFields];
      const field = exerciseFields[currentIndex]
      newExerciseFields[currentIndex] = {
        color: (field.value === keyValue) ? "ok" : "error",
        value: field.value,
      }
      setExerciseFields(newExerciseFields)
      setCurrentIndex(currentIndex+1)

      if (currentIndex === 1) {
        dispatch(startLesson());
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch, isLastIndex, exerciseFields, currentIndex]);

  const text = exerciseFields.map((item, key) => (
    <ExerciseChar key={key} data={item} isCurrent={key === currentIndex} />
  ));

  return <section>{text}</section>;
};

const calculateMistakes = (lesson: CharField[]) => {
  return lesson.filter((val) => val.color === "error").length;
};
