/// <reference path="./resources/lessons.d.ts" />


import * as React from 'react';
import { routingStore } from '../Stores';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';


const lessonData: Array<Lesson> = require('./resources/lessons.json');

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.SFC<LessonCardProps> = ({ lesson }) => (
  <Card>
    <h2>{lesson.title}</h2>
    <p>{lesson.description}</p>

    <Button
      onClick={() =>
        routingStore.push(`/lesson${lesson.id}`)
      }
    >
      Start Lesson
    </Button>

  </Card>
);

export const Overview: React.SFC = () => {

  const overview = lessonData.map((val) => (
    <div key={val.id}>
      <LessonCard lesson={val} />
    </div>
  ));

  return (
    <div>
      {overview}
    </div>
  );

};