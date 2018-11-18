import createHashHistory from 'history/createHashHistory';
import { Provider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import 'typeface-roboto';
import App from './App';
import './index.css';
import * as stores from './Stores';
import { routingStore } from './Stores/routingStore';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
const history = syncHistoryWithStore(hashHistory, routingStore);

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);