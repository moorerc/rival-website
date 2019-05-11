import * as React from "react";
import "../../styles/ResultsCard.css";

import { Card } from "@blueprintjs/core";

import * as _ from "lodash";
import * as moment from "moment";
import { Tournament } from "src/data/Tournaments";
import { getImageUrlForTournament } from "../basic/Helpers";
import * as classNames from "classnames";

export namespace ResultsCard {
  export interface Props {
    tournament: Tournament;
    onClick: () => void;
  }
}

export default class ResultsCard extends React.Component<ResultsCard.Props> {
  render() {
    const { tournament } = this.props;
    const imageUrl = getImageUrlForTournament(tournament.id);

    return (
      <Card className="results-card" elevation={1} onClick={this.props.onClick}>
        <div
          className="results-card-image"
          //   onClick={this.handleOpenLink}
        >
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
              {/* <Icon icon={IconNames.MAP_MARKER} iconSize={8} /> */}
              {tournament.location.city + ", " + tournament.location.state}
            </span>
            <span className="-right">
              {this.getDisplayDate(tournament.date.start, tournament.date.end)}
            </span>
          </div>
        </div>
        <div className="rank-container">
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
        {/* <div className="card-left">
          <div className="results-card-icon">
            <div
              className="tournamentLogo"
              style={{ backgroundImage: "url(" + imageUrl + ")" }}
            />
          </div>
        </div>
        <div className="card-right">
          <div className="title">
            <Text ellipsize={true}>{tournament.name}</Text>
          </div>
          <div className="divider" />
          <div className="subtitle">
            <div className="subtitle-left">{"By: " + "something"}</div>
            <div className="subtitle-right">
              {moment(tournament.date.start).format("LL")}
            </div>
          </div>
        </div> */}
      </Card>
    );
  }

  //   private handleOpenLink = () => {
  //     window.open(this.props.newsItem.link, "_blank");
  //   };

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
}
