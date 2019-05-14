import * as React from "react";
import { RosterList } from "src/data/RosterList";
import RosterUserAvatar from "./RosterUserAvatar";
import { Players, PLAYERS } from "src/data/Players";
import * as _ from "lodash";

import "../../styles/PlayersListWeb.css";
import { getDisplayNameForPlayer } from "../basic/Helpers";

interface PlayersListWebProps {
  rosterList: RosterList;
  onSelectPlayer: (player: Players) => void;
}

export default class PlayersListWeb extends React.Component<
  PlayersListWebProps
> {
  render() {
    const peopleList = this.props.rosterList.players.concat(
      this.props.rosterList.coaches
    );
    return (
      <div className="players-list-web">
        {_.map(peopleList, (player: Players, key: any) => (
          <div
            className="players-list-card"
            key={key}
            onClick={() => this.props.onSelectPlayer(player)}
          >
            <RosterUserAvatar
              playerId={player}
              player={PLAYERS[player]}
              rosterId={this.props.rosterList.id}
            />
            <div className="card-title">
              {getDisplayNameForPlayer(PLAYERS[player])}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
