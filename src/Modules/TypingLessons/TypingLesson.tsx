import { observer } from "mobx-react";
import * as React from "react";
import { Card } from "../../components/Card/Card";
import { exerciseStore } from "../../Stores/ExerciseStore";
import { Exercise } from "./Components/Exercise";
import { ResultDisplay } from "./Components/ResultDisplay";

interface TypingLessonProps {
  lessonId: string;
}

@observer
export class TypingLesson extends React.Component<TypingLessonProps> {
  render() {
    return (
      <Card>
        {exerciseStore.lessonComplete ? <ResultDisplay /> : <Exercise /> }
      </Card>
    );
  }
}
