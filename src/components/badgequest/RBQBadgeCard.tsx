import * as React from "react";
import { Badge } from "../../data/rbq/Badges";

interface RBQBadgeCardProps {
  badge: Badge;
  onClick?: () => void;
}

export default class RBQBadgeCard extends React.Component<RBQBadgeCardProps> {
  render() {
    const { badge } = this.props;
    const imagesBase = "/img/badgeimages/";

    return (
      <div className="rbq-badge-card" onClick={this.props.onClick}>
        <div
          className="badge-image"
          style={{
            background: "url(" + imagesBase + badge.image + ")",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
      </div>
    );
  }
}
