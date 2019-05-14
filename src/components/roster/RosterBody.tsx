import * as React from "react";
import "../../styles/RosterBody.css";

// import * as classNames from "classnames";
import * as _ from "lodash";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { RosterViewMode } from "src/pages/Roster";
import { Players, PLAYERS } from "src/data/Players";
import {
  getImageUrlForRoster,
  getDisplayNameForPlayer
} from "../basic/Helpers";
import {
  Classes,
  Card,
  Tooltip,
  Tag,
  Intent,
  Button,
  ButtonGroup
} from "@blueprintjs/core";
import * as classNames from "classnames";
import RosterUserAvatar from "./RosterUserAvatar";
import { IconNames } from "@blueprintjs/icons";
import PlayersListWeb from "./PlayersListWeb";
// import RosterDetailsPanel from "./RosterDetailsPanel";

export namespace RosterBody {
  export interface Props {
    roster: RosterList;
    rosterViewMode: RosterViewMode;
    selectedPlayer: Players;
    viewResults: () => void;
    selectRoster: (roster: RosterList) => void;
    selectNextRoster: () => void;
    selectPreviousRoster: () => void;
    selectNextPlayer: () => void;
    selectPreviousPlayer: () => void;
    selectRosterViewMode: (rosterViewMode: RosterViewMode) => void;
    selectPlayer: (player: Players) => void;
  }
}

export default class RosterBody extends React.Component<RosterBody.Props> {
  //   private scrollContainerRef = React.createRef<HTMLDivElement>();

  render() {
    const { roster, rosterViewMode } = this.props;
    const firstYear = roster === RIVAL_ROSTERS[0];
    const lastYear = roster === RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1];

    const rosterImageUrl = getImageUrlForRoster(roster.id);

