import * as _ from "lodash";
import * as React from "react";
import "../../styles/RBQMobileNavBar.css";
import { ButtonGroup, Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { RBQTab } from "src/pages/BadgeQuest";

export namespace RBQMobileNavBar {
  export interface Props {
    selectedTab: RBQTab;
    selectTab: (tab: RBQTab) => void;
  }
}

export class RBQMobileNavBar extends React.Component<RBQMobileNavBar.Props> {
  render() {
    const { selectedTab, selectTab } = this.props;

    return (
      <div className="rbq-mobile-nav-bar">
        <ButtonGroup
          minimal={true}
          fill={true}
          className="mobile-rbq-button-group"
        >
          <Button
            icon={IconNames.HOME}
            onClick={() => {
              selectTab(RBQTab.HOME);
              //   if (this.scrollContainerRef.current) {
              //     this.scrollContainerRef.current.scrollTop = 0;
              //   }
            }}
            active={selectedTab === RBQTab.HOME}
          />
          <Button
            icon={IconNames.CROWN}
            onClick={() => {
              selectTab(RBQTab.LEADERBOARD);
              //   if (this.scrollContainerRef.current) {
              //     this.scrollContainerRef.current.scrollTop = 0;
              //   }
            }}
            active={selectedTab === RBQTab.LEADERBOARD}
          />
          <Button
            icon={IconNames.BADGE}
            onClick={() => {
              selectTab(RBQTab.BADGES);
              //   if (this.scrollContainerRef.current) {
              //     this.scrollContainerRef.current.scrollTop = 0;
              //   }
            }}
            active={selectedTab === RBQTab.BADGES}
          />
          <Button
            icon={IconNames.INFO_SIGN}
            onClick={() => {
              selectTab(RBQTab.DETAILS);
              //   if (this.scrollContainerRef.current) {
              //     this.scrollContainerRef.current.scrollTop = 0;
              //   }
            }}
            active={selectedTab === RBQTab.DETAILS}
          />
        </ButtonGroup>
      </div>
    );
  }
}
