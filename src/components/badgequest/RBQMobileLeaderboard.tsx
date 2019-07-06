import * as _ from "lodash";
import * as React from "react";
import { RosterList } from "src/data/RosterList";
import { Players, PLAYERS } from "src/data/Players";
import { getBadgesEarnedForPlayer } from "./RBQHelpers";
import RBQMobileListItemCard from "./RBQMobileListItemCard";
import {
  getImageUrlForPlayer,
  getDisplayNameForPlayer
} from "../basic/Helpers";
import { RBQ_ROSTER } from "src/pages/BadgeQuest";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export namespace RBQMobileLeaderboard {
  export interface Props {
    roster: RosterList;
    selectPlayer: (player: Players) => void;
  }
}

export class RBQMobileLeaderboard extends React.Component<
  RBQMobileLeaderboard.Props
> {
  render() {
    const { roster } = this.props;
    const users: Players[] = _.concat(roster.players, roster.coaches);
    const rosterLeaderboard = _.sortBy(
      users,
      player => getBadgesEarnedForPlayer(player).length,
      "DESC"
    );

    return (
      <React.Fragment>
        {_.map(_.reverse(rosterLeaderboard), (player: Players, key: any) => {
          const p = player;
          const badgesEarned = getBadgesEarnedForPlayer(p);

          return (
            <RBQMobileListItemCard
              key={key}
              title={getDisplayNameForPlayer(PLAYERS[p])}
              subtitle={
                <React.Fragment>
                  <span className="stat-segment">
                    <Icon icon={IconNames.BADGE} iconSize={12} />
                    {badgesEarned.length}
                  </span>
                </React.Fragment>
              }
              imageUrl={getImageUrlForPlayer(RBQ_ROSTER.id, p)}
              tagValue={parseInt(key, 10)}
              onClick={() => this.props.selectPlayer(player)}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
