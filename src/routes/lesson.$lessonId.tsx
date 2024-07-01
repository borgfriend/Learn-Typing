import { createFileRoute } from "@tanstack/react-router";
import { TypingLesson } from "../pages/exercise/TypingLesson";

export const Route = createFileRoute("/lesson/$lessonId")({
  component: () => <PostComponent />,
});

function PostComponent() {
  const { lessonId } = Route.useParams();
  return <TypingLesson id={lessonId} />;
}
