import * as React from "react";
import "../../styles/Home.css";
import "../../styles/MobileHomeBody.css";

import * as _ from "lodash";

export default class MobileHomeBody extends React.Component<{}> {
  render() {
    return (
      <div className="mobile-home-body">
        <div className="row -one">
          <div className="col -oneA">
            <div
              className="mobile-home-page-pic"
              style={{ backgroundImage: "url(/img/homepage/harley.jpg)" }}
            />
          </div>
          <div className="col -oneB">
            <div className="row -oneB1">
              <div
                className="mobile-home-page-pic"
                style={{ backgroundImage: "url(/img/homepage/sara.jpg)" }}
              />
            </div>
            <div className="row -oneB2">
              <div
                className="mobile-home-page-pic"
                style={{ backgroundImage: "url(/img/homepage/gryffindor.jpg)" }}
              />
            </div>
          </div>
        </div>
        <div className="row -two">
          <div className="col -twoA">
            <div
              className="mobile-home-page-pic"
              style={{ backgroundImage: "url(/img/homepage/dance.jpg)" }}
            />
          </div>
          <div className="col -twoB">
            <div
              className="mobile-home-page-pic"
              style={{ backgroundImage: "url(/img/homepage/cheer.jpg)" }}
            />
          </div>
        </div>
        <div className="row -three">
          <div className="col -threeA">
            <div
              className="mobile-home-page-pic"
              style={{ backgroundImage: "url(/img/homepage/iris.jpg)" }}
            />
          </div>
          <div className="col -threeB">
            <div
              className="mobile-home-page-pic"
              style={{ backgroundImage: "url(/img/homepage/talia.jpg)" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
