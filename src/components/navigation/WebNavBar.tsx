import * as _ from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/WebNavBar.css";
import {
  NAV_BAR,
  NavBarItem,
  NavBarItemText,
  NavBarItemImage
} from "./constants";

interface WebNavBarProps {
  pageName: string;
}

export default class WebNavBar extends React.Component<WebNavBarProps> {
  render() {
    return (
      <div className="web-nav-bar">
        {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => {
          if (!navBarItem.showOnPage(this.props.pageName)) {
            return null;
          }

          return (
            <div key={navBarItem.key} className="web-nav-bar-item">
              {navBarItem.type === "text" && this.renderTextLink(navBarItem)}
              {navBarItem.type === "image" && this.renderImageLink(navBarItem)}
            </div>
          );
        })}
      </div>
    );
  }

  private renderTextLink(navBarItem: NavBarItemText) {
    return (
      <Link className="web-nav-bar-item-text" to={navBarItem.route}>
        {navBarItem.title.toUpperCase()}
      </Link>
    );
  }

  private renderImageLink(navBarItem: NavBarItemImage) {
    return (
      <Link className="web-nav-bar-item-image" to={navBarItem.route}>
        <img className="item-image" src="/img/RivalLogoCircle.svg" />
      </Link>
    );
  }
}
