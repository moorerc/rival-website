import * as _ from "lodash";
import * as React from "react";
import { Badges, BADGES } from "src/data/rbq/Badges";
import RBQMobileListItemCard from "./RBQMobileListItemCard";
import {
  getImageUrlForBadge,
  getLatestImageUrlForPlayer
} from "../basic/Helpers";
import { getBadgesEarnedForBadge } from "./RBQHelpers";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { BADGES_ACTIVATED_THIS_SEASON } from "src/data/rbq/RBQData";

export namespace RBQMobileBadgeList {
  export interface Props {
    selectBadge: (badge: Badges) => void;
  }
}

export class RBQMobileBadgeList extends React.Component<
  RBQMobileBadgeList.Props
> {
  render() {
    const badgesActivated: Badges[] = BADGES_ACTIVATED_THIS_SEASON;

    return (
      <React.Fragment>
        {_.map(badgesActivated, (badge: Badges) => {
          const b = BADGES[badge];
          const bEarned = getBadgesEarnedForBadge(badge);
          return (
            <RBQMobileListItemCard
              key={b.title}
              title={b.title}
              titleRight={
                <React.Fragment>
                  Created by
                  <img
                    className="created-by-image"
                    src={getLatestImageUrlForPlayer(b.createdBy)}
                  />
                </React.Fragment>
              }
              subtitle={
                <React.Fragment>
                  <span className="stat-segment">
                    <Icon icon={IconNames.BADGE} iconSize={12} />
                    {bEarned.length}
                  </span>
                  <span className="stat-segment">
                    <Icon icon={IconNames.USER} iconSize={12} />
                    {_.uniqBy(bEarned, earned => earned.player).length}
                  </span>
                </React.Fragment>
              }
              subtitleRight={<span>Quick Details</span>}
              imageUrl={getImageUrlForBadge(b)}
              noBorder={true}
              detailsContent={
                <span className="description">{b.description}</span>
              }
              onClick={() => this.props.selectBadge(badge)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
