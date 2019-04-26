import * as React from "react";
import "../../styles/News.css";
import "../../styles/MobileAboutUsBody.css";

import * as _ from "lodash";
import { CORE_VALUES } from "src/data/CoreValues";
import CoreValueRow from "./CoreValueRow";
// import { Card } from "@blueprintjs/core";

interface MobileAboutUsBodyProps {}

export default class MobileAboutUsBody extends React.Component<
  MobileAboutUsBodyProps
> {
  render() {
    return (
      <React.Fragment>
        <div className="mobile-about-us-body-scroll-container">
          <div className="section">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Meet Rival</span>
              <span className="spacer" />
            </div>
            <div
              className="team-pic"
              style={{ backgroundImage: "url(/img/MeetRival.jpg)" }}
            />
            <div className="section-text">
              A nationally competitive women's ultimate team based out of
              Michigan/Ohio. Founded in 2015, as alumni from University of
              Michigan and The Ohio State University ... blah blah blah.
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Our Core Values</span>
              <span className="spacer" />
            </div>
            {CORE_VALUES.map((coreValue, index) => (
              <CoreValueRow
                key={index}
                coreValue={coreValue}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
          <div className="section">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Get In Touch</span>
              <span className="spacer" />
            </div>
            <div className="section-text">
              Follow us on social media or contact our leadership team by
              emailing captains@rivalultimate.com
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
