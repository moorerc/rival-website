import {
  Button,
  ButtonGroup,
  Card,
  Elevation,
  Icon,
  Tag,
  Intent
} from "@blueprintjs/core";
import * as React from "react";
import "../../styles/App.css";
import "../../styles/RosterDetailsPanel.css";
import { RosterList } from "src/data/RosterList";
import { IconNames } from "@blueprintjs/icons";
import RosterUserAvatar from "./RosterUserAvatar";
import { Link } from "react-router-dom";
import { PLAYERS } from "src/data/Players";

interface RosterDetailsPanelProps {
  roster: RosterList;
  shrunk: boolean;
  onSelectRoster: (roster: RosterList) => void;
}

export default class RosterDetailsPanel extends React.Component<
  RosterDetailsPanelProps
> {
  private openLinkInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  render() {
    const { roster, shrunk } = this.props;

    if (shrunk) {
      return (
        <div
          className="roster-details-panel -shrunk"
          onClick={() => this.props.onSelectRoster(roster)}
        >
          <Card
            interactive={false}
            elevation={Elevation.TWO}
            className="details-panel-card"
          >
            <div className="panel-header">{roster.displayName}</div>
          </Card>
        </div>
      );
    }

    return (
      <div className="roster-details-panel">
        <Card
          interactive={false}
          elevation={Elevation.TWO}
          className="details-panel-card"
        >
          <div className="panel-header">{roster.displayName}</div>
          <div className="panel-body">
            <div className="panel-section">
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
            </div>
            <div className="panel-section">
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
                    />
                  ))}
                </div>
              </div>
            </div>
            {roster.highlights.length !== 0 ? (
              <div className="panel-section">
                <div className="panel-section-title">
                  <div className="title-text">Season Highlights</div>
                  <div className="title-divider" />
                </div>
                <div className="highlights-section-items">
                  {roster.highlights.map(highlight => (
                    <div className="highlight-item">{highlight}</div>
                  ))}
                </div>
              </div>
            ) : (
              undefined
            )}
          </div>
          <ButtonGroup className="panel-footer">
            <Button
              className="footer-button"
              text="USAU Roster"
              icon={<Icon icon={IconNames.GLOBE} iconSize={10} />}
              onClick={() => this.openLinkInNewTab(roster.link)}
            />
            {roster.rosterAnnounceLink !== undefined ? (
              <Button
                className="footer-button"
                text="Roster Release"
                icon={<Icon icon={IconNames.MOBILE_VIDEO} iconSize={10} />}
                onClick={() =>
                  this.openLinkInNewTab(roster.rosterAnnounceLink || "")
                }
              />
            ) : (
              undefined
            )}
            <Button
              className="footer-button"
              text="Sched/Results"
              icon={<Icon icon={IconNames.CALENDAR} iconSize={10} />}
              disabled={true}
            >
              <Link className="web-nav-bar-item-text" to={"/results"} />
            </Button>
          </ButtonGroup>
        </Card>
      </div>
    );
  }
}
