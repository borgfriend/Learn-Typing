import * as React from "react";
import { Link, Route } from "react-router-dom";
import i18n from "../src/i18n/en.json";
import { NavBar } from "./components/NavBar/NavBar";
import { Overview } from "./Modules/Overview";
import { TypingLesson } from "./Modules/TypingLessons/TypingLesson";
import { useDispatch } from "react-redux";
import { setExercise } from "./Stores/ExerciseStore";

const Navigation: React.FC = () => (
  <NavBar>
    <Link to="/">
      <h1>{i18n.APP_TITLE}</h1>
    </Link>
  </NavBar>
);

const App: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <Navigation />
      <Route exact={true} path="/" component={Overview} />
      <Route
        path="/lesson:id"
        render={({ match }) => {
          window.scrollTo(0, 0);
          dispatch(setExercise(match.params.id));
          return <TypingLesson />;
        }}
      />
    </main>
  );
};

export default App;
