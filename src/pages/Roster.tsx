import * as React from "react";
import "../styles/App.css";
import "../styles/Roster.css";

import BaseNavBar from "../components/BaseNavBar";
// import PageBackgroundImage from "../components/PageBackgroundImage";

export default class Roster extends React.Component {
  render() {
    return (
        <React.Fragment>
            {/* <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" /> */}
            <div className="rival-website-app-page rival-roster-page">
                <BaseNavBar pageName="roster" />
                <div className="roster-page-header">
                    Rival 2018
                </div>
                <div className="roster-page-body" />
            </div>
        </React.Fragment>
    );
  }
}
