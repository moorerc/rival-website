import * as _ from "lodash";
import * as React from "react";
import { isMobile } from "react-device-detect";
import MobileHeaderNavBar from "./MobileHeaderNavBar";
import WebNavBar from "./WebNavBar";

interface CombinedNavBarProps {
  pageName: string;
}

export default class CombinedNavBar extends React.Component<
  CombinedNavBarProps
> {
  render() {
    return isMobile ? (
      <MobileHeaderNavBar pageName={this.props.pageName} />
    ) : (
      <WebNavBar pageName={this.props.pageName} />
    );
  }
}
