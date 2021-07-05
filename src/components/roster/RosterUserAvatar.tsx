import { Tag, Icon } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";
import "../../styles/App.css";
import "../../styles/RosterUserAvatar.css";

import { Players, Player } from "../../data/Players";
import { getImageUrlForPlayer, isPlayerACoach } from "../basic/Helpers";

interface RosterUserAvatarProps {
  playerId: Players;
  player: Player;
  rosterId: string;
  onClick?: () => any;
  noColor?: boolean;
  hideBadge?: boolean;
}

export default class RosterUserAvatar extends React.Component<
  RosterUserAvatarProps
> {
  render() {
    const { noColor, playerId, player, rosterId, hideBadge } = this.props;
    const playerImage = getImageUrlForPlayer(rosterId, playerId);

    const isCoach = isPlayerACoach(rosterId, playerId);

    return (
      <div className="roster-user-avatar">
        <div
          className={classNames("user-avatar-image", {
            "-invalid": noColor,
            "-not-clickable": this.props.onClick === undefined
          })}
          style={{ backgroundImage: "url(" + playerImage + ")" }}
          onClick={this.props.onClick}
        />
        {isCoach && !hideBadge && (
          <Tag
            className={classNames("user-avatar-tag", {
              "-invalid": noColor,
              "-bottom-right": true
            })}
          >
            <Icon icon={isCoach ? "clipboard" : "star"} iconSize={10} />
          </Tag>
        )}
        {!hideBadge && player.jersey !== undefined && (
          <Tag
            className={classNames("user-avatar-tag", {
              "-invalid": noColor,
              "-bottom-right": true
            })}
          >
            {player.jersey}
          </Tag>
        )}
      </div>
    );
  }
}
