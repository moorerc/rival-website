import { Button, ButtonGroup } from "@blueprintjs/core";
import * as _ from "lodash";
import * as React from "react";

import RBQBadgeCard from "../components/badgequest/RBQBadgeCard";
import RBQBadgeDetailsPanel from "../components/badgequest/RBQBadgeDetailsPanel";
import RBQEmptyDetailsPanel from "../components/badgequest/RBQEmptyDetailsPanel";
import { getBadgesEarnedForPlayer } from "../components/badgequest/RBQHelpers";
import RBQIndividualDetailsPanel from "../components/badgequest/RBQIndividualDetailsPanel";
import RBQLeaderboardCard from "../components/badgequest/RBQLeaderboardCard";
import RBQTeamStatsDetailsPanel from "../components/badgequest/RBQTeamStatsDetailsPanel";
import { BADGES, Badges } from "../data/rbq/Badges";
import { Players } from "../data/Players";
import { isMobile } from "react-device-detect";
import "../styles/BadgeQuest.css";
import classNames from "classnames";
import RBQBodyMobile from "src/components/badgequest/RBQBodyMobile";
import {
  BADGES_ACTIVATED_THIS_SEASON,
  RBQ_ROSTER,
  RBQ_TITLE
} from "src/data/rbq/RBQData";

enum MainPanel {
  "INDIVIDUAL_DETAILS",
  "TEAM_STATS",
  "BADGE_DETAILS"
}

export enum RBQTab {
  "HOME",
  "LEADERBOARD",
  "BADGES",
  "DETAILS"
}

export enum RBQDetailsView {
  "DETAILS_BADGE",
  "DETAILS_PLAYER"
}

interface BadgeQuestState {
  mainPanel: MainPanel;
  selectedTab: RBQTab;
  detailsView: RBQDetailsView;
  selectedBadge?: Badges;
  selectedPlayer?: Players;
}

export default class BadgeQuest extends React.Component<BadgeQuestState> {
  state: BadgeQuestState = {
    mainPanel: MainPanel.TEAM_STATS,
    selectedTab: RBQTab.HOME,
    detailsView: RBQDetailsView.DETAILS_BADGE,
    selectedBadge: BADGES_ACTIVATED_THIS_SEASON[0],
    selectedPlayer: RBQ_ROSTER.players[0]
  };

  render() {
    const {
      selectedTab,
      selectedBadge,
      selectedPlayer,
      detailsView
    } = this.state;

    return (
      <div
        className={classNames("badgequest-page", {
          "-mobile": isMobile
        })}
      >
        {isMobile ? (
          <RBQBodyMobile
            roster={RBQ_ROSTER}
            selectedTab={selectedTab}
            selectedBadge={selectedBadge}
            selectedPlayer={selectedPlayer}
            detailsView={detailsView}
            selectTab={this.selectTab}
            selectPlayer={this.selectPlayer}
            selectBadge={this.selectBadge}
          />
        ) : (
          this.renderWebBody()
        )}
      </div>
    );
  }

  private renderWebBody = () => {
    const roster = RBQ_ROSTER;
    const users: Players[] = _.concat(roster.players, roster.coaches);
    const badgesActivated: Badges[] = BADGES_ACTIVATED_THIS_SEASON;

    const rosterLeaderboard = _.sortBy(
      users,
      player => getBadgesEarnedForPlayer(player).length,
      "DESC"
    );
    return (
      <React.Fragment>
        <div className="side-panel -left">
          <div className="side-panel-title">Leaderboard</div>
          <div className="side-panel-content">
            {_.map(
              _.reverse(rosterLeaderboard),
              (player: Players, key: any) => (
                <RBQLeaderboardCard
                  player={player}
                  key={key}
                  placement={parseInt(key, 10)}
                  onClick={() => this.selectPlayer(player)}
                />
              )
            )}
          </div>
        </div>
        <div className="main-panel">
          <div className="main-panel-title">
            <img src="img/Rlogo.png" className="title-logo" />
            {RBQ_TITLE}
          </div>
          <div className="main-panel-controls">
            <ButtonGroup
              fill={true}
              className="main-panel-controls-button-group"
            >
              <Button
                icon="user"
                onClick={() =>
                  this.changeMainPanel(MainPanel.INDIVIDUAL_DETAILS)
                }
                text="Individual Details"
                active={this.state.mainPanel === MainPanel.INDIVIDUAL_DETAILS}
                className="main-panel-controls-button"
              />
              <Button
                icon="pulse"
                onClick={() => this.changeMainPanel(MainPanel.TEAM_STATS)}
                text="Team Stats"
                active={this.state.mainPanel === MainPanel.TEAM_STATS}
                className="main-panel-controls-button"
              />
              <Button
                icon="badge"
                onClick={() => this.changeMainPanel(MainPanel.BADGE_DETAILS)}
                text="Badge Details"
                active={this.state.mainPanel === MainPanel.BADGE_DETAILS}
                className="main-panel-controls-button"
              />
            </ButtonGroup>
          </div>
          <div className="main-panel-content">{this.renderMainPanel()}</div>
        </div>
        <div className="side-panel -right">
          <div className="side-panel-title">Badges</div>
          <div className="side-panel-content -split">
            <div className="split-col">
              {_.map(badgesActivated, (badge: Badges, index) =>
                index % 2 === 0 ? (
                  <RBQBadgeCard
                    key={badge}
                    badge={BADGES[badge]}
                    onClick={() => this.selectBadge(badge)}
                  />
                ) : null
              )}
            </div>
            <div className="split-col -right">
              {_.map(badgesActivated, (badge: Badges, index) =>
                index % 2 !== 0 ? (
                  <RBQBadgeCard
                    key={badge}
                    badge={BADGES[badge]}
                    onClick={() => this.selectBadge(badge)}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };

  private renderMainPanel = () => {
    switch (this.state.mainPanel) {
      case MainPanel.BADGE_DETAILS:
        return this.state.selectedBadge ? (
          <RBQBadgeDetailsPanel badge={this.state.selectedBadge} />
        ) : (
          <RBQEmptyDetailsPanel message="select a badge from the panel on the right." />
        );
      case MainPanel.INDIVIDUAL_DETAILS:
        return this.state.selectedPlayer ? (
          <RBQIndividualDetailsPanel
            player={this.state.selectedPlayer}
            placement={1}
          />
        ) : (
          <RBQEmptyDetailsPanel message="select a user from the panel on the left." />
        );
      case MainPanel.TEAM_STATS:
        return <RBQTeamStatsDetailsPanel />;
    }
  };

  private selectTab = (tab: RBQTab) => {
    this.setState({ selectedTab: tab });
  };

  private changeMainPanel = (panel: MainPanel) => {
    this.setState({ mainPanel: panel });
  };

  private selectPlayer = (player: Players) => {
    this.setState({
      selectedPlayer: player,
      mainPanel: MainPanel.INDIVIDUAL_DETAILS,
      detailsView: RBQDetailsView.DETAILS_PLAYER,
      selectedTab: RBQTab.DETAILS
    });
  };

  private selectBadge = (badge: Badges) => {
    this.setState({
      selectedBadge: badge,
      mainPanel: MainPanel.BADGE_DETAILS,
      detailsView: RBQDetailsView.DETAILS_BADGE,
      selectedTab: RBQTab.DETAILS
    });
  };
}
