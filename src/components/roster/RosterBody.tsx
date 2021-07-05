import * as React from "react";
import "../../styles/RosterBody.css";

import * as _ from "lodash";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { RosterViewMode } from "src/pages/Roster";
import { Players, PLAYERS } from "src/data/Players";
import {
  getImageUrlForRoster,
  getDisplayNameForPlayer,
  getImageUrlForPlayerAction,
  getYearsOnRival,
  isPlayerACoach,
  openLinkInNewTab
} from "../basic/Helpers";
import {
  Classes,
  Card,
  Tooltip,
  Tag,
  Intent,
  Button,
  ButtonGroup,
  Icon
} from "@blueprintjs/core";
import classNames from "classnames";
import RosterUserAvatar from "./RosterUserAvatar";
import { IconNames } from "@blueprintjs/icons";
import PlayersListWeb from "./PlayersListWeb";

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

  render() {
    const { roster, rosterViewMode } = this.props;
    const firstYear = roster === RIVAL_ROSTERS[0];
    const lastYear = roster === RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1];

    const rosterImageUrl = getImageUrlForRoster(roster.id);
    const rosterAnnounceLink = roster.rosterAnnounceLink;

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
              <Card className="section-content">
                <div className="roster-section-card">
                  <div className="section-card-label">Season Results</div>
                  {this.renderResultsCardContent()}
                </div>
                <div className="roster-section-card">
                  <div className="section-card-label">Leadership Team</div>
                  {this.renderCaptainsCardContent()}
                </div>
                {roster.highlights.length !== 0 ? (
                  <div className="roster-section-card last-card">
                    <div className="section-card-label">Season Highlights</div>
                    {this.renderSeasonHighlightsCardContent()}
                  </div>
                ) : null}
              </Card>
              <ButtonGroup className="roster-view-button-group">
                <Button
                  className="roster-view-button"
                  minimal={true}
                  icon={<Icon icon={IconNames.GLOBE} iconSize={14} />}
                  text="USAU Roster"
                  onClick={() => openLinkInNewTab(roster.link)}
                />
                {rosterAnnounceLink !== undefined && (
                  <Button
                    className="roster-view-button"
                    minimal={true}
                    icon={<Icon icon={IconNames.MOBILE_VIDEO} iconSize={14} />}
                    text="Roster Release"
                    onClick={() => openLinkInNewTab(rosterAnnounceLink)}
                  />
                )}
                <Button
                  className="roster-view-button"
                  minimal={true}
                  icon={<Icon icon={IconNames.CALENDAR} iconSize={14} />}
                  text="Sched/Results"
                  onClick={this.props.viewResults}
                />
              </ButtonGroup>
            </div>
          </div>
          <div className="top-right">
            <div className="section-title -section-top-space">
              <span className="spacer" />
              <span className="title">Meet the Team</span>
              <span className="spacer" />
            </div>
            <ButtonGroup className="player-view-button-group">
              <Button
                className="player-view-button"
                icon={IconNames.GRID_VIEW}
                onClick={() => {
                  this.props.selectRosterViewMode(RosterViewMode.ROSTER_INFO);
                }}
                active={rosterViewMode === RosterViewMode.ROSTER_INFO}
                minimal={true}
              />
              <Button
                className="player-view-button"
                icon={IconNames.PROPERTIES}
                onClick={() => {
                  this.props.selectRosterViewMode(
                    RosterViewMode.ROSTER_PLAYERS
                  );
                }}
                active={rosterViewMode === RosterViewMode.ROSTER_PLAYERS}
                minimal={true}
              />
              <Button
                className="player-view-button"
                icon={IconNames.USER}
                onClick={() => {
                  this.props.selectRosterViewMode(RosterViewMode.PLAYER_INFO);
                }}
                active={rosterViewMode === RosterViewMode.PLAYER_INFO}
                minimal={true}
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
              {rosterViewMode === RosterViewMode.PLAYER_INFO &&
                this.renderPlayerInfo()}
            </Card>
          </div>
        </div>
        <div className="body-bottom" />
      </div>
    );
  }

  private renderPlayersGrid() {
    const {
      roster
    } = this.props;
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

  private renderPlayerInfo() {
    const { roster, selectedPlayer } = this.props;
    let imageUrl = getImageUrlForPlayerAction(roster.id, selectedPlayer);
    const fullRoster = roster.players.concat(roster.coaches);
    const firstPlayer = selectedPlayer === fullRoster[0];
    const lastPlayer = selectedPlayer === fullRoster[fullRoster.length - 1];
    const isCoach = isPlayerACoach(roster.id, selectedPlayer);
    const yearsOnRival = getYearsOnRival(selectedPlayer);

    return (
      <div className="player-info-section">
        <div className="info-section-top">
          <Button
            className="roster-control-button -small -left"
            icon={<Icon icon={IconNames.ARROW_LEFT} iconSize={10} />}
            minimal={true}
            onClick={this.props.selectPreviousPlayer}
            disabled={firstPlayer}
          />
          <div
            className={classNames("image-panel -player", {
              "-vertical":
                roster.year === 2015 ||
                roster.year === 2016 ||
                roster.year === 2017 ||
                roster.year === 2019
            })}
          >
            <div
              className={classNames("roster-team-photo", Classes.ELEVATION_2)}
              style={{ backgroundImage: "url(" + imageUrl + ")" }}
            />
          </div>
          <Button
            className="roster-control-button -small -right"
            icon={<Icon icon={IconNames.ARROW_RIGHT} iconSize={10} />}
            minimal={true}
            onClick={this.props.selectNextPlayer}
            disabled={lastPlayer}
          />
        </div>
        <div className="info-section-bottom">
          <div className="section -factoid">
            <div className="section-title -section-top-space">
              <span className="spacer" />
              <span className="title">
                {getDisplayNameForPlayer(PLAYERS[selectedPlayer])}
              </span>
              <span className="spacer" />
            </div>
            <div className="section-content">
              <div className="roster-section-card">
                <div className="section-card-label">Jersey Number</div>
                <div className="section-card-value">
                  <Tag
                    intent={Intent.WARNING}
                    minimal={true}
                    className="section-tag"
                    icon={
                      isCoach ? (
                        <Icon icon={IconNames.CLIPBOARD} iconSize={10} />
                      ) : (
                        undefined
                      )
                    }
                  >
                    {PLAYERS[selectedPlayer].jersey}
                  </Tag>
                </div>
              </div>
              <div className="roster-section-card">
                <div className="section-card-label">Position</div>
                <div className="section-card-value">
                  <Tag
                    intent={Intent.WARNING}
                    minimal={true}
                    className="section-tag"
                  >
                    {PLAYERS[selectedPlayer].position}
                  </Tag>
                </div>
              </div>
              <div className="roster-section-card">
                <div className="section-card-label">Years on Rival</div>
                <div className="section-card-value">
                  {_.map(yearsOnRival, year => (
                    <Tag
                      intent={Intent.WARNING}
                      minimal={true}
                      className="section-tag"
                      key={year}
                    >
                      {year}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
              onClick={() => this.props.selectPlayer(captain)}
              noColor={true}
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
              onClick={() => this.props.selectPlayer(coach)}
              noColor={true}
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
        >
          {roster.results.wins}
        </Tag>
        <Tag
          intent={Intent.DANGER}
          minimal={true}
          className="season-result-tag"
        >
          {roster.results.losses}
        </Tag>
        {roster.results.finish !== "" && (
          <Tag
            intent={Intent.PRIMARY}
            minimal={true}
            className="season-result-tag"
          >
            {roster.results.finish}
          </Tag>
        )}
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
