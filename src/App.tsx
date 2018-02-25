import * as React from "react";
import "./styles/App.css";

import { BrowserRouter, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import Results from "./pages/Results";
import Roster from "./pages/Roster";

export default class App extends React.Component {
  render() {
    return (
      <div className="rival-website-app">
        <BrowserRouter>
            <React.Fragment>
                <Route exact={true} path="/" component={Home} />
                <Route path="/results" component={Results} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/results" component={Results} />
                <Route path="/roster" component={Roster} />
            </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

// <Route path="/badgequest" component={BadgeQuest} />
// <Route path="/fiftyplates" component={FiftyPlates} />
