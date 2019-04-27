import * as React from "react";
import "../../styles/MobileAboutUsBody.css";

import * as _ from "lodash";

interface SocialMediaButtonProps {
  link: string;
  image: string;
}

export default class SocialMediaButtonBody extends React.Component<
  SocialMediaButtonProps
> {
  render() {
    const { image } = this.props;
    return (
      <div className="social-media-button" onClick={this.handleOpenLink}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      </div>
    );
  }

  private handleOpenLink = () => {
    window.open(this.props.link, "_blank");
  };
}
