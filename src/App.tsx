import { inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Overview } from './Modules/Overview';
import { TypingLesson } from './Modules/TypingLessons/TypingLesson';
import { NavBar } from './components/NavBar/NavBar';

@inject("routingStore")
class Navigation extends React.Component<{ routingStore?: RouterStore }>{
  render() {
    return (
      <NavBar>
        <h1 onClick={this.goHome}>Learn Typing</h1>
      </NavBar>
    );
  }

  private goHome = () => {
    this.props.routingStore!.push(`/`);
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
