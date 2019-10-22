/// <reference path="./../resources/lessons.d.ts" />
import { observer } from 'mobx-react';
import * as React from 'react';
import { Card } from '../../components/Card/Card';
import { Exercise } from './Components/Exercise';
import { ResultDisplay } from './Components/ResultDisplay';
import { exerciseStore } from './Stores/ExerciseStore';
import lessonData from './../resources/lessons.json';

interface TypingLessonProps {
  lessonId: string;
}

@observer
export class TypingLesson extends React.Component<TypingLessonProps> {

  componentWillMount() {
    let lesson = lessonData.find((val: Lesson) => {
      return val.id.toString() === this.props.lessonId;
    });
    exerciseStore.text = lesson.lesson;

    window.scrollTo(0, 0);
  }

  render() {
    if (exerciseStore.lessonComplete) {
      return (
        <Card>
          <ResultDisplay />
        </Card>
      );
    } else {
      return (
        <Card>
          <Exercise />
        </Card>
      );
    }

  }
}