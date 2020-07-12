import lessonData from "./lessons.json";

export interface CharField {
  value: string;
  color: "ok" | "error" | "transparent";
}
export const loadLesson = (id: number) => {
  const lesson = lessonData.find((val: Lesson) => {
    return val.id === id;
  });
  const exerciseFields: CharField[] = [];
  lesson.lesson.split("").forEach((item) => {
    exerciseFields.push({ value: item, color: "transparent" });
  });
  return exerciseFields;
};
