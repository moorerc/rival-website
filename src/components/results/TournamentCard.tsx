import * as React from "react";
import "../../styles/TournamentCard.css";

import { Card, Tag, Intent } from "@blueprintjs/core";

import * as _ from "lodash";
import classNames from "classnames";

import { Tournament } from "src/data/Tournaments";
import { Game, GameType } from "src/data/Games";
import { TEAMS } from "src/data/Teams";
// import { IconNames } from "@blueprintjs/icons";
import * as moment from "moment";
import {
  getImageUrlForOpponent,
  getImageUrlForTournament,
  getImageUrlForTournamentTeamPic
} from "../basic/Helpers";

interface TournamentCardProps {
  tournament: Tournament;
}

export default class TournamentCard extends React.Component<
  TournamentCardProps
> {
  render() {
    const { tournament } = this.props;
    const imageUrl = getImageUrlForTournament(tournament.id);
    const imageUrlTeamPic = getImageUrlForTournamentTeamPic(tournament.id);

    return (
      <Card className="tournament-card" elevation={1}>
        <div className="card-header">
          <div className="image" onClick={this.handleOpenLink}>
            <div
              className="tournamentLogo"
              style={{ backgroundImage: "url(" + imageUrl + ")" }}
            />
          </div>
          <div className="title">
            <div className="name">
              <span className="-left">{tournament.name}</span>
              <span className="-right">
                {moment(tournament.date.end).format("YYYY")}
              </span>
            </div>
            <div className="divider" />
            <div className="subtitle">
              <span className="-left">
                {tournament.location.city + ", " + tournament.location.state}
              </span>
              <span className="-right">
                {this.getDisplayDate(
                  tournament.date.start,
                  tournament.date.end
                )}
              </span>
            </div>
          </div>
          <div
            className={classNames("rank", {
              "-first": tournament.result ? tournament.result === 1 : false,
              "-second": tournament.result ? tournament.result === 2 : false,
              "-third": tournament.result ? tournament.result === 3 : false
            })}
          >
            <span className="-main">{tournament.result}</span>
            <span className="-suffix">
              {this.getDisplayRankSuffix(tournament.result)}
            </span>
          </div>
        </div>
        <div className="card-picture">
          <div
            className="tournamentTeamPic"
            style={{ backgroundImage: "url(" + imageUrlTeamPic + ")" }}
          />
        </div>
        <div className="card-games">
          {tournament.games.map((game: Game) => {
            const imageUrl = getImageUrlForOpponent(game.opponent);
            const opponentName = TEAMS[game.opponent].displayNameOverride
              ? TEAMS[game.opponent].displayNameOverride
              : TEAMS[game.opponent].location.city +
                " " +
                TEAMS[game.opponent].name;
            return (
              <div className="game-row" key={game.date}>
                <div className="-left">
                  <span> {"vs "}</span>
                  <div className="team-logo">
                    <div
                      className="opponentLogo"
                      style={{ backgroundImage: "url(" + imageUrl + ")" }}
                    />
                  </div>
                  {opponentName}
                </div>
                <div className="-center">{GameType[game.type]}</div>
                <div className="-right">
                  <Tag
                    minimal={true}
                    intent={this.getIntent(game.score_us, game.score_them)}
                  >
                    {game.score_us}
                  </Tag>
                  <span className="spacer" />
                  <Tag
                    minimal={true}
                    intent={this.getIntent(game.score_them, game.score_us)}
                  >
                    {game.score_them}
                  </Tag>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    );
  }

  private getIntent(scoreA: number, scoreB: number) {
    if (scoreA > scoreB) {
      return Intent.SUCCESS;
    } else if (scoreB > scoreA) {
      return Intent.DANGER;
    } else {
      return Intent.WARNING;
    }
  }

  private getDisplayDate(start: string, end: string) {
    if (moment(start).format("MMM") === moment(end).format("MMM")) {
      return moment(start).format("MMMM D") + " - " + moment(end).format("D");
    }
    return (
      moment(start).format("MMMM D") + " - " + moment(end).format("MMMM D")
    );
  }

  private getDisplayRankSuffix(rank: number | undefined) {
    if (rank === undefined) {
      return "";
    }
    const s = ["th", "st", "nd", "rd"];
    const v = rank % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  private handleOpenLink = () => {
    window.open(this.props.tournament.link, "_blank");
  };
}
