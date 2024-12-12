import * as React from "react";
import lessonData from "../../../src/resources/lessons.json";
import { LessonCard } from "./components/LessonCard";

/**
 * Renders the overview page.
 */
export const Overview: React.FC = () => {
  if (!lessonData || !Array.isArray(lessonData)) {
    return <div>Error loading lessons.</div>;
  }

  const lessonCardComponents = lessonData.map((singleLesson) => (
    <LessonCard key={singleLesson.id} lessonData={singleLesson} />
  ));

  return <div>{lessonCardComponents}</div>;
};
