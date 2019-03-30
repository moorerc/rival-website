import * as React from "react";
import "../../styles/App.css";

interface PageBackgroundImageProps {
  backgroundImage: string;
}

export default class PageBackgroundImage extends React.Component<
  PageBackgroundImageProps
> {
  render() {
    return (
      <React.Fragment>
        <div
          className="rival-website-page-bgimage"
          style={{
            background: "url(" + this.props.backgroundImage + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
      </React.Fragment>
    );
  }
}
