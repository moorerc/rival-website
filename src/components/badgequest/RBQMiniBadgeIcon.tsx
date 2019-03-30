import { Tag } from "@blueprintjs/core";
import * as classNames from "classnames";
import * as React from "react";

import { Badges, BADGES } from "../../data/Badges";

interface RBQMiniBadgeIconProps {
    badge: Badges;
    count: number;
}

export default class RBQMiniBadgeIcon extends React.Component<RBQMiniBadgeIconProps> {
  render() {
    const { badge, count } = this.props;
    const imagesBase = "/img/badgeimages/";

    return (
        <div className="rbq-mini-badge-icon">
            <img
                className={classNames("badge-icon", {
                    "-invalid": count < 1,
                })}
                src={imagesBase + BADGES[badge].image}
            />
            {count > 1 && <Tag className="badge-icon-tag pt-round">{count}</Tag> }
        </div>
    );
  }
}
