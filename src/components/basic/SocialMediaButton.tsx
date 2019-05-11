import * as React from "react";
import "../../styles/MobileAboutUsBody.css";

import * as _ from "lodash";

export namespace SocialMediaButtonBody {
  export interface Props {
    link: string;
    image: string;
    hoverImage?: string;
  }

  export interface State {
    isHovered: boolean;
  }
}

export default class SocialMediaButtonBody extends React.Component<
  SocialMediaButtonBody.Props,
  SocialMediaButtonBody.State
> {
  state = {
    isHovered: false
  };

  render() {
    const { image, hoverImage } = this.props;
    return (
      <div className="social-media-button" onClick={this.handleOpenLink}>
        <div
          className="image"
          style={{
            backgroundImage:
              this.state.isHovered && hoverImage !== undefined
                ? `url(${hoverImage || ""})`
                : `url(${image})`
          }}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.finishHover}
        />
      </div>
    );
  }

  private handleHover = () => {
    this.setState({ isHovered: true });
  };

  private finishHover = () => {
    this.setState({ isHovered: false });
  };

  private handleOpenLink = () => {
    window.open(this.props.link, "_blank");
  };
}
