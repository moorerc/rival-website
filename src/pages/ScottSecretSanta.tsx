import * as React from "react";
import "../styles/App.css";
import "../styles/ScottSecretSanta.css";

import * as classNames from "classnames";
import { isMobile } from "react-device-detect";
import * as _ from "lodash";
import { Link } from "react-router-dom";
import SSSBody from "../components/sss/SSSBody";
import { connect, Dispatch } from "react-redux";
import { RootState } from "../state/store";
import { SELECT_SSS_TAB } from "../state/actions";
import { SSSNavTab } from "../data/sss/SSS";
import SSSBodyMobile from "../components/sss/SSSBodyMobile";
import {
  Button,
  Popover,
  Position,
  Menu,
  MenuItem,
  Colors,
  Classes
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export namespace ScottSecretSanta {
  export interface StateProps {
    selectedTab: SSSNavTab;
  }

  export interface ConnectedActions {
    selectTab: (tab: SSSNavTab) => void;
  }

  export type Props = StateProps & ConnectedActions;
}

class ScottSecretSantaInternal extends React.Component<
  ScottSecretSanta.Props,
  {}
> {
  private renderHeader = () => {
    const { selectTab } = this.props;
    return (
      <div className="sss-page-header">
        <Link className="web-nav-bar-image" to="/sss2019">
          <img
            className="scottflix-logo-image "
            src="/img/sss/scottflix_logo.png"
            onClick={() => selectTab(SSSNavTab.HOME)}
          />
        </Link>
        <div
          className="web-nav-bar-text"
          onClick={() => selectTab(SSSNavTab.HOME)}
        >
          Home
        </div>
        <div
          className="web-nav-bar-text"
          onClick={() => selectTab(SSSNavTab.RULES)}
        >
          Rules
        </div>
        <div className="horizontal-spacer" />
      </div>
    );
  };

  private renderMobileHeader = () => {
    const { selectTab } = this.props;
    return (
      <div className="sss-page-header">
        <Link className="web-nav-bar-image" to="/sss2019">
          <img
            className="scottflix-logo-image "
            src="/img/sss/scottflix_logo.png"
            onClick={() => selectTab(SSSNavTab.HOME)}
          />
        </Link>
        <div className="horizontal-spacer" />
        <Popover
          className={classNames("menu-popover", Classes.DARK)}
          content={this.getNavMenu()}
          position={Position.BOTTOM}
          minimal={true}
        >
          <Button icon={IconNames.MENU} minimal={true} color={Colors.WHITE} />
        </Popover>
      </div>
    );
  };

  private getNavMenu() {
    const { selectTab } = this.props;
    return (
      <Menu className="mobile-nav-bar-menu">
        <MenuItem
          className="mobile-nav-bar-item"
          text="Home"
          onClick={() => selectTab(SSSNavTab.HOME)}
        />
        <MenuItem
          className="mobile-nav-bar-item"
          text="Rules"
          onClick={() => selectTab(SSSNavTab.RULES)}
        />
      </Menu>
    );
  }

  render() {
    const { selectedTab } = this.props;
    return (
      <div
        className={classNames("rival-website-page scott-secret-santa", {
          "-mobile": isMobile
        })}
      >
        {isMobile ? this.renderMobileHeader() : this.renderHeader()}
        <div className="sss-page-body">
          {isMobile ? (
            <SSSBodyMobile selectedTab={selectedTab} />
          ) : (
            <SSSBody selectedTab={selectedTab} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): ScottSecretSanta.StateProps => {
  return {
    selectedTab: state.rivalWebsiteAppState.sssTab
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootState>
): ScottSecretSanta.ConnectedActions => ({
  selectTab: (tab: SSSNavTab) => {
    dispatch(SELECT_SSS_TAB(tab));
  }
});

export const ScottSecretSanta = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScottSecretSantaInternal);
