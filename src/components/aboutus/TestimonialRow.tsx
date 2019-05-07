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
        {author === "Caitlin Harley" ? (
          <div className="quote">
            "i just wanted to give this team 10 stars"
          </div>
        ) : null}
        <div className="stars">
          {author !== "Sara Scott" ? (
            <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
          ) : (
            <span>&#9733; &#9733; &#9733; &#9734; &#9734;</span>
          )}
          <span className="author">{" | " + author}</span>
        </div>
      </div>
    );
  }
}
