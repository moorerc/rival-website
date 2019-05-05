import * as React from "react";
import "../styles/App.css";
import "../styles/Roster.css";

import { Button } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { isMobile } from "react-device-detect";

import * as _ from "lodash";
import { Players, PLAYERS } from "../data/Players";
import { RosterList, RIVAL_ROSTERS } from "../data/RosterList";
import PlayerDetailsPanel from "src/components/roster/PlayerDetailsPanel";
import {
  getImageUrlForRoster,
  getImageUrlForPlayerAction
} from "src/components/basic/Helpers";
import RosterUserAvatar from "src/components/roster/RosterUserAvatar";
import RosterDetailsPanel from "src/components/roster/RosterDetailsPanel";
import * as classNames from "classnames";
import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import MobileRosterBody from "src/components/roster/MobileRosterBody";
import { RouteComponentProps } from "react-router-dom";
import { connect, Dispatch } from "react-redux";
import { RootState } from "src/state/store";
import { SELECT_ROSTER } from "src/state/actions";

export namespace Roster {
  export interface OwnProps extends RouteComponentProps {}
  export interface StateProps {
    selectedRoster: RosterList;
  }

  export interface ConnectedActions {
    selectRoster: (roster: RosterList) => void;
  }

  export type Props = OwnProps & StateProps & ConnectedActions;

  export interface State {
    topPanelMode: TopPanelMode;
    rosterViewMode: RosterViewMode;
    selectedPlayer: Players;
  }
}
export enum TopPanelMode {
  "ROSTER_VIEW",
  "PLAYER_VIEW"
}

export enum RosterViewMode {
  // ROSTER_IMAGE = "ROSTER_IMAGE",
  ROSTER_INFO = "ROSTER_INFO",
  ROSTER_PLAYERS = "ROSTER_PLAYERS",
  PLAYER_INFO = "PLAYER_INFO"
}
class RosterInternal extends React.Component<Roster.Props, Roster.State> {
  constructor(props: Roster.Props) {
    super(props);
    this.state = {
      topPanelMode: TopPanelMode.ROSTER_VIEW,
      rosterViewMode: RosterViewMode.ROSTER_INFO,
      selectedPlayer: this.props.selectedRoster.players[0]
    };
  }

  render() {
    const roster = this.props.selectedRoster;
    const firstYear = roster === RIVAL_ROSTERS[0];
    const lastYear = roster === RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1];

    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-roster-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="roster" />
          <div className="roster-page-body">
            {isMobile
              ? this.renderMobileBody()
              : this.renderBrowserBody(firstYear, lastYear)}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private renderMobileBody() {
    const { rosterViewMode, selectedPlayer } = this.state;
    const { selectedRoster } = this.props;

    return (
      <MobileRosterBody
        roster={selectedRoster}
        rosterViewMode={rosterViewMode}
        viewResults={this.handleViewResults}
        selectedPlayer={selectedPlayer}
        selectRoster={this.handleSelectRoster}
        selectNextRoster={this.nextRoster}
        selectNextPlayer={this.nextPlayer}
        selectPreviousPlayer={this.previousPlayer}
        selectPreviousRoster={this.previousRoster}
        selectRosterViewMode={this.changeRosterViewMode}
        selectPlayer={this.selectPlayer}
      />
    );
  }

  private renderBrowserBody(firstYear: boolean, lastYear: boolean) {
    return (
      <React.Fragment>
        <div className="body-top">
          <div className="section-side">
            <Button
              className="roster-control-button"
              icon={IconNames.ARROW_LEFT}
              minimal={true}
              onClick={this.previousRoster}
              disabled={firstYear}
            />
          </div>
          <div className="section-middle">
            {this.renderImagePanel()}
            {this.renderInfoPanel()}
          </div>
          <div className="section-side">
            <Button
              className="roster-control-button"
              icon={IconNames.ARROW_RIGHT}
              minimal={true}
              onClick={this.nextRoster}
              disabled={lastYear}
            />
          </div>
        </div>
        <div className="body-bottom">
          {this.renderPlayersSection()}
          {this.renderOthersSection()}
        </div>
      </React.Fragment>
    );
  }

  private renderOthersSection = () => {
    const roster = this.props.selectedRoster;
    return (
      <div className="players-section">
        <div className="row">
          {_.map(roster.coaches, (player: Players, key: any) => (
            <RosterUserAvatar
              playerId={player}
              player={PLAYERS[player]}
              key={key}
              rosterId={roster.id}
              onClick={() => this.selectPlayer(player)}
              noColor={this.state.selectedPlayer !== player}
            />
          ))}
        </div>
      </div>
    );
  };

