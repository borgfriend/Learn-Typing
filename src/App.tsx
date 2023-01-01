import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { NavBar } from "../src/components/NavBar/NavBar";
import i18n from "../src/i18n/en.json";
import { TypingLesson } from "./pages/exercise/TypingLesson";
import { Overview } from "./pages/overview/Overview";

const Navigation: React.FC = () => (
  <>
    <NavBar>
      <Link to="/">
        <h1>{i18n.APP_TITLE}</h1>
      </Link>
    </NavBar>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      { path: "/", element: <Overview /> },
      { path: "lesson/:id", element: <TypingLesson /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
