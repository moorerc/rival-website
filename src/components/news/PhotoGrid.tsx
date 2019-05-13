import * as React from "react";
import "../../styles/PhotoGrid.css";

import * as _ from "lodash";

export namespace PhotoGrid {
  export interface Props {
    imageA: string;
    imageB: string;
    imageC: string;
    imageD: string;
    imageE: string;
    imageF: string;
    imageG: string;
  }
}

export default class PhotoGrid extends React.Component<PhotoGrid.Props> {
  render() {
    const {
      imageA,
      imageB,
      imageC,
      imageD,
      imageE,
      imageF,
      imageG
    } = this.props;

    return (
      <div className="photo-grid">
        <div className="row -one">
          <div className="col -oneA">
            <div
              className="photo-grid-pic"
              style={{
                backgroundImage: "url(" + imageA + ")"
              }}
            />
          </div>
          <div className="col -oneB">
            <div className="row -oneB1">
              <div
                className="photo-grid-pic"
                style={{ backgroundImage: "url(" + imageB + ")" }}
              />
            </div>
            <div className="row -oneB2">
              <div
                className="photo-grid-pic"
                style={{ backgroundImage: "url(" + imageC + ")" }}
              />
            </div>
          </div>
        </div>
        <div className="row -two">
          <div className="col -twoA">
            <div
              className="photo-grid-pic"
              style={{ backgroundImage: "url(" + imageD + ")" }}
            />
          </div>
          <div className="col -twoB">
            <div
              className="photo-grid-pic"
              style={{ backgroundImage: "url(" + imageE + ")" }}
            />
          </div>
        </div>
        <div className="row -three">
          <div className="col -threeA">
            <div
              className="photo-grid-pic"
              style={{ backgroundImage: "url(" + imageF + ")" }}
            />
          </div>
          <div className="col -threeB">
            <div
              className="photo-grid-pic"
              style={{ backgroundImage: "url(" + imageG + ")" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
