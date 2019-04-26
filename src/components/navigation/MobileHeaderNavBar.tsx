import * as _ from "lodash";
import * as React from "react";
import "../../styles/MobileHeaderNavBar.css";
import { IconNames } from "@blueprintjs/icons";
import { Button, Popover, Menu, Position, MenuItem } from "@blueprintjs/core";
import { NAV_BAR, NavBarItem } from "./constants";
import { withRouter } from "react-router";

interface MobileHeaderNavBarProps {
  pageName: string;
  match: any;
  location: any;
  history: any;
}

class MobileHeaderNavBar extends React.Component<MobileHeaderNavBarProps> {
  render() {
    return (
      <div className="mobile-header-nav-bar">
        <Popover
          content={this.getNavMenu()}
          position={Position.BOTTOM}
          minimal={true}
        >
          <Button icon={IconNames.MENU} minimal={true} />
        </Popover>
        <div className="nav-bar-title" onClick={this.handleGoHome}>
          Rival Ultimate
        </div>
        <img src="img/Rlogo.png" className="title-logo" />
      </div>
    );
  }

  private handleMenuClick = (route: string) => {
    this.props.history.push(route);
  };

  private handleGoHome = () => {
    this.handleMenuClick("/");
  };

  private getNavMenu() {
    return (
      <Menu>
        {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => {
          if (
            !navBarItem.showOnPage(this.props.pageName) ||
            navBarItem.type === "image"
          ) {
            return null;
          }
          return (
            <MenuItem
              key={navBarItem.key}
              className="mobile-nav-bar-item"
              text={navBarItem.title.toUpperCase()}
              onClick={() => this.handleMenuClick(navBarItem.route)}
            />
          );
        })}
      </Menu>
    );
  }
}

export default withRouter(MobileHeaderNavBar);
