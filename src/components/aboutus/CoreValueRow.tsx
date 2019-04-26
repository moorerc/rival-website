import * as React from "react";
import "../../styles/CoreValueRow.css";

import * as _ from "lodash";
import { CoreValue } from "src/data/CoreValues";

interface CoreValueRowProps {
  coreValue: CoreValue;
  reverse: boolean;
}

export default class CoreValueRow extends React.Component<CoreValueRowProps> {
  render() {
    const { coreValue, reverse } = this.props;
    if (reverse) {
      return (
        <div className="core-value-row">
          <div
            className="explanation-container bp3-elevation-2"
            style={{
              color: coreValue.color,
              borderColor: coreValue.color
            }}
          >
            {coreValue.explanation}
          </div>
          <div className="image-container">
            <div
              className="image"
              style={{
                backgroundImage: `url(/img/core-values/${coreValue.name.toLowerCase()}.jpg)`
              }}
            />
            <div
              className="image-overlay"
              style={{
                backgroundImage: `linear-gradient(${coreValue.color +
                  "50"}, ${coreValue.color + "50"})`
              }}
            />
          </div>
          <div
            className="symbol"
            style={{
              color: coreValue.color,
              borderColor: coreValue.color,
              backgroundColor: coreValue.color + "30"
            }}
          >
            <div className="-letter -reverse">
              {coreValue.name.toUpperCase()}
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="core-value-row">
        <div
          className="symbol"
          style={{
            color: coreValue.color,
            borderColor: coreValue.color,
            backgroundColor: coreValue.color + "30"
          }}
        >
          <div className="-letter">{coreValue.name.toUpperCase()}</div>
        </div>
        <div className="image-container">
          <div
            className="image"
            style={{
              backgroundImage: `url(/img/core-values/${coreValue.name.toLowerCase()}.jpg)`
            }}
          />
          <div
            className="image-overlay"
            style={{
              backgroundImage: `linear-gradient(${coreValue.color +
                "70"}, ${coreValue.color + "70"})`
            }}
          />
        </div>
        <div
          className="explanation-container bp3-elevation-2"
          style={{
            color: coreValue.color,
            borderColor: coreValue.color
          }}
        >
          {coreValue.explanation}
        </div>
      </div>
    );
  }
}
