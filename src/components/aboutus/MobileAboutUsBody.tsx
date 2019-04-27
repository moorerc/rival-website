import * as React from "react";
import "../../styles/MobileAboutUsBody.css";

import * as _ from "lodash";
import { CORE_VALUES } from "src/data/CoreValues";
import CoreValueRow from "./CoreValueRow";
import SocialMediaButton from "./SocialMediaButton";
import TestimonialRow from "./TestimonialRow";

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
              className="team-pic bp3-elevation-2"
              style={{ backgroundImage: "url(/img/MeetRival.jpg)" }}
            />
            <div className="section-text">
              A nationally competitive women's ultimate team based out of
              Michigan/Ohio. Founded in 2015, as alumni from University of
              Michigan and The Ohio State University ... blah blah blah.
            </div>
            <div className="testimonials">
              <TestimonialRow
                quote="hilarious and heartfelt. the must see comedy of the summer"
                author="New York Times"
              />
              <TestimonialRow quote="iris loves me" author="Caitlin Harley" />
              <TestimonialRow
                quote="eh. this team is alright."
                author="Sara Scott"
              />
            </div>
          </div>
          <div className="section">
            <div className="section-title -extra-spacing">
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
            <div className="social-media-links">
              <SocialMediaButton
                link="https://www.facebook.com/rivalultimate/"
                image="/img/social-logos/facebook_gold.png"
              />
              <SocialMediaButton
                link="https://twitter.com/RivalUltimate/"
                image="/img/social-logos/twitter_gold.png"
              />
              <SocialMediaButton
                link="https://www.instagram.com/rivalultimate/"
                image="/img/social-logos/instagram_gold.png"
              />
              <SocialMediaButton
                link="mailto:captains@rivalultimate.com"
                image="/img/social-logos/email_gold.png"
              />
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
