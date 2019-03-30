import * as React from "react";
import "../styles/App.css";

import BaseNavBar from "../components/basic/BaseNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";

export default class About extends React.Component {
  render() {
    return (
        <React.Fragment>
            <BaseNavBar pageName="about" />
            <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
            <div className="rival-website-app-page">
                About us. Coming Soon.
            </div>
        </React.Fragment>
    );
  }
}
