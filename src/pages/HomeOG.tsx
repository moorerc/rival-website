import * as React from "react";
import "../styles/App.css";

import WebNavBar from "../components/navigation/WebNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";
import { isMobile } from "react-device-detect";
import MobileNavBar from "src/components/navigation/MobileNavBar";
import * as classNames from "classnames";
import SocialMediaLinks from "src/components/basic/SocialMediaLinks";

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
          {isMobile ? (
            <MobileNavBar pageName="home" />
          ) : (
            <SocialMediaLinks gold={false} large={true} hoverable={true} />
          )}
        </div>
      </React.Fragment>
    );
  }
}
