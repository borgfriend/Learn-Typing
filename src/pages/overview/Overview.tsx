import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import lessonData from "../../resources/lessons.json";

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => (
  <Card>
    <h2>{lesson.title}</h2>
    <p>{lesson.description}</p>
    <Link to={`/lesson${lesson.id}`}>
      <Button>Start Lesson</Button>
    </Link>
  </Card>
);

export const Overview: React.FC = () => {
  const overview = lessonData.map((lesson) => (
    <LessonCard {...{ lesson, key: lesson.id }} />
  ));

  return <div>{overview}</div>;
};
