import * as React from "react";
import "../styles/App.css";
import "../styles/Home.css";

import { Callout, Intent } from "@blueprintjs/core";
import { isMobile, isBrowser } from "react-device-detect";
import * as classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import MobileHomeBody from "src/components/home/MobileHomeBody";
import SocialMediaLinks from "src/components/basic/SocialMediaLinks";

export default class Home extends React.Component {
  render() {
    return (
      <div
        className={classNames("rival-website-page rival-home-page", {
          "-mobile": isMobile
        })}
      >
        <CombinedNavBar pageName="home" />
        <div className="home-page-body">
          {isMobile
            ? this.renderHomePageBodyMobile()
            : this.renderHomePageBodyWeb()}
        </div>
      </div>
    );
  }

  private renderHomePageBodyMobile() {
    return <MobileHomeBody />;
  }

  private renderHomePageBodyWeb() {
    return (
      <React.Fragment>
        {this.renderConstructionCallout()}
        <SocialMediaLinks gold={false} />
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
