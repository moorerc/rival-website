import * as React from "react";
import "../../styles/SSSBody.css";

import * as _ from "lodash";
import "../../styles/SSSRules.css";
import { SSS_RULES } from "src/data/sss/SSS";
import classNames from "classnames";
import { isMobile } from "react-device-detect";

export namespace SSSRules {
  export interface Props {}

  export interface State {}
}

export default class SSSRules extends React.Component<
  SSSRules.Props,
  SSSRules.State
> {
  state: SSSRules.State = {
    selectedShow: undefined
  };

  render() {
    return (
      <div
        className={classNames("sss-rules", {
          "-mobile": isMobile
        })}
      >
        <div className="rules-body">
          {SSS_RULES.map(rule => (
            <div className="rule-container" key={rule.rule}>
              <div className="rule-image-container">
                <img className="rule-image" src={rule.image} />
              </div>
              <div className="rule-text">
                {rule.heading && (
                  <div className="rule-header">{rule.heading}</div>
                )}
                <div className="rule-description">{rule.rule}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
