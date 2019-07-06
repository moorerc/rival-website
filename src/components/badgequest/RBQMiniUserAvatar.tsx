import { Tag } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

import { Players } from "../../data/Players";

interface RBQMiniUserAvatarProps {
  player: Players;
  count: number;
  rosterId: string;
  onClick?: () => void;
}

export default class RBQMiniUserAvatar extends React.Component<
  RBQMiniUserAvatarProps
> {
  render() {
    const { count, player, rosterId } = this.props;
    const imagesBase =
      "/img/" + rosterId + "/headshots/" + rosterId + "_headshot_";

    return (
      <div className="rbq-mini-user-avatar" onClick={this.props.onClick}>
        <div
          className={classNames("user-avatar-image", {
            "-invalid": count < 1
          })}
          style={{
            backgroundImage: "url(" + imagesBase + player + ".jpg" + ")"
          }}
        />
        {count > 1 && (
          <Tag className="user-avatar-tag" round={true}>
            {count}
          </Tag>
        )}
      </div>
    );
  }
}
