import * as _ from "lodash";
import * as React from "react";
import "../../styles/RBQMobileHeaderBar.css";

export namespace RBQMobileHeaderBar {
  export interface Props {}
}

export class RBQMobileHeaderBar extends React.Component<
  RBQMobileHeaderBar.Props
> {
  render() {
    return (
      <div className="rbq-mobile-header-bar">
        <img src="img/Rlogo_gold.png" className="title-logo" />
        <div className="title">Badge Quest 2019</div>
      </div>
    );
  }
}
