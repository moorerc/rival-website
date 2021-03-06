import * as _ from "lodash";
import * as moment from "moment";
import * as React from "react";
import { BadgeEarned, Badges, BADGES } from "../../data/rbq/Badges";
import { Players, PLAYERS } from "../../data/Players";
import { RosterList } from "../../data/RosterList";
import { getBadgesEarnedForBadge, numTimesUserEarnedBadge } from "./RBQHelpers";
import RBQMiniUserAvatar from "./RBQMiniUserAvatar";
import { getLatestImageUrlForPlayer } from "../basic/Helpers";
import { RBQ_ROSTER } from "src/data/rbq/RBQData";

interface RBQBadgeDetailsPanelProps {
  badge: Badges;
}

export default class RBQBadgeDetailsPanel extends React.Component<
  RBQBadgeDetailsPanelProps
> {
  render() {
    const { badge } = this.props;
    const badgeImagesBase = "/img/badgeimages/";
    const roster: RosterList = RBQ_ROSTER;
    const users: Players[] = _.concat(roster.players, roster.coaches);

    const badgesEarned = getBadgesEarnedForBadge(badge);

    return (
      <div className="rbq-badge-details-panel">
        <div className="panel-header">
          <div className="header-left">
            <img
              className="badge-image"
              src={badgeImagesBase + BADGES[badge].image}
            />
          </div>
          <div className="header-right">
            <div className="title">
              <div className="title-text">{BADGES[badge].title}</div>
              <div className="created-by">
                {"Created By: "}
                <img
                  className="player-image"
                  src={getLatestImageUrlForPlayer(BADGES[badge].createdBy)}
                />
              </div>
            </div>
            <div className="description">{BADGES[badge].description}</div>
          </div>
        </div>
        <div className="panel-body">
          <div className="user-avatars">
            {_.map(users, (player: Players, key: any) => (
              <RBQMiniUserAvatar
                player={player}
                key={key}
                count={numTimesUserEarnedBadge(player, badge)}
                rosterId={roster.id}
              />
            ))}
          </div>
          <div className="badges-earned-table pt-striped">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Date Earned</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {_.map(badgesEarned, (badgeEanred: BadgeEarned, key: any) => (
                  <tr key={key} className="badge-earned-row">
                    <td>
                      {PLAYERS[badgeEanred.player].name.nickname ||
                        PLAYERS[badgeEanred.player].name.first}
                    </td>
                    <td>
                      {moment(badgeEanred.date).format("MMM Do YYYY, h:mm a")}
                    </td>
                    <td>{badgeEanred.notes || ""}</td>
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
