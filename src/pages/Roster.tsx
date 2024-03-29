import * as React from "react";
import "../styles/App.css";
import "../styles/Roster.css";

import { isMobile } from "react-device-detect";

import * as _ from "lodash";
import { Players } from "../data/Players";
import { RosterList, RIVAL_ROSTERS } from "../data/RosterList";
import classNames from "classnames";
import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import MobileRosterBody from "src/components/roster/MobileRosterBody";
import { RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "src/state/store";
import { SELECT_ROSTER } from "src/state/actions";
import RosterBody from "src/components/roster/RosterBody";

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
    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-roster-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="roster" />
          <div className="roster-page-body">
            {isMobile ? this.renderMobileBody() : this.renderWebBody()}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private renderWebBody() {
    const { rosterViewMode, selectedPlayer } = this.state;
    const { selectedRoster } = this.props;

    return (
      <RosterBody
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
  dispatch: AppDispatch
): Roster.ConnectedActions => ({
  selectRoster: (roster: RosterList) => {
    dispatch(SELECT_ROSTER(roster));
  }
});

export const Roster = connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterInternal);
