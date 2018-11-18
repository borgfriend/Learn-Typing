import { Button, Navbar } from '@blueprintjs/core';
import { inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Overview } from './Modules/Overview';
import { TypingLesson } from './Modules/TypingLessons/TypingLesson';

@inject("routingStore")
class Navigation extends React.Component<{ routingStore?: RouterStore }>{
  render() {
    return (
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>
            Learn Typing
          </Navbar.Heading>
          <Button minimal={true} icon="home" onClick={this.goHome}>Home</Button>
        </Navbar.Group>
      </Navbar>
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
