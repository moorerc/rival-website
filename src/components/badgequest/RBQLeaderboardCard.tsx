import classNames from "classnames";
import * as React from "react";

import { Icon, Tag } from "@blueprintjs/core";

import { Players, PLAYERS } from "../../data/Players";
import { getBadgesEarnedForPlayer } from "./RBQHelpers";
import "../../styles/RBQLeaderboardCard.css";
import { getLatestImageUrlForPlayer } from "../basic/Helpers";

interface RBQLeaderboardCardProps {
  player: Players;
  placement: number;
  onClick?: () => void;
}

export default class RBQLeaderboardCard extends React.Component<
  RBQLeaderboardCardProps
> {
  render() {
    const { placement, player } = this.props;
    const badgesEarned = getBadgesEarnedForPlayer(player);

    return (
      <div className="rbq-leaderboard-card" onClick={this.props.onClick}>
        <div
          className="leaderboard-card-image"
          style={{
            background: "url(" + getLatestImageUrlForPlayer(player) + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
        <div className="leaderboard-card-content">
          <div className="title">
            {PLAYERS[player].name.nickname
              ? PLAYERS[player].name.nickname
              : PLAYERS[player].name.first}
          </div>
          <div className="subtitle">
            <Icon icon="badge" iconSize={12} />
            {badgesEarned.length + " badges earned"}
          </div>
        </div>
        <div className="rbq-placement-tag">
          <Tag
            className={classNames({
              "-first": placement === 0,
              "-second": placement === 1,
              "-third": placement === 2
            })}
          >
            {placement < 3 && <img src="img/Rlogo.png" className="tag-logo" />}
            {placement + 1}
          </Tag>
        </div>
      </div>
    );
  }
}
