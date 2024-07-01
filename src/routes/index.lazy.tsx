import { createLazyFileRoute } from "@tanstack/react-router";
import { Overview } from "../pages/overview/Overview";

export const Route = createLazyFileRoute("/")({
  component: () => <Overview />,
});
