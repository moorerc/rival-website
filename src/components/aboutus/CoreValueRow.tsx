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
            className="explanation-container"
            style={{
              color: coreValue.color,
              borderColor: coreValue.color
            }}
          >
            {coreValue.explanation}
          </div>
          <div
            className="image"
            style={{
              // backgroundImage: `linear-gradient(${coreValue.color +
              //   "50"}, ${coreValue.color +
              //   "50"}), filter(url(/img/core-values/${coreValue.name.toLowerCase()}.jpg), grayscale(100%))`
              backgroundImage: `url(/img/core-values/${coreValue.name.toLowerCase()}.jpg)`
              // backgroundColor: "white",
              // backgroundBlendMode: "multiply, lumniosity"
            }}
          />
          <div className="image-overlay" />
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
        <div
          className="image"
          style={{
            backgroundImage:
              "url(/img/core-values/" + coreValue.name.toLowerCase() + ".jpg)",
            backgroundColor: coreValue.color + "30"
          }}
        />
        <div
          className="explanation-container"
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
