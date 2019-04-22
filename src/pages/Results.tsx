import * as React from "react";
import "../styles/App.css";
import "../styles/Results.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import * as classNames from "classnames";
import { isMobile } from "react-device-detect";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import MobileResultsBody from "src/components/results/MobileResultsBody";

export default class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-results-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="results" />
          <div className="results-page-body">
            {isMobile ? (
              <MobileResultsBody />
            ) : (
              <NonIdealState
                className="construction-empty-state"
                title="Results. Coming soon."
                icon={IconNames.BUILD}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
