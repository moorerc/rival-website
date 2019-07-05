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

export namespace RBQBodyMobile {
  export interface Props {
    selectedTab: RBQTab;
    selectedBadge?: Badges;
    selectedPlayer?: Players;
    detailsView: RBQDetailsView;
    roster: RosterList;
    selectTab: (tab: RBQTab) => void;
    selectPlayer: (player: Players) => void;
    selectBadge: (badgee: Badges) => void;
  }
}

export default class RBQBodyMobile extends React.Component<
  RBQBodyMobile.Props
> {
  render() {
    const { selectedTab, selectTab } = this.props;
    return (
      <div className="rbq-body-mobile">
        <RBQMobileHeaderBar />
        <RBQMobileNavBar selectedTab={selectedTab} selectTab={selectTab} />
        <div className="rbq-body-mobile-scroll-container">
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
            selectPlayer={this.props.selectPlayer}
          />
        );
      case RBQTab.BADGES:
        return <RBQMobileBadgeList selectBadge={this.props.selectBadge} />;
      case RBQTab.DETAILS:
        return (
          <RBQMobileDetailsPanel
            selectedBadge={selectedBadge}
            selectedPlayer={selectedPlayer}
            detailsView={detailsView}
          />
        );
      default:
        return "rbq body mobile";
    }
  }
}
