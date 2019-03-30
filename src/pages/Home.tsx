import * as React from "react";
import "../styles/App.css";

import { Callout, Intent } from "@blueprintjs/core";
import WebNavBar from "../components/navigation/WebNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";
import { isMobile, isBrowser } from "react-device-detect";
import MobileNavBar from "src/components/navigation/MobileNavBar";
import * as classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!isMobile && <WebNavBar pageName="home" />}
        <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
        <div
          className={classNames("rival-website-page rival-home-page", {
            "-mobile": isMobile
          })}
        >
          <div className="logo-image" />
          {this.renderConstructionCallout()}
          {isMobile && <MobileNavBar pageName="home" />}
        </div>
      </React.Fragment>
    );
  }

  private renderConstructionCallout() {
    return (
      <Callout
        className="construction-callout"
        title="Website Under Construction"
        intent={Intent.WARNING}
        icon={isBrowser ? IconNames.BUILD : null}
      >
        Website construction in progress - check back soon for updates!
      </Callout>
    );
  }
}
