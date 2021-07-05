import { Tag, Intent } from "@blueprintjs/core";
import classNames from "classnames";
import * as React from "react";

import { Badges, BADGES } from "../../data/rbq/Badges";

interface RBQMiniBadgeIconProps {
  badge: Badges;
  count: number;
  onClick?: () => void;
}

export default class RBQMiniBadgeIcon extends React.Component<
  RBQMiniBadgeIconProps
> {
  render() {
    const { badge, count } = this.props;
    const imagesBase = "/img/badgeimages/";

    return (
      <div className="rbq-mini-badge-icon" onClick={this.props.onClick}>
        <img
          className={classNames("badge-icon", {
            "-invalid": count < 1
          })}
          src={imagesBase + BADGES[badge].image}
        />
        {count > 1 && (
          <Tag className="badge-icon-tag" round={true} intent={Intent.PRIMARY}>
            {count}
          </Tag>
        )}
      </div>
    );
  }
}
