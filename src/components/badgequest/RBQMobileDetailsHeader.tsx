import * as _ from "lodash";
import * as React from "react";
import {
  getImageUrlForBadge,
  getLatestImageUrlForPlayer,
  getImageUrlForPlayer,
  getDisplayNameForPlayer
} from "../basic/Helpers";
import { Badges, BADGES } from "src/data/rbq/Badges";
import "../../styles/RBQMobileDetailsHeader.css";
import MobileHeader from "../basic/MobileHeader";
import { Icon, Tag } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import {
  getBadgesEarnedForBadge,
  getBadgesEarnedForPlayer
} from "./RBQHelpers";
import { Players, PLAYERS } from "src/data/Players";
import { RBQDetailsView } from "src/pages/BadgeQuest";
import * as classNames from "classnames";
import { RBQ_ROSTER } from "src/data/rbq/RBQData";

export namespace RBQMobileDetailsHeader {
  export interface Props {
    selectedBadge?: Badges;
    selectedPlayer?: Players;
    detailsView: RBQDetailsView;
  }
}

export class RBQMobileDetailsHeader extends React.Component<
  RBQMobileDetailsHeader.Props
> {
  render() {
    const { detailsView } = this.props;

    return (
      <div
        className={classNames("rbq-mobile-details-header", {
          "-no-bottom-padding": detailsView === RBQDetailsView.DETAILS_PLAYER
        })}
      >
        {detailsView === RBQDetailsView.DETAILS_BADGE
          ? this.renderBadgeHeader()
          : this.renderPlayerHeader()}
      </div>
    );
  }

  private renderBadgeHeader = () => {
    const { selectedBadge } = this.props;

    if (selectedBadge === undefined) {
      return null;
    }
    const badge = BADGES[selectedBadge];
    const bEarned = getBadgesEarnedForBadge(selectedBadge);

    return (
      <React.Fragment>
        <div className="title-container">
          <div
            className="selected-item-image"
            style={{
              background: "url(" + getImageUrlForBadge(badge) + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          />
          <div className="main-content-area">
            <div className="title">
              <span className="main">{badge.title}</span>
              <span className="right">
                Created by
                <img
                  className="created-by-image"
                  src={getLatestImageUrlForPlayer(badge.createdBy)}
                />
              </span>
            </div>
            <div className="subtitle">
              <span className="stat-segment">
                <Icon icon={IconNames.BADGE} iconSize={12} />
                {bEarned.length}
              </span>
              <span className="stat-segment">
                <Icon icon={IconNames.USER} iconSize={12} />
                {_.uniqBy(bEarned, earned => earned.player).length}
              </span>
            </div>
          </div>
        </div>
        <MobileHeader title="To Earn This Badge" />
        <div className="description-container">{badge.description}</div>
      </React.Fragment>
    );
  };

  private renderPlayerHeader = () => {
    const { selectedPlayer } = this.props;

    if (selectedPlayer === undefined) {
      return null;
    }

    const users: Players[] = _.concat(RBQ_ROSTER.players, RBQ_ROSTER.coaches);
    const rosterLeaderboard = _.sortBy(
      users,
      player => getBadgesEarnedForPlayer(player).length,
      "DESC"
    );

    const badgesEarned = getBadgesEarnedForPlayer(selectedPlayer);
    const tagValue = _.indexOf(_.reverse(rosterLeaderboard), selectedPlayer);

    return (
      <React.Fragment>
        <div className="title-container">
          <div
            className="selected-item-image -player-image"
            style={{
              background:
                "url(" +
                getImageUrlForPlayer(RBQ_ROSTER.id, selectedPlayer) +
                ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          />
          <div className="main-content-area">
            <div className="title">
              <span className="main">
                {getDisplayNameForPlayer(PLAYERS[selectedPlayer])}
              </span>
            </div>
            <div className="subtitle">
              <span className="stat-segment">
                <Icon icon={IconNames.BADGE} iconSize={12} />
                {badgesEarned.length}
              </span>
            </div>
          </div>
        </div>
        {tagValue !== undefined && (
          <div className="card-tag">
            <Tag
              className={classNames({
                "-first": tagValue === 0,
                "-second": tagValue === 1,
                "-third": tagValue === 2
              })}
            >
              {tagValue < 3 && <img src="img/Rlogo.png" className="tag-logo" />}
              {tagValue + 1}
            </Tag>
          </div>
        )}
      </React.Fragment>
    );
  };
}
