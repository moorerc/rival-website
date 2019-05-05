import * as React from "react";
import "../../styles/Roster.css";

import {
  Button,
  ButtonGroup,
  Popover,
  Position,
  Menu,
  MenuItem,
  Icon,
  Card,
  Tag,
  Intent,
  Classes,
  Tooltip
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import * as classNames from "classnames";
import * as _ from "lodash";
// import PlayersList from "src/components/roster/PlayersList";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { RosterViewMode } from "src/pages/Roster";
import PlayersList from "./PlayersList";
import {
  getImageUrlForRoster,
  openLinkInNewTab,
  getImageUrlForPlayerAction,
  getDisplayNameForPlayer,
  isPlayerACoach,
  getYearsOnRival
} from "../basic/Helpers";
import RosterUserAvatar from "./RosterUserAvatar";
import { PLAYERS, Players } from "src/data/Players";
import MobileHeader from "../basic/MobileHeader";

interface MobileRosterBodyProps {
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

export default class MobileRosterBody extends React.Component<
  MobileRosterBodyProps
> {
  private scrollContainerRef = React.createRef<HTMLDivElement>();

  render() {
    // const { roster } = this.props;
    // const firstYear = roster === RIVAL_ROSTERS[0];
    // const lastYear = roster === RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1];

    return (
      <React.Fragment>
        {this.renderViewModeButtonGroup()}
        <div
          className="mobile-roster-body-scroll-container"
          ref={this.scrollContainerRef}
        >
          {this.renderContent()}
        </div>
        {this.props.rosterViewMode === RosterViewMode.ROSTER_INFO &&
          this.renderFooterButtonGroup()}
      </React.Fragment>
    );
  }

  private renderContent() {
    const { roster, rosterViewMode } = this.props;

    switch (rosterViewMode) {
      case RosterViewMode.ROSTER_PLAYERS:
        return (
          <PlayersList
            onSelectPlayer={this.props.selectPlayer}
            rosterList={roster}
          />
        );
      case RosterViewMode.ROSTER_INFO:
        return (
          <React.Fragment>
            {this.renderImagePanel()}
            {this.renderInfoPanel()}
          </React.Fragment>
        );
      case RosterViewMode.PLAYER_INFO:
        return (
          <React.Fragment>
            {this.renderPlayerImagePanel()}
            {this.renderPlayerInfoPanel()}
          </React.Fragment>
        );
      default:
        return <div />;
    }
  }

  private renderViewModeButtonGroup() {
    const { roster, rosterViewMode } = this.props;
    return (
      <ButtonGroup
        minimal={true}
        fill={true}
        className="mobile-roster-button-group"
      >
        <Popover
          content={this.rosterSelectMenu()}
          position={Position.BOTTOM}
          minimal={true}
          className="mobile-roster-select-menu"
          popoverClassName="mobile-roster-select-menu-popover"
        >
          <Button
            rightIcon={IconNames.CHEVRON_DOWN}
            text={roster.displayName}
          />
        </Popover>
        <Button
          icon={IconNames.INFO_SIGN}
          onClick={() => {
            this.props.selectRosterViewMode(RosterViewMode.ROSTER_INFO);
            if (this.scrollContainerRef.current) {
              this.scrollContainerRef.current.scrollTop = 0;
            }
          }}
          active={rosterViewMode === RosterViewMode.ROSTER_INFO}
        />
        <Button
          icon={IconNames.PROPERTIES}
          onClick={() => {
            this.props.selectRosterViewMode(RosterViewMode.ROSTER_PLAYERS);
            if (this.scrollContainerRef.current) {
              this.scrollContainerRef.current.scrollTop = 0;
            }
          }}
          active={rosterViewMode === RosterViewMode.ROSTER_PLAYERS}
        />
        <Button
          icon={IconNames.PERSON}
          onClick={() => {
            this.props.selectRosterViewMode(RosterViewMode.PLAYER_INFO);
            if (this.scrollContainerRef.current) {
              this.scrollContainerRef.current.scrollTop = 0;
            }
          }}
          active={rosterViewMode === RosterViewMode.PLAYER_INFO}
        />
      </ButtonGroup>
    );
  }

  private renderFooterButtonGroup() {
    const { roster } = this.props;
    const rosterAnnounceLink = roster.rosterAnnounceLink;

    return (
      <ButtonGroup
        minimal={true}
        fill={true}
        className="mobile-roster-button-group-footer"
      >
        <Button
          icon={<Icon icon={IconNames.GLOBE} iconSize={10} />}
          text="USAU Roster"
          className="footer-button"
          onClick={() => openLinkInNewTab(roster.link)}
        />
        {rosterAnnounceLink !== undefined && (
          <Button
            icon={<Icon icon={IconNames.MOBILE_VIDEO} iconSize={10} />}
            text="Roster Release"
            className="footer-button"
            onClick={() => openLinkInNewTab(rosterAnnounceLink)}
          />
        )}
        <Button
          icon={<Icon icon={IconNames.CALENDAR} iconSize={10} />}
          text="Sched/Results"
          className="footer-button"
          // disabled={true}
          onClick={this.props.viewResults}
        />
      </ButtonGroup>
    );
  }

  private rosterSelectMenu() {
    return (
      <Menu>
        {RIVAL_ROSTERS.map(roster => (
          <MenuItem
            key={roster.id}
            text={roster.displayName}
            onClick={() => {
              this.props.selectRoster(roster);
              if (this.scrollContainerRef.current) {
                this.scrollContainerRef.current.scrollTop = 0;
              }
            }}
          />
        ))}
      </Menu>
    );
  }

  private renderImagePanel = () => {
    const { roster } = this.props;
    let imageUrl = getImageUrlForRoster(roster.id);

    return (
      <div className="image-panel">
        <div
          className={classNames("roster-team-photo", Classes.ELEVATION_2)}
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        />
      </div>
    );
  };

  private renderPlayerImagePanel = () => {
    const { roster, selectedPlayer } = this.props;
    let imageUrl = getImageUrlForPlayerAction(roster.id, selectedPlayer);
    const fullRoster = roster.players.concat(roster.coaches);
    const firstPlayer = selectedPlayer === fullRoster[0];
    const lastPlayer = selectedPlayer === fullRoster[fullRoster.length - 1];

    return (
      <div className="mobile-player-image-panel">
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
              roster.year === 2017
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
    );
  };

  private renderPlayerInfoPanel = () => {
    const { selectedPlayer, roster } = this.props;
    const isCoach = isPlayerACoach(roster.id, selectedPlayer);
    const yearsOnRival = getYearsOnRival(selectedPlayer);

    return (
      <React.Fragment>
        <MobileHeader
          title={getDisplayNameForPlayer(PLAYERS[selectedPlayer])}
        />
        <Card className="panel-section">
          <div className="panel-section-title">
            <div className="title-text">Basic Info</div>
            <div className="title-divider" />
          </div>
          <div className="leadership-section">
            <div className="section-label">Jersey Number:</div>
            <div className="section-items">
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
          <div className="leadership-section">
            <div className="section-label">Position:</div>
            <div className="section-items">
              <Tag
                intent={Intent.WARNING}
                minimal={true}
                className="section-tag"
              >
                {PLAYERS[selectedPlayer].position}
              </Tag>
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Years on Rival:</div>
            <div className="section-items">
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
        </Card>
        {/* <Card className="panel-section">
          <div className="panel-section-title">
            <div className="title-text">Fun Facts</div>
            <div className="title-divider" />
          </div>
          <div className="leadership-section">
            <div className="section-label">Profession:</div>
            <div className="section-items">
              <Tag intent={Intent.NONE} minimal={true} className="section-tag">
                Engineer
              </Tag>
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Spirit Animal:</div>
            <div className="section-items">
              <Tag intent={Intent.NONE} minimal={true} className="section-tag">
                Gecko
              </Tag>
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Autobiography Title:</div>
            <div className="section-items">
              <Tag intent={Intent.NONE} minimal={true} className="section-tag">
                Coming soon
              </Tag>
            </div>
          </div>
        </Card> */}
      </React.Fragment>
    );
  };

  private renderInfoPanel = () => {
    const { roster } = this.props;

    return (
      <React.Fragment>
        <MobileHeader title={roster.displayName} />
        <Card className="panel-section">
          <div className="panel-section-title">
            <div className="title-text">Season Results</div>
            <div className="title-divider" />
          </div>
          <div className="leadership-section">
            <div className="section-label">Overall Record:</div>
            <div className="section-items">
              <Tag
                intent={Intent.SUCCESS}
                minimal={true}
                className="section-tag"
              >
                {roster.results.wins}
              </Tag>
              <Tag
                intent={Intent.DANGER}
                minimal={true}
                className="section-tag"
              >
                {roster.results.losses}
              </Tag>
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Overall Finish:</div>
            <div className="section-items">
              <Tag
                intent={Intent.PRIMARY}
                minimal={true}
                className="section-tag"
              >
                {roster.results.finish}
              </Tag>
            </div>
          </div>
        </Card>
        <Card className="panel-section">
          <div className="panel-section-title">
            <div className="title-text">TEAM LEADERSHIP</div>
            <div className="title-divider" />
          </div>
          <div className="leadership-section">
            <div className="section-label">Captained by:</div>
            <div className="section-items">
              {roster.captains.map(captain => (
                <Tooltip content={getDisplayNameForPlayer(PLAYERS[captain])}>
                  <RosterUserAvatar
                    playerId={captain}
                    player={PLAYERS[captain]}
                    rosterId={roster.id}
                    hideBadge={true}
                    key={roster.id + "_" + captain}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Coached by:</div>
            <div className="section-items">
              {roster.coaches.map(coach => (
                <Tooltip content={getDisplayNameForPlayer(PLAYERS[coach])}>
                  <RosterUserAvatar
                    playerId={coach}
                    player={PLAYERS[coach]}
                    rosterId={roster.id}
                    hideBadge={true}
                    key={roster.id + "_" + coach}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
        </Card>
        {roster.highlights.length !== 0 ? (
          <Card className="panel-section">
            <div className="panel-section-title">
              <div className="title-text">Season Highlights</div>
              <div className="title-divider" />
            </div>
            <div className="highlights-section-items">
              {roster.highlights.map((highlight, index) => (
                <div className="highlight-item" key={index}>
                  {highlight}
                </div>
              ))}
            </div>
          </Card>
        ) : (
          undefined
        )}
      </React.Fragment>
    );
  };
}
