import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import BadgeQuest from "./pages/BadgeQuest";
import FiftyPlates from "./pages/FiftyPlates";
import HomeOG from "./pages/HomeOG";
import { News } from "./pages/News";
import { Results } from "./pages/Results";
import { Roster } from "./pages/Roster";
import { RosterNineteen } from "./pages/RosterNineteen";
import "./styles/App.css";
import CoreValues from "./pages/CoreValues";

export default class App extends React.Component {
  render() {
    return (
        <div
          className="rival-website-app"
        >
          <BrowserRouter>
              <Route exact={true} path="/" component={HomeOG} />
              <Route path="/about" component={About} />
              <Route path="/news" component={News} />
              <Route path="/results" component={Results} />
              <Route path="/roster" component={Roster} />
              <Route path="/badgequest" component={BadgeQuest} />
              <Route path="/fiftyplates" component={FiftyPlates} />
              <Route path="/corevalues" component={CoreValues} />
              <Route path="/roster2019" component={RosterNineteen} />
          </BrowserRouter>
        </div>
    );
  }
}
