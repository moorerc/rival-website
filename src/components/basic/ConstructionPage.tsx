import * as React from "react";
import "../../styles/App.css";

import { Callout, Intent } from "@blueprintjs/core";
import { isMobile, isBrowser } from "react-device-detect";
import * as classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import PageBackgroundImage from "./PageBackgroundImage";

export default class ConstructionPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
        <div
          className={classNames("rival-website-page rival-home-page", {
            "-mobile": isMobile
          })}
        >
          {this.renderConstructionCallout()}
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
