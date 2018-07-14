import { Tag } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

import { Players, PLAYERS } from "../data/Players";

interface RBQMiniUserAvatarProps {
    player: Players;
    count: number;
}

export default class RBQMiniUserAvatar extends React.Component<RBQMiniUserAvatarProps> {
  render() {
    const { count, player } = this.props;
    const imagesBase = "/img/roster-2018/headshots/rival2018_headshot_";

    return (
        <div className="rbq-mini-user-avatar">
            <div
                className={classNames("user-avatar-image", {
                    "-invalid": count < 1,
                })}
                style={{
                    background: "url(" + imagesBase + PLAYERS[player].name.last.toLowerCase() + ".jpg" + ")",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            />
            {count > 1 && <Tag className="user-avatar-tag pt-round">{count}</Tag> }
        </div>
    );
  }
}
