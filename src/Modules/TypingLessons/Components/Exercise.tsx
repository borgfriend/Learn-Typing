import React, { useEffect } from "react";
import { ExerciseChar } from "../../../components/ExerciseChar/ExerciseChar";
import { useDispatch, useSelector } from "react-redux";
import {
  endLesson,
  startLesson,
  ExerciseData,
  processPressedKey
} from "../../../Stores/ExerciseStore";
import { store } from "../../../Stores/store";

export const Exercise: React.FC = () => {
  const dispatch = useDispatch();

  const { lesson, currentIndex, exerciseFields } = useSelector(
    (state: ExerciseData) => state
  );
  const isLastIndex = currentIndex === lesson.lesson.length

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const { currentIndex } = store.getState();
      if (e.key === "Space" && e.target === document.body) {
        e.preventDefault();
      }

      if (isLastIndex) {
        dispatch(endLesson());
        return;
      }

      if (e.key === "Enter") {
        dispatch(processPressedKey("\n"));
      } else {
        dispatch(processPressedKey(e.key));
      }

      if (currentIndex === 1) {
        dispatch(startLesson());
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch, isLastIndex]);

  const text = exerciseFields.map((item, key) => (
    <ExerciseChar key={key} data={item} isCurrent={key === currentIndex} />
  ));

  return <section>{text}</section>;
};