    return (
      <div className="roster-body">
        <div className="body-top">
          <div className="top-left">
            <div className="nav-outer-container">
              <div className="outer-side -left">
                <Button
                  className="roster-control-button"
                  icon={IconNames.ARROW_LEFT}
                  minimal={true}
                  onClick={this.props.selectPreviousRoster}
                  disabled={firstYear}
                />
              </div>
              <div className="middle">
                <div
                  className={classNames(
                    "roster-team-photo",
                    Classes.ELEVATION_2
                  )}
                  style={{ backgroundImage: "url(" + rosterImageUrl + ")" }}
                />
              </div>
              <div className="outer-side -right">
                <Button
                  className="roster-control-button"
                  icon={IconNames.ARROW_RIGHT}
                  minimal={true}
                  onClick={this.props.selectNextRoster}
                  disabled={lastYear}
                />
              </div>
            </div>
            <div className="section -factoid">
              <div className="section-title -section-top-space">
                <span className="spacer" />
                <span className="title">{roster.displayName}</span>
                <span className="spacer" />
              </div>
              <div className="section-content">
                <Card className="roster-section-card">
                  <div className="section-card-label">Season Results</div>
                  {this.renderResultsCardContent()}
                </Card>
                <Card className="roster-section-card">
                  <div className="section-card-label">Leadership Team</div>
                  {this.renderCaptainsCardContent()}
                </Card>
                {roster.highlights.length !== 0 ? (
                  <Card className="roster-section-card">
                    <div className="section-card-label">Season Highlights</div>
                    {this.renderSeasonHighlightsCardContent()}
                  </Card>
                ) : null}
              </div>
            </div>
          </div>
          <div className="top-right">
            <div className="section-title -section-top-space">
              <span className="spacer" />
              <span className="title">Meet the Team</span>
              <span className="spacer" />
            </div>
            <ButtonGroup className="player-view-button-group" minimal={true}>
              <Button
                className="player-view-button"
                icon={IconNames.GRID_VIEW}
                onClick={() => {
                  this.props.selectRosterViewMode(RosterViewMode.ROSTER_INFO);
                  // if (this.scrollContainerRef.current) {
                  //   this.scrollContainerRef.current.scrollTop = 0;
                  // }
                }}
                active={rosterViewMode === RosterViewMode.ROSTER_INFO}
              />
              <Button
                className="player-view-button"
                icon={IconNames.PROPERTIES}
                onClick={() => {
                  this.props.selectRosterViewMode(
                    RosterViewMode.ROSTER_PLAYERS
                  );
                  //   if (this.scrollContainerRef.current) {
                  //     this.scrollContainerRef.current.scrollTop = 0;
                  //   }
                }}
                active={rosterViewMode === RosterViewMode.ROSTER_PLAYERS}
              />
              <Button
                className="player-view-button"
                icon={IconNames.USER}
                onClick={() => {
                  this.props.selectRosterViewMode(RosterViewMode.PLAYER_INFO);
                  //   if (this.scrollContainerRef.current) {
                  //     this.scrollContainerRef.current.scrollTop = 0;
                  //   }
                }}
                active={rosterViewMode === RosterViewMode.PLAYER_INFO}
              />
            </ButtonGroup>
            <Card
              className={classNames("roster-section-card players-card", {
                "-no-padding": rosterViewMode === RosterViewMode.ROSTER_PLAYERS
              })}
            >
              {rosterViewMode === RosterViewMode.ROSTER_INFO &&
                this.renderPlayersGrid()}
              {rosterViewMode === RosterViewMode.ROSTER_PLAYERS &&
                this.renderPlayersList()}
            </Card>
          </div>
        </div>
        <div className="body-bottom" />
      </div>
    );
  }

  private renderPlayersGrid() {
    const { roster, selectedPlayer, rosterViewMode } = this.props;
    const fullRoster = roster.players.concat(roster.coaches);

    return (
      <div className="players-section">
        {_.map(fullRoster, (player: Players, key: any) => (
          <RosterUserAvatar
            playerId={player}
            player={PLAYERS[player]}
            key={key}
            rosterId={roster.id}
            onClick={() => this.props.selectPlayer(player)}
            noColor={
              selectedPlayer !== player ||
              rosterViewMode !== RosterViewMode.PLAYER_INFO
            }
          />
        ))}
      </div>
    );
  }

  private renderPlayersList() {
    const { roster } = this.props;

    return (
      <div className="players-section">
        <PlayersListWeb
          onSelectPlayer={this.props.selectPlayer}
          rosterList={roster}
        />
      </div>
    );
  }

  private renderCaptainsCardContent() {
    const { roster } = this.props;

    return (
      <div className="section-card-value">
        {roster.captains.map(captain => (
          <Tooltip
            key={roster.id + "_" + captain}
            content={getDisplayNameForPlayer(PLAYERS[captain])}
          >
            <RosterUserAvatar
              playerId={captain}
              player={PLAYERS[captain]}
              rosterId={roster.id}
              hideBadge={true}
            />
          </Tooltip>
        ))}
        {roster.coaches.map(coach => (
          <Tooltip
            key={roster.id + "_" + coach}
            content={getDisplayNameForPlayer(PLAYERS[coach])}
          >
            <RosterUserAvatar
              playerId={coach}
              player={PLAYERS[coach]}
              rosterId={roster.id}
              hideBadge={true}
            />
          </Tooltip>
        ))}
      </div>
    );
  }

  private renderResultsCardContent() {
    const { roster } = this.props;

    return (
      <div className="section-card-value">
        <Tag
          intent={Intent.SUCCESS}
          minimal={true}
          className="season-result-tag"
          //   large={true}
        >
          {roster.results.wins}
        </Tag>
        <Tag
          intent={Intent.DANGER}
          minimal={true}
          className="season-result-tag"
          //   large={true}
        >
          {roster.results.losses}
        </Tag>
        <Tag
          intent={Intent.PRIMARY}
          minimal={true}
          className="season-result-tag"
          //   large={true}
        >
          {roster.results.finish}
        </Tag>
      </div>
    );
  }

  private renderSeasonHighlightsCardContent() {
    const { roster } = this.props;

    return (
      <div className="section-card-value">
        {roster.highlights.map((highlight, index) => (
          <div className="highlight-item" key={index}>
            {highlight}
          </div>
        ))}
      </div>
    );
  }
}
