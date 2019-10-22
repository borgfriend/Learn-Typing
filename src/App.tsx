import * as React from "react";
import { Link, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Overview } from "./Modules/Overview";
import { TypingLesson } from "./Modules/TypingLessons/TypingLesson";
import { exerciseStore } from "./Stores/ExerciseStore";

class Navigation extends React.Component {
  render() {
    return (
      <NavBar>
        <Link to="/">
          <h1>Learn Typing</h1>
        </Link>
      </NavBar>
    );
  }
}

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navigation />
        <Route exact={true} path="/" component={Overview} />
        <Route
          path="/lesson:id"
          render={({ match }) => {
            window.scrollTo(0, 0);
            exerciseStore.lessonId = match.params.id;
            return <TypingLesson lessonId={match.params.id} />;
          }}
          
        />
      </>
    );
  }
}

export default App;
