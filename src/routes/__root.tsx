import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { NavBar } from "../components/NavBar/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link
          to="/lesson/$lessonId"
          params={{ lessonId: "21" }}
          className="[&.active]:font-bold"
        >
          Test Lesson
        </Link>
      </NavBar>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
