import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../src/components/Button/Button";
import { Card } from "../../../src/components/Card/Card";
import lessonData from "../../../src/resources/lessons.json";

interface Lesson {
  id: number;
  title: string;
  description: string;
}

interface LessonCardProps {
  lesson: Lesson;
}

/**
 * Renders a card component for a lesson.
 *
 * @param {LessonCardProps} props - The props for the LessonCard component.
 * @param {Lesson} props.lesson - The lesson object containing the lesson details.
 * @returns {JSX.Element} The rendered LessonCard component.
 */
const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => (
  <Card>
    <h2>{lesson.title}</h2>
    <p>{lesson.description}</p>
    <Link to={`/lesson/${lesson.id}`}>
      <Button>Start Lesson</Button>
    </Link>
  </Card>
);

/**
 * Renders the overview page.
 *
 * @returns {JSX.Element} The rendered Overview component.
 */
export const Overview: React.FC = () => {
  const lessonCardComponents = lessonData.map((singleLesson) => (
    <LessonCard {...{ lesson: singleLesson, key: singleLesson.id }} />
  ));

  return <div>{lessonCardComponents}</div>;
};
