import { useObserver } from "mobx-react";
import React from "react";
import { Card } from "../../components/Card/Card";
import { exerciseStore } from "../../Stores/ExerciseStore";
import { Exercise } from "./Components/Exercise";
import { ResultDisplay } from "./Components/ResultDisplay";

export const TypingLesson: React.FC = () => useObserver(() => (
  <Card>
    {exerciseStore.lessonComplete ? <ResultDisplay /> : <Exercise />}
  </Card>
))
