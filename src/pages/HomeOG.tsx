import * as React from "react";
import "../styles/App.css";

import WebNavBar from "../components/navigation/WebNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";
import { isMobile } from "react-device-detect";
import MobileNavBar from "src/components/navigation/MobileNavBar";
import classNames from "classnames";
import SocialMediaLinks from "src/components/basic/SocialMediaLinks";
import { Classes } from "@blueprintjs/core";

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
          {this.renderTryoutsCallout()}
          {isMobile ? (
            <MobileNavBar pageName="home" />
          ) : (
            <SocialMediaLinks gold={false} large={true} hoverable={true} />
          )}
        </div>
      </React.Fragment>
    );
  }

  private renderTryoutsCallout() {
    return (
      <div
        className={classNames("home-callout", Classes.ELEVATION_3)}
        onClick={this.navigateToTryoutForm}
      >
        Register for our 2022 tryouts!
      </div>
    );
  }

  private navigateToTryoutForm = () => {
    window.open("https://forms.gle/4P7GR3F1Cd3yhLPv9", "_blank");
  };
}
