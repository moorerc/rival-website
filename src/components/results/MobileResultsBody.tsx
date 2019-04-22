import * as React from "react";
import "../../styles/Results.css";
import "../../styles/MobileResultsBody.css";

import * as _ from "lodash";
import {
  ALL_TOURNAMENTS,
  Tournament,
  TournamentList
} from "src/data/Tournaments";
import TournamentCard from "./TournamentCard";
import * as moment from "moment";

interface MobileResultsBodyProps {}

export default class MobileResultsBody extends React.Component<
  MobileResultsBodyProps
> {
  render() {
    const tournaments: Tournament[] = [];
    ALL_TOURNAMENTS.forEach((season: TournamentList) => {
      _.forEach(season, (tournament, key) => {
        tournaments.push(tournament);
      });
    });

    const filteredTournaments = _.filter(
      tournaments,
      tournament => tournament.sanctioned
    );

    const sortedTournaments = _.reverse(
      _.sortBy(filteredTournaments, tournament => moment(tournament.date.start))
    );

    return (
      <React.Fragment>
        <div className="mobile-results-body-scroll-container">
          {_.map(sortedTournaments, (tournament, index) => (
            <TournamentCard tournament={tournament} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
