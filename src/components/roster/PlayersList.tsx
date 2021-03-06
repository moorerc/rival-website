import { Card, Elevation } from "@blueprintjs/core";
import * as React from "react";
import { RosterList } from "src/data/RosterList";
import RosterUserAvatar from "./RosterUserAvatar";
import { Players, PLAYERS } from "src/data/Players";
import * as _ from "lodash";

import "../../styles/PlayersList.css";
import { getDisplayNameForPlayer } from "../basic/Helpers";

interface PlayersListProps {
  rosterList: RosterList;
  onSelectPlayer: (player: Players) => void;
}

export default class PlayersList extends React.Component<PlayersListProps> {
  render() {
    const peopleList = this.props.rosterList.players.concat(
      this.props.rosterList.coaches
    );
    return (
      <div className="players-list">
        {_.map(peopleList, (player: Players, key: any) => (
          <Card
            interactive={false}
            elevation={Elevation.ONE}
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
          </Card>
        ))}
      </div>
    );
  }
}
