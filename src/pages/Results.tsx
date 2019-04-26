import * as React from "react";
import "../styles/App.css";
import "../styles/Results.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import * as classNames from "classnames";
import { isMobile } from "react-device-detect";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import MobileResultsBody from "src/components/results/MobileResultsBody";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import {
  ALL_TOURNAMENTS,
  TournamentList,
  Tournament
} from "src/data/Tournaments";
import * as _ from "lodash";
import * as moment from "moment";

interface ResultsPageState {
  roster: RosterList;
  searchFilterString: string;
  showAll: boolean;
}

export default class Results extends React.Component<ResultsPageState> {
  state: ResultsPageState = {
    roster: RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1],
    searchFilterString: "",
    showAll: true
  };

  render() {
    const { roster, searchFilterString, showAll } = this.state;

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
        tournament => moment(tournament.date.start).year() === roster.year
      );
    }

    tournaments = _.filter(tournaments, tournament =>
      tournament.name.toLowerCase().includes(searchFilterString.toLowerCase())
    );

    const sortedTournaments = _.reverse(
      _.sortBy(tournaments, tournament => moment(tournament.date.start))
    );
    // if (!showAll) {
    //   seasonNews = _.filter(
    //     ALL_NEWS,
    //     news => moment(news.date).year() === roster.year
    //   );
    // }
    // const filteredNews = _.filter(seasonNews, news =>
    //   news.title.toLowerCase().includes(searchFilterString.toLowerCase())
    // );
    // const news = _.reverse(_.sortBy(filteredNews, this.convertDate));

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
                roster={roster}
                selectRoster={this.handleSelectRoster}
                changeSearchString={this.handleSearchChange}
                searchString={searchFilterString}
                showAll={showAll}
                changeShowAll={this.handleShowAll}
              />
            ) : (
              <NonIdealState
                className="construction-empty-state"
                title="Results. Coming soon."
                icon={IconNames.BUILD}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private handleSelectRoster = (roster: RosterList) => {
    this.setState({
      roster,
      showAll: false
    });
  };

  private handleSearchChange = (searchFilterString: string) => {
    this.setState({ searchFilterString });
  };

  private handleShowAll = (showAll: boolean) => {
    this.setState({ showAll });
  };
}
