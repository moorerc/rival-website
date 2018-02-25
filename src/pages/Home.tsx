import * as React from "react";
import "../styles/App.css";

import { Callout, Intent } from "@blueprintjs/core";
import BaseNavBar from "../components/BaseNavBar";

export default class Home extends React.Component {
  render() {
    return (
        <React.Fragment>
            <BaseNavBar />
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
        </React.Fragment>
    );
  }
}
