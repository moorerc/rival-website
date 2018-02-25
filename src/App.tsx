import * as React from "react";
import "./App.css";

import { Callout, Intent } from "@blueprintjs/core";

class App extends React.Component {
  render() {
    return (
      <div className="rival-website-app">
        <div className="rival-website-app-home-bgimage" />
        <div className="rival-website-app-page">
            <div className="rival-website-app-home-main-content">
                <div className="logo-image" />
                <Callout
                    className="construction-callout"
                    title="Website Under Construction"
                    intent={Intent.WARNING}
                    icon={"build"}
                >
                    Website under construction Feb. 2018 - check back soon for updates!
                </Callout>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
