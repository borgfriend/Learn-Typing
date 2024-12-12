import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";

/**
 * Props for the LessonCard component.
 * 
 * @interface LessonCardProps
 * @property {Lesson} lessonData - The data for the lesson, including id, title, and description.
 */
interface LessonCardProps {
  lessonData: Lesson;
}

/**
 * A functional component that renders a card for a lesson.
 * 
 * @component
 * @param {LessonCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered LessonCard component.
 * 
 * @example
 * <LessonCard lessonData={{ id: 1, title: "Lesson 1", description: "This is lesson 1" }} />
 */
const LessonCardComponent: React.FC<LessonCardProps> = ({ lessonData: { id, title, description } }) => (
  <Card>
    <h2>{title}</h2>
    <p>{description}</p>
    <Link to={`/lesson/${id}`}>
      <Button aria-label={`Start lesson ${title}`}>Start Lesson</Button>
    </Link>
  </Card>
);

export const LessonCard = React.memo(LessonCardComponent);
