import * as React from "react";
import { Link, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import i18n from "../src/i18n/en.json";
import { NavBar } from "./components/NavBar/NavBar";

import { Overview } from "./pages/overview/Overview";
import { TypingLesson } from "./pages/exercise/TypingLesson";

const Navigation: React.FC = () => (
  <NavBar>
    <Link to="/">
      <h1>{i18n.APP_TITLE}</h1>
    </Link>
  </NavBar>
);

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />

      <Route exact={true} path="/" component={Overview} />
      <Route path="/lesson:id" component={TypingLesson} />
    </Router>
  );
};

export default App;
