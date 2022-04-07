import React from "react";
import { BrowserRouter as Router, Link, Outlet, Route, Routes } from "react-router-dom";
import i18n from "../src/i18n/en.json";
import { NavBar } from "./components/NavBar/NavBar";
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Overview />} />
        <Route path="lesson:id" element={<TypingLesson />} />
      </Route>
    </Routes>
  );
};

export default App;
