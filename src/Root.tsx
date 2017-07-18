import * as React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Results from './pages/Results';
import Roster from './pages/Roster';
import BadgeQuest from './pages/BadgeQuest';

import configureStore from './store/configureStore';
import { INITIAL_STATE } from './constants';

const store = configureStore(INITIAL_STATE);

export class Root extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app-root">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/results" component={Results} />
            <Route path="/roster" component={Roster} />
            <Route path="/badgequest" component={BadgeQuest} />
          </div>
        </Router >
      </Provider>
    );
  }
};