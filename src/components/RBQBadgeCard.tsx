import * as React from "react";
import { Badge } from "../data/Badges";

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
            <img
                className="badge-image"
                src={imagesBase + badge.image}
                onClick={this.props.onClick}
            />
        </div>
    );
  }
}
