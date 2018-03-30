import * as React from 'react';
import { Route } from 'react-router-dom';

import Overview from './Modules/Overview';
import { AppBar, Typography, Toolbar, Grid, Paper } from 'material-ui';
import { routingStore } from './Stores';
import { TypingLesson } from './Modules/TypingLessons/TypingLesson';

const Navigation: React.SFC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="title"
        color="inherit"
        onClick={() =>
          routingStore.push(`/`)
        }
      >
        Learn Typing
      </Typography>
    </Toolbar>
  </AppBar>
);

class App extends React.Component<{}, {}> {
  render() {
    return (
      <>
        <Navigation />
        <div style={{ padding: '1rem' }}>
          <Grid container={true} justify="center" >
            <Grid item={true} xs={8}>
              <Route exact={true} path="/" component={Overview} />
              <Route
                path="/lesson:id"
                render={({ match }) => (
                  <Paper elevation={4} style={{ padding: '1rem' }}>
                    <TypingLesson lessonId={match.params.id} />
                  </Paper>)}
              />
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default App;
