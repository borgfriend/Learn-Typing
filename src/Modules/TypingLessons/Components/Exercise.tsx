import {  useObserver } from "mobx-react";
import React, {useEffect} from "react";
import { ExerciseChar } from "../../../components/ExerciseChar/ExerciseChar";
import { exerciseStore } from "../../../Stores/ExerciseStore";

export const Exercise: React.FC = () => {

  const handleKeyPress = (e: KeyboardEvent) => {
    let { currentIndex, processPressedKey: pressedKey } = exerciseStore;
    if (e.key === "Space" && e.target === document.body) {
      e.preventDefault();
    }
  
    if (currentIndex === exerciseStore.lesson.lesson.length) {
      exerciseStore.endLesson();
      return;
    }
  
    if (e.key === "Enter") {
      pressedKey("\n");
    } else {
      pressedKey(e.key);
    }
  
    if (currentIndex === 1) {
      exerciseStore.startLesson();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    exerciseStore.setExercise();

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  },[]);

  return useObserver(()=>{
    const text = exerciseStore.exerciseFields.map((item, key) => (
      <ExerciseChar
        key={key}
        data={item}
        isCurrent={key === exerciseStore.currentIndex}
      />
    ));

    return <section>{text}</section>;
  });
}
