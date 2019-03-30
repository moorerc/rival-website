import * as _ from "lodash";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/MobileNavBar.css";
import { NAV_BAR, NavBarItem } from "./constants";
import { Button } from "@blueprintjs/core";

interface MobileNavBarProps {
  pageName: string;
}

export default class MobileNavBar extends React.Component<MobileNavBarProps> {
  render() {
    return (
      <div className="mobile-nav-bar">
        {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => {
          if (
            !navBarItem.showOnPage(this.props.pageName) ||
            navBarItem.type === "image"
          ) {
            return null;
          }

          return (
            <Link
              className="mobile-nav-bar-item"
              to={navBarItem.route}
              key={index}
            >
              <Button
                className="nav-button"
                text={navBarItem.title.toUpperCase()}
                large={true}
              />
            </Link>
          );
        })}
      </div>
    );
  }
}
