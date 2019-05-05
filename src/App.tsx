import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About";
import BadgeQuest from "./pages/BadgeQuest";
import FiftyPlates from "./pages/FiftyPlates";
import Home from "./pages/Home";
import { News } from "./pages/News";
import { Results } from "./pages/Results";
import { Roster } from "./pages/Roster";
import "./styles/App.css";
import * as classNames from "classnames";

export default class App extends React.Component {
  render() {
    // const isSidebarVisible = true;

    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-app", {
            // "-sidebar-visible": isSidebarVisible
          })}
        >
          <BrowserRouter>
            <React.Fragment>
              <Route exact={true} path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/news" component={News} />
              <Route path="/results" component={Results} />
              {/* <Route path="/roster" render={props => <Roster {...props} />} /> */}
              <Route path="/roster" component={Roster} />
              <Route path="/badgequest" component={BadgeQuest} />
              <Route path="/fiftyplates" component={FiftyPlates} />
            </React.Fragment>
          </BrowserRouter>
        </div>
        {/* <div className="rival-app-page-sidebar"></div> */}
      </React.Fragment>
    );
  }
}
