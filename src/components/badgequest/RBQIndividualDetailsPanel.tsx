import { Icon } from "@blueprintjs/core";
import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";

import { BadgeEarned, Badges, BADGES } from "../../data/rbq/Badges";
import { PLAYERS, Players } from "../../data/Players";
import {
  getBadgesEarnedForPlayer,
  numTimesUserEarnedBadge
} from "./RBQHelpers";
import RBQMiniBadgeIcon from "./RBQMiniBadgeIcon";
import { getImageUrlForPlayer } from "../basic/Helpers";
import { BADGES_ACTIVATED_THIS_SEASON, RBQ_ROSTER } from "src/data/rbq/RBQData";

interface RBQIndividualDetailsPanelProps {
  player: Players;
  placement: number;
}

export default class RBQIndividualDetailsPanel extends React.Component<
  RBQIndividualDetailsPanelProps
> {
  render() {
    const { player } = this.props;
    const badgesEarned = getBadgesEarnedForPlayer(player);
    const badgesActivated: Badges[] = BADGES_ACTIVATED_THIS_SEASON;

    return (
      <div className="rbq-individual-details-panel">
        <div className="panel-header">
          <div className="header-left">
            <img
              className="user-image"
              src={getImageUrlForPlayer(RBQ_ROSTER.id, player)}
            />
          </div>
          <div className="header-right">
            <div className="title">
              <div className="title-text">
                {PLAYERS[this.props.player].name.first +
                  " " +
                  (PLAYERS[this.props.player].name.nickname
                    ? "'" + PLAYERS[this.props.player].name.nickname + "' "
                    : "") +
                  PLAYERS[this.props.player].name.last}
              </div>
            </div>
            <div className="description">
              <Icon icon="badge" iconSize={12} />
              {"Badges Earned: " + badgesEarned.length}
            </div>
          </div>
        </div>
        <div className="panel-body">
          <div className="badge-icons">
            {_.map(badgesActivated, (badge: Badges, key: any) => (
              <RBQMiniBadgeIcon
                badge={badge}
                key={key}
                count={numTimesUserEarnedBadge(player, badge)}
              />
            ))}
          </div>
          <div className="badges-earned-table bp3-striped">
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
        </div>
      </div>
    );
  }
}
