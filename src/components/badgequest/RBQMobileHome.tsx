import * as _ from "lodash";
import * as React from "react";
import "../../styles/RBQMobileHome.css";
import MobileHeader from "../basic/MobileHeader";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { Players } from "src/data/Players";
import { getBadgesEarnedForPlayer } from "./RBQHelpers";
import {
  getLatestImageUrlForPlayer,
  getImageUrlForPlayer
} from "../basic/Helpers";
import * as moment from "moment";
import RBQMiniBadgeIcon from "./RBQMiniBadgeIcon";
import { Badges } from "src/data/rbq/Badges";
import {
  BADGES_EARNED_THIS_SEASON,
  RBQ_LAST_UPDATED,
  BADGES_RECENTLY_RELEASED,
  RBQ_ROSTER
} from "src/data/rbq/RBQData";

export namespace RBQMobileHome {
  export interface Props {
    selectPlayer: (player: Players) => void;
    selectBadge: (badge: Badges) => void;
  }
}

export class RBQMobileHome extends React.Component<RBQMobileHome.Props> {
  render() {
    const users: Players[] = _.concat(RBQ_ROSTER.players, RBQ_ROSTER.coaches);
    const rosterLeaderboard = _.sortBy(
      users,
      player => getBadgesEarnedForPlayer(player).length,
      "DESC"
    );
    let participatedCount = 0;
    users.forEach(user => {
      if (getBadgesEarnedForPlayer(user).length > 0) {
        participatedCount++;
      }
    });
    const currentLeader: Players = _.reverse(rosterLeaderboard)[0];

    return (
      <div className="rbq-mobile-home">
        <div className="mobile-home-header">
          <img src="img/Rlogo.png" className="header-logo" />
          <div className="header-main">
            <div className="title">Welcome to the Rival Badge Quest!</div>
            <div className="subtitle">
              The Rival Badge Quest (RBQ) is a framework for challenging your
              teammates to engage in activities that will help them work towards
              our season goals. More importantly, it helps us bridge the gap and
              distance from our teammates in various locations and stay
              connected. Rise to the top of the leaderboard by completing
              challenges and collecting virtual badges.
            </div>
          </div>
        </div>
        <div className="last-updated">
          Last updated {moment(RBQ_LAST_UPDATED).fromNow()}
        </div>
        <div className="home-section">
          <MobileHeader title="Overview" />
          <div className="quick-stats">
            <div className="quick-stat">
              <span className="stat-title">Total Badges Earned</span>
              <span className="stat-content">
                <Icon
                  className="quick-stat-icon"
                  icon={IconNames.BADGE}
                  iconSize={24}
                />
                {BADGES_EARNED_THIS_SEASON.length}
              </span>
            </div>
            <div className="quick-stat">
              <span className="stat-title">Team Participation</span>
              <span className="stat-content">
                <Icon
                  className="quick-stat-icon"
                  icon={IconNames.USER}
                  iconSize={24}
                />
                {Math.round((participatedCount / users.length) * 100)}%
              </span>
            </div>
            <div className="quick-stat">
              <span className="stat-title">Current Leader</span>
              <span className="stat-content">
                <Icon
                  className="quick-stat-icon"
                  icon={IconNames.CROWN}
                  iconSize={24}
                />
                <img
                  className="current-leader-image"
                  src={getLatestImageUrlForPlayer(currentLeader)}
                  onClick={() => this.props.selectPlayer(currentLeader)}
                />
              </span>
            </div>
          </div>
        </div>
        {BADGES_RECENTLY_RELEASED.length > 0 && (
          <div className="home-section">
            <MobileHeader title="Recently Added" />
            <div className="recent-badges">
              {BADGES_RECENTLY_RELEASED.map(recentBadge => (
                <RBQMiniBadgeIcon
                  key={recentBadge}
                  badge={recentBadge}
                  count={1}
                  onClick={() => this.props.selectBadge(recentBadge)}
                />
              ))}
            </div>
          </div>
        )}
        <div className="home-section rbq-history">
          <MobileHeader title="History" />
          <div className="history-year">
            <span className="history-title">RBQ 2016</span>
            <span className="history-stats">
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.BADGE}
                    iconSize={14}
                  />
                  385
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.USER}
                    iconSize={14}
                  />
                  100%
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.CROWN}
                    iconSize={14}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2016", Players.LO)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2016", Players.SCOTT)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2016", Players.BACKUS)}
                  />
                </span>
              </div>
            </span>
          </div>
          <div className="history-year">
            <span className="history-title">RBQ 2017</span>
            <span className="history-stats">
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.BADGE}
                    iconSize={14}
                  />
                  402
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.USER}
                    iconSize={14}
                  />
                  100%
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.CROWN}
                    iconSize={14}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2017", Players.LO)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2017", Players.SCOTT)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2017", Players.MOORE)}
                  />
                </span>
              </div>
            </span>
          </div>
          <div className="history-year">
            <span className="history-title">RBQ 2018</span>
            <span className="history-stats">
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.BADGE}
                    iconSize={14}
                  />
                  512
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.USER}
                    iconSize={14}
                  />
                  100%
                </span>
              </div>
              <div className="quick-stat">
                <span className="stat-content">
                  <Icon
                    className="quick-stat-icon"
                    icon={IconNames.CROWN}
                    iconSize={14}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2018", Players.CRAYCRAFT)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2018", Players.KNOWLES)}
                  />
                  <img
                    className="current-leader-image -historical"
                    src={getImageUrlForPlayer("rival-2018", Players.FAZEKAS)}
                  />
                </span>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
