import * as React from "react";
import "../styles/App.css";

import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { isMobile } from "react-device-detect";
import SocialMediaLinks from "src/components/basic/SocialMediaLinks";
import MobileNavBar from "src/components/navigation/MobileNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";
import WebNavBar from "../components/navigation/WebNavBar";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {!isMobile && <WebNavBar pageName="home" />}
        <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
        <div
          className={classNames("rival-website-page rival-home-page", {
            "-mobile": isMobile,
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
        Register for our 2023 tryouts!
      </div>
    );
  }

  private navigateToTryoutForm = () => {
    window.open("https://t.co/SSylf2mCHp", "_blank");
  };
}
