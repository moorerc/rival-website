import * as React from "react";
import "../../styles/MobileAboutUsBody.css";

import * as _ from "lodash";

interface TestimonialRowProps {
  author: string;
  quote: string;
}

export default class TestimonialRow extends React.Component<
  TestimonialRowProps
> {
  render() {
    const { quote, author } = this.props;
    return (
      <div className="testimonial">
        <div className="quote">{`"` + quote + `"`}</div>
        <div className="stars">
          &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
          <span className="author">{" | " + author}</span>
        </div>
      </div>
    );
  }
}
