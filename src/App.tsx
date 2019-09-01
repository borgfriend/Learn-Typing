import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Overview } from './Modules/Overview';
import { TypingLesson } from './Modules/TypingLessons/TypingLesson';
import { NavBar } from './components/NavBar/NavBar';


class Navigation extends React.Component {
  render() {
    return (
      <NavBar>
        <Link to="/"><h1>Learn Typing</h1></Link>
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
          render={({ match }) => (
            <TypingLesson lessonId={match.params.id} />
          )}
        />
      </>
    );
  }
}

export default App;
