import * as _ from "lodash";
import * as React from "react";
import { Badges, BadgeEarned, BADGES } from "src/data/rbq/Badges";
import { Players, PLAYERS } from "src/data/Players";
import { RBQMobileDetailsHeader } from "./RBQMobileDetailsHeader";
import { RBQDetailsView } from "src/pages/BadgeQuest";
import MobileHeader from "../basic/MobileHeader";
import RBQMiniUserAvatar from "./RBQMiniUserAvatar";
import {
  numTimesUserEarnedBadge,
  getBadgesEarnedForBadge,
  getBadgesEarnedForPlayer
} from "./RBQHelpers";
import "../../styles/RBQMobileDetailsPanel.css";
import * as moment from "moment";
import RBQMiniBadgeIcon from "./RBQMiniBadgeIcon";
import { BADGES_ACTIVATED_THIS_SEASON, RBQ_ROSTER } from "src/data/rbq/RBQData";

export namespace RBQMobileDetailsPanel {
  export interface Props {
    selectedBadge?: Badges;
    selectedPlayer?: Players;
    detailsView: RBQDetailsView;
    selectPlayer: (player: Players) => void;
    selectBadge: (badgee: Badges) => void;
  }
}

export class RBQMobileDetailsPanel extends React.Component<
  RBQMobileDetailsPanel.Props
> {
  render() {
    return (
      <div className="rbq-mobile-details-panel">{this.renderContent()}</div>
    );
  }

  private renderContent() {
    const { detailsView } = this.props;
    switch (detailsView) {
      case RBQDetailsView.DETAILS_BADGE:
        return this.renderBadgeView();
      case RBQDetailsView.DETAILS_PLAYER:
        return this.renderPlayerView();
      default:
        return null;
    }
  }

  private renderBadgeView = () => {
    const { selectedBadge } = this.props;

    if (selectedBadge === undefined) {
      return null;
    }

    const users: Players[] = _.concat(RBQ_ROSTER.players, RBQ_ROSTER.coaches);
    const badgesEarned = getBadgesEarnedForBadge(selectedBadge);

    return (
      <React.Fragment>
        <RBQMobileDetailsHeader
          selectedBadge={selectedBadge}
          detailsView={RBQDetailsView.DETAILS_BADGE}
        />
        <span className="details-panel-content">
          <MobileHeader title="Earned by" />
          <div className="icons-bucket">
            {_.map(users, (player: Players, key: any) => (
              <RBQMiniUserAvatar
                player={player}
                key={key}
                count={numTimesUserEarnedBadge(player, selectedBadge)}
                rosterId={RBQ_ROSTER.id}
                onClick={() => this.props.selectPlayer(player)}
              />
            ))}
          </div>
          <span className="earned-details">
            <MobileHeader title="Details" />
            {badgesEarned.length === 0 && (
              <div className="no-badges-earned">Badge has not been earned</div>
            )}
            {badgesEarned.length > 0 && (
              <div className="badges-earned-table">
                <table>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Date Earned</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(
                      badgesEarned,
                      (badgeEanred: BadgeEarned, key: any) => (
                        <tr key={key} className="badge-earned-row">
                          <td>
                            {PLAYERS[badgeEanred.player].name.nickname ||
                              PLAYERS[badgeEanred.player].name.first}
                          </td>
                          <td>
                            {moment(badgeEanred.date).format(
                              "MMM Do YYYY, h:mm a"
                            )}
                          </td>
                          <td>{badgeEanred.notes || ""}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </span>
        </span>
      </React.Fragment>
    );
  };

  private renderPlayerView = () => {
    const { selectedPlayer } = this.props;

    if (selectedPlayer === undefined) {
      return null;
    }

    const badgesActivated: Badges[] = BADGES_ACTIVATED_THIS_SEASON;
    const badgesEarned = getBadgesEarnedForPlayer(selectedPlayer);

    return (
      <React.Fragment>
        <RBQMobileDetailsHeader
          selectedPlayer={selectedPlayer}
          detailsView={RBQDetailsView.DETAILS_PLAYER}
        />
        <span className="details-panel-content -no-top-margin">
          <MobileHeader title="Badges Earned" />
          <div className="icons-bucket">
            {_.map(badgesActivated, (badge: Badges, key: any) => (
              <RBQMiniBadgeIcon
                badge={badge}
                key={key}
                count={numTimesUserEarnedBadge(selectedPlayer, badge)}
                onClick={() => this.props.selectBadge(badge)}
              />
            ))}
          </div>
          <span className="earned-details">
            <MobileHeader title="Details" />
            <div className="badges-earned-table">
              <table>
                <thead>
                  <tr>
                    <th>Badge</th>
                    <th>Date Earned</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(badgesEarned, (badgeEarned: BadgeEarned, key: any) => (
                    <tr key={key} className="badge-earned-row">
                      <td>{BADGES[badgeEarned.badge].title}</td>
                      <td>
                        {moment(badgeEarned.date).format("MMM Do YYYY, h:mm a")}
                      </td>
                      <td>{badgeEarned.notes || ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </span>
        </span>
      </React.Fragment>
    );
  };
}
