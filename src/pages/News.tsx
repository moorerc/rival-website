import * as React from "react";
import "../styles/App.css";
import "../styles/News.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import { isMobile } from "react-device-detect";
import * as classNames from "classnames";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export default class News extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-news-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="news" />
          <div className="news-page-body">
            <NonIdealState
              className="construction-empty-state"
              title="News. Coming soon."
              icon={IconNames.BUILD}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
