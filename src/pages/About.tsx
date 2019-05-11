import * as React from "react";
import "../styles/App.css";
import "../styles/About.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import { isMobile } from "react-device-detect";
import * as classNames from "classnames";
import MobileAboutUsBody from "src/components/aboutus/MobileAboutUsBody";
import AboutUsBody from "src/components/aboutus/AboutUsBody";

export default class About extends React.Component {
  render() {
    return (
      <div
        className={classNames("rival-website-page rival-about-page", {
          "-mobile": isMobile
        })}
      >
        <CombinedNavBar pageName="about" />
        <div className="about-page-body">
          {isMobile ? this.renderMobileBody() : <AboutUsBody />}
        </div>
      </div>
    );
  }

  private renderMobileBody = () => {
    return <MobileAboutUsBody />;
  };
}
