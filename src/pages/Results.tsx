import * as React from "react";
import "../styles/App.css";

import PageBackgroundImage from "../components/basic/PageBackgroundImage";
import CombinedNavBar from "src/components/navigation/CombinedNavBar";

export default class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CombinedNavBar pageName="results" />
        <PageBackgroundImage backgroundImage="/img/background-imgs/homebg.jpg" />
        <div className="rival-website-app-page">Results. Coming Soon.</div>
      </React.Fragment>
    );
  }
}
