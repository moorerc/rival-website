import * as React from "react";
import { RBQMobileHeaderBar } from "./RBQMobileHeaderBar";
import "../../styles/RBQBodyMobile.css";
import { RBQMobileNavBar } from "./RBQMobileNavBar";
import { RBQTab, RBQDetailsView } from "src/pages/BadgeQuest";
import { RBQMobileLeaderboard } from "./RBQMobileLeaderboard";
import { RosterList } from "src/data/RosterList";
import { RBQMobileBadgeList } from "./RBQMobileBadgeList";
import { RBQMobileDetailsPanel } from "./RBQMobileDetailsPanel";
import { Badges } from "src/data/rbq/Badges";
import { Players } from "src/data/Players";
import { RBQMobileHome } from "./RBQMobileHome";

export namespace RBQBodyMobile {
  export interface Props {
    selectedTab: RBQTab;
    selectedBadge?: Badges;
    selectedPlayer?: Players;
    detailsView: RBQDetailsView;
    roster: RosterList;
    selectTab: (tab: RBQTab) => void;
    selectPlayer: (player: Players) => void;
    selectBadge: (badge: Badges) => void;
  }
}

export default class RBQBodyMobile extends React.Component<
  RBQBodyMobile.Props
> {
  private scrollContainerRef = React.createRef<any>();

  render() {
    const { selectedTab } = this.props;
    return (
      <div className="rbq-body-mobile">
        <RBQMobileHeaderBar />
        <RBQMobileNavBar
          selectedTab={selectedTab}
          selectTab={this.handleSelectTab}
        />
        <div
          className="rbq-body-mobile-scroll-container"
          ref={this.scrollContainerRef}
        >
          {this.renderContent()}
        </div>
      </div>
    );
  }

  private renderContent() {
    const {
      selectedTab,
      roster,
      selectedBadge,
      selectedPlayer,
      detailsView
    } = this.props;

    switch (selectedTab) {
      case RBQTab.LEADERBOARD:
        return (
          <RBQMobileLeaderboard
            roster={roster}
            selectPlayer={this.handleSelectPlayer}
          />
        );
      case RBQTab.BADGES:
        return <RBQMobileBadgeList selectBadge={this.handleSelectBadge} />;
      case RBQTab.DETAILS:
        return (
          <RBQMobileDetailsPanel
            selectedBadge={selectedBadge}
            selectedPlayer={selectedPlayer}
            detailsView={detailsView}
            selectBadge={this.handleSelectBadge}
            selectPlayer={this.handleSelectPlayer}
          />
        );
      case RBQTab.HOME:
        return <RBQMobileHome />;
      default:
        return null;
    }
  }

  private handleSelectTab = (tab: RBQTab) => {
    this.props.selectTab(tab);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private handleSelectBadge = (badge: Badges) => {
    this.props.selectBadge(badge);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private handleSelectPlayer = (player: Players) => {
    this.props.selectPlayer(player);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };
}
