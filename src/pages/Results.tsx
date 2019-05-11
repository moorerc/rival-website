import * as React from "react";
import "../styles/App.css";
import "../styles/Results.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import * as classNames from "classnames";
import { isMobile } from "react-device-detect";
import MobileResultsBody from "src/components/results/MobileResultsBody";
import { RosterList } from "src/data/RosterList";
import {
  ALL_TOURNAMENTS,
  TournamentList,
  Tournament
} from "src/data/Tournaments";
import * as _ from "lodash";
import * as moment from "moment";
import { connect, Dispatch } from "react-redux";
import { SELECT_ROSTER } from "src/state/actions";
import { RootState } from "src/state/store";
import { TEAMS } from "src/data/Teams";
import ResultsBody from "src/components/results/ResultsBody";

export namespace Results {
  export interface StateProps {
    selectedRoster: RosterList;
  }

  export interface ConnectedActions {
    selectRoster: (roster: RosterList) => void;
  }

  export type Props = StateProps & ConnectedActions;

  export interface State {
    searchFilterString: string;
    showAll: boolean;
  }
}

class ResultsInternal extends React.Component<Results.Props, Results.State> {
  state: Results.State = {
    searchFilterString: "",
    showAll: false
  };

  render() {
    const { searchFilterString, showAll } = this.state;
    const { selectedRoster } = this.props;

    let tournaments: Tournament[] = [];

    ALL_TOURNAMENTS.forEach((season: TournamentList) => {
      _.forEach(season, (tournament, key) => {
        tournaments.push(tournament);
      });
    });

    tournaments = _.filter(tournaments, tournament => tournament.sanctioned);

    if (!showAll) {
      tournaments = _.filter(
        tournaments,
        tournament =>
          moment(tournament.date.start).year() === selectedRoster.year
      );
    }

    tournaments = _.filter(tournaments, tournament => {
      const tournamentNameMatch = tournament.name
        .toLowerCase()
        .includes(searchFilterString.toLowerCase());
      let opponentsNames = "";
      tournament.games.forEach(
        game =>
          (opponentsNames =
            opponentsNames +
            TEAMS[game.opponent].displayNameOverride +
            TEAMS[game.opponent].name)
      );
      const tournamentOpponentMatch = opponentsNames
        .toLowerCase()
        .includes(searchFilterString.toLowerCase());
      return tournamentNameMatch || tournamentOpponentMatch;
    });

    const sortedTournaments = _.reverse(
      _.sortBy(tournaments, tournament => moment(tournament.date.start))
    );

    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-results-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="results" />
          <div className="results-page-body">
            {isMobile ? (
              <MobileResultsBody
                tournaments={sortedTournaments}
                roster={selectedRoster}
                selectRoster={this.handleSelectRoster}
                changeSearchString={this.handleSearchChange}
                searchString={searchFilterString}
                showAll={showAll}
                changeShowAll={this.handleShowAll}
              />
            ) : (
              <ResultsBody
                tournaments={sortedTournaments}
                roster={selectedRoster}
                selectRoster={this.handleSelectRoster}
                changeSearchString={this.handleSearchChange}
                searchString={searchFilterString}
                showAll={showAll}
                changeShowAll={this.handleShowAll}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private handleSelectRoster = (roster: RosterList) => {
    this.setState({
      showAll: false
    });
    this.props.selectRoster(roster);
  };

  private handleSearchChange = (searchFilterString: string) => {
    this.setState({ searchFilterString });
  };

  private handleShowAll = (showAll: boolean) => {
    this.setState({ showAll });
  };
}

const mapStateToProps = (state: RootState): Results.StateProps => {
  return {
    selectedRoster: state.rivalWebsiteAppState.selectedRoster
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootState>
): Results.ConnectedActions => ({
  selectRoster: (roster: RosterList) => {
    dispatch(SELECT_ROSTER(roster));
  }
});

export const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsInternal);
