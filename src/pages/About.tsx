import * as React from "react";
import "../styles/App.css";
import "../styles/About.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import { isMobile } from "react-device-detect";
import * as classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";
import { NonIdealState } from "@blueprintjs/core";
import MobileAboutUsBody from "src/components/aboutus/MobileAboutUsBody";

export default class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-about-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="about" />
          <div className="about-page-body">
            {isMobile ? (
              this.renderMobileBody()
            ) : (
              <NonIdealState
                className="construction-empty-state"
                title="About Us. Coming soon."
                icon={IconNames.BUILD}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private renderMobileBody = () => {
    return <MobileAboutUsBody />;
  };
}
