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
  Intent
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import * as _ from "lodash";
// import PlayersList from "src/components/roster/PlayersList";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { RosterViewMode } from "src/pages/Roster";
import PlayersList from "./PlayersList";
import { getImageUrlForRoster, openLinkInNewTab } from "../basic/Helpers";
import RosterUserAvatar from "./RosterUserAvatar";
import { PLAYERS, Players } from "src/data/Players";

interface MobileRosterBodyProps {
  roster: RosterList;
  rosterViewMode: RosterViewMode;
  selectedPlayer?: Players;
  selectRoster: (roster: RosterList) => void;
  selectNextRoster: () => void;
  selectPreviousRoster: () => void;
  selectRosterViewMode: (rosterViewMode: RosterViewMode) => void;
  selectPlayer: (player: Players) => void;
}

export default class MobileRosterBody extends React.Component<
  MobileRosterBodyProps
> {
  render() {
    // const { roster } = this.props;
    // const firstYear = roster === RIVAL_ROSTERS[0];
    // const lastYear = roster === RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1];

    return (
      <React.Fragment>
        {this.renderViewModeButtonGroup()}
        <div className="mobile-roster-body-scroll-container">
          {this.renderContent()}
        </div>
        {this.props.rosterViewMode === RosterViewMode.ROSTER_INFO &&
          this.renderFooterButtonGroup()}
      </React.Fragment>
    );
  }

  private renderContent() {
    const { roster, rosterViewMode, selectedPlayer } = this.props;
    console.log(selectedPlayer);

    switch (rosterViewMode) {
      case RosterViewMode.ROSTER_PLAYERS:
        return <PlayersList onSelectPlayer={this.props.selectPlayer} rosterList={roster} />;
      case RosterViewMode.ROSTER_INFO:
        return (
          <React.Fragment>
            {this.renderImagePanel()}
            {this.renderInfoPanel()}
          </React.Fragment>
        );
      case RosterViewMode.PLAYER_INFO:
        return (
          <div>player info view: {selectedPlayer ? PLAYERS[selectedPlayer].name.first : ""}</div>
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
          onClick={() =>
            this.props.selectRosterViewMode(RosterViewMode.ROSTER_INFO)
          }
          active={rosterViewMode === RosterViewMode.ROSTER_INFO}
        />
        <Button
          icon={IconNames.PEOPLE}
          onClick={() =>
            this.props.selectRosterViewMode(RosterViewMode.ROSTER_PLAYERS)
          }
          active={rosterViewMode === RosterViewMode.ROSTER_PLAYERS}
        />
        <Button
          icon={IconNames.PERSON}
          onClick={() =>
            this.props.selectRosterViewMode(RosterViewMode.PLAYER_INFO)
          }
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
          disabled={true}
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
            onClick={() => this.props.selectRoster(roster)}
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
          className="roster-team-photo"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        />
      </div>
    );
  };

  private renderInfoPanel = () => {
    const { roster } = this.props;

    return (
      <React.Fragment>
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
                <RosterUserAvatar
                  playerId={captain}
                  player={PLAYERS[captain]}
                  rosterId={roster.id}
                  hideBadge={true}
                  key={roster.id + "_" + captain}
                />
              ))}
            </div>
          </div>
          <div className="leadership-section">
            <div className="section-label">Coached by:</div>
            <div className="section-items">
              {roster.coaches.map(coach => (
                <RosterUserAvatar
                  playerId={coach}
                  player={PLAYERS[coach]}
                  rosterId={roster.id}
                  hideBadge={true}
                  key={roster.id + "_" + coach}
                />
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
