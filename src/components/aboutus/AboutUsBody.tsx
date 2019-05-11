import * as React from "react";
import "../../styles/AboutUsBody.css";

import * as _ from "lodash";
import { Card, Elevation, Button, Icon } from "@blueprintjs/core";
import { CORE_VALUES } from "src/data/CoreValues";
import CoreValueRow from "./CoreValueRow";
import SocialMediaLinks from "../basic/SocialMediaLinks";
import TestimonialRow from "./TestimonialRow";
import { IconNames } from "@blueprintjs/icons";
// import TestimonialRow from "./TestimonialRow";
// import CoreValueRow from "./CoreValueRow";
// import { CORE_VALUES } from "src/data/CoreValues";
// import SocialMediaLinks from "../basic/SocialMediaLinks";

export interface Testimonial {
  quote: string;
  author: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "hilarious and heartfelt. the must see comedy of the summer",
    author: "*New York Times"
  },
  {
    quote: "iris loves me",
    author: "Caitlin Harley"
  },
  {
    quote: "i just wanted to give this team 10 stars",
    author: "Caitlin Harley"
  },
  {
    quote: "eh. this team is alright.",
    author: "Sara Scott"
  }
];

export namespace AboutUsBody {
  export interface State {
    testimonialIndex: number;
  }
}

export default class AboutUsBody extends React.Component<
  {},
  AboutUsBody.State
> {
  state: AboutUsBody.State = {
    testimonialIndex: 0
  };

  private nextTestimonial = () => {
    const nextIndex = this.state.testimonialIndex + 1;
    if (nextIndex < TESTIMONIALS.length) {
      this.setState({ testimonialIndex: nextIndex });
    } else {
      this.setState({ testimonialIndex: 0 });
    }
  };

  private previousTestimonial = () => {
    const previousIndex = this.state.testimonialIndex - 1;
    if (previousIndex >= 0) {
      this.setState({ testimonialIndex: previousIndex });
    } else {
      this.setState({ testimonialIndex: TESTIMONIALS.length - 1 });
    }
  };

  render() {
    const testimonial: Testimonial = TESTIMONIALS[this.state.testimonialIndex];

    return (
      <div className="about-us-body">
        <div className="body-top">
          <div className="top-left">
            <div
              className="team-pic bp3-elevation-2"
              style={{ backgroundImage: "url(/img/MeetRival.jpg)" }}
            />
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Meet Rival</span>
              <span className="spacer" />
            </div>
            <Card elevation={Elevation.TWO}>
              <div className="section-text about-us-blurb">
                A nationally competitive women's ultimate team based out of
                Michigan/Ohio. Founded in 2015, fusing alumni from University of
                Michigan and The Ohio State University—the mitochondria of
                midwestern college programs—and their contrasting life and play
                styles, the program has evolved to be the destination for top
                players across the region. As the pack continuously works to
                disrupt the division, it never strays far from its roots in
                unifying the dichotomies, bracketing elite drive and competitive
                spirit within the ever necessary rag-tag goofiness and fresh
                playfulness.
              </div>
            </Card>
            <div className="testimonials">
              <Button
                className="testimonial-control-button -small"
                icon={<Icon icon={IconNames.ARROW_LEFT} iconSize={10} />}
                minimal={true}
                onClick={this.previousTestimonial}
              />
              <TestimonialRow
                quote={testimonial.quote}
                author={testimonial.author}
              />
              <Button
                className="testimonial-control-button -small"
                icon={<Icon icon={IconNames.ARROW_RIGHT} iconSize={10} />}
                minimal={true}
                onClick={this.nextTestimonial}
              />
            </div>
          </div>
          <div className="top-right">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Get In Touch</span>
              <span className="spacer" />
            </div>
            <Card className="get-in-touch-section">
              <SocialMediaLinks gold={true} hoverable={true} />
              <div className="section-text">
                Follow us on social media or contact our leadership team by
                emailing captains@rivalultimate.com
              </div>
            </Card>
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Our Core Values</span>
              <span className="spacer" />
            </div>
            <div className="core-values-section">
              {CORE_VALUES.map((coreValue, index) => (
                <CoreValueRow
                  key={index}
                  coreValue={coreValue}
                  reverse={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="body-bottom" />
      </div>
    );
  }
}