  private renderPlayersSection = () => {
    const roster = this.props.selectedRoster;
    const rows = _.chunk(roster.players, roster.players.length / 3);
    const topRow = rows[0];
    const middleRow =
      rows.length > 3
        ? rows[1].concat(rows[2].slice(0, rows[3].length))
        : rows[1];
    const lastRow =
      rows.length > 3
        ? rows[2].slice(rows[3].length, rows[2].length).concat(rows[3])
        : rows[2];

    return (
      <div className="players-section">
        <div className="row">
          {_.map(topRow, (player: Players, key: any) => (
            <RosterUserAvatar
              playerId={player}
              player={PLAYERS[player]}
              key={key}
              rosterId={roster.id}
              onClick={() => this.selectPlayer(player)}
              noColor={
                this.state.selectedPlayer !== player ||
                this.state.rosterViewMode !== RosterViewMode.PLAYER_INFO
              }
            />
          ))}
        </div>
        <div className="row">
          {_.map(middleRow, (player: Players, key: any) => (
            <RosterUserAvatar
              playerId={player}
              player={PLAYERS[player]}
              key={key}
              rosterId={roster.id}
              onClick={() => this.selectPlayer(player)}
              noColor={this.state.selectedPlayer !== player}
            />
          ))}
        </div>
        <div className="row">
          {_.map(lastRow, (player: Players, key: any) => (
            <RosterUserAvatar
              playerId={player}
              player={PLAYERS[player]}
              key={key}
              rosterId={roster.id}
              onClick={() => this.selectPlayer(player)}
              noColor={this.state.selectedPlayer !== player}
            />
          ))}
        </div>
      </div>
    );
  };

  private renderImagePanel = () => {
    const roster = this.props.selectedRoster;
    const player = this.state.selectedPlayer;

    let imageUrl = "";
    if (this.state.topPanelMode === TopPanelMode.PLAYER_VIEW && player) {
      imageUrl = getImageUrlForPlayerAction(roster.id, player);
    } else {
      imageUrl = getImageUrlForRoster(roster.id);
    }

    return (
      <div className="image-panel">
        <div
          className="roster-team-photo"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        />
      </div>
    );
  };

  private renderInfoPanel = () => {
    const roster = this.props.selectedRoster;
    const player = this.state.selectedPlayer;
    const playerView = this.state.topPanelMode === TopPanelMode.PLAYER_VIEW;

    return (
      <div className="info-panel">
        <RosterDetailsPanel
          roster={roster}
          shrunk={playerView}
          onSelectRoster={this.handleSelectRoster}
        />
        {playerView && player && (
          <PlayerDetailsPanel player={PLAYERS[player]} rosterId={roster.id} />
        )}
      </div>
    );
  };

  private handleSelectRoster = (roster: RosterList) => {
    this.setState({
      selectedPlayer: roster.players[0],
      topPanelMode: TopPanelMode.ROSTER_VIEW
    });
    this.props.selectRoster(roster);
  };

  private nextPlayer = () => {
    const roster = this.props.selectedRoster.players.concat(
      this.props.selectedRoster.coaches
    );
    let i;
    _.forEach(roster, (player, index) => {
      if (player === this.state.selectedPlayer) {
        i = index;
      }
    });

    if (i != undefined && i + 1 < roster.length) {
      this.setState({
        selectedPlayer: roster[i + 1]
      });
    }
  };

  private previousPlayer = () => {
    const roster = this.props.selectedRoster.players.concat(
      this.props.selectedRoster.coaches
    );
    let i;
    _.forEach(roster, (player, index) => {
      if (player === this.state.selectedPlayer) {
        i = index;
      }
    });

    if (i != undefined && i - 1 >= 0) {
      this.setState({
        selectedPlayer: roster[i - 1]
      });
    }
  };

  private nextRoster = () => {
    const index = _.findIndex(RIVAL_ROSTERS, this.props.selectedRoster);
    if (index != undefined && index + 1 < RIVAL_ROSTERS.length) {
      this.setState({
        selectedPlayer: RIVAL_ROSTERS[index + 1].players[0],
        topPanelMode: TopPanelMode.ROSTER_VIEW
      });
      this.props.selectRoster(RIVAL_ROSTERS[index + 1]);
    }
  };

  private previousRoster = () => {
    const index = _.findIndex(RIVAL_ROSTERS, this.props.selectedRoster);
    if (index != undefined && index > 0) {
      this.setState({
        selectedPlayer: RIVAL_ROSTERS[index - 1].players[0],
        topPanelMode: TopPanelMode.ROSTER_VIEW
      });
      this.props.selectRoster(RIVAL_ROSTERS[index - 1]);
    }
  };

  private selectPlayer = (player: Players) => {
    this.setState({
      topPanelMode: TopPanelMode.PLAYER_VIEW,
      selectedPlayer: player,
      rosterViewMode: RosterViewMode.PLAYER_INFO
    });
  };

  private changeRosterViewMode = (mode: RosterViewMode) => {
    this.setState({ rosterViewMode: mode });
  };

  private handleViewResults = () => {
    this.props.history.push("/results/");
  };
}

const mapStateToProps = (state: RootState): Roster.StateProps => {
  return {
    selectedRoster: state.rivalWebsiteAppState.selectedRoster
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootState>
): Roster.ConnectedActions => ({
  selectRoster: (roster: RosterList) => {
    dispatch(SELECT_ROSTER(roster));
  }
});

export const Roster = connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterInternal);
