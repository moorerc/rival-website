import * as React from "react";
import "../styles/App.css";

import BaseNavBar from "../components/BaseNavBar";
import PageBackgroundImage from "../components/PageBackgroundImage";

export default class Roster extends React.Component {
  render() {
    return (
        <React.Fragment>
            <BaseNavBar pageName="roster" />
            <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
            <div className="rival-website-app-page">
                Roster. Coming Soon.
            </div>
        </React.Fragment>
    );
  }
}
