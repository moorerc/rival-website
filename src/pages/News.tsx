import * as React from "react";
import "../styles/App.css";

import WebNavBar from "../components/navigation/WebNavBar";
import PageBackgroundImage from "../components/basic/PageBackgroundImage";

export default class News extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WebNavBar pageName="news" />
        <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
        <div className="rival-website-app-page">News. Coming Soon.</div>
      </React.Fragment>
    );
  }
}
