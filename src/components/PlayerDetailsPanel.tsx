import { Card, Elevation, Tag, Intent, ButtonGroup } from "@blueprintjs/core";
// import * as classNames from "classnames";
import * as React from "react";
import "../styles/App.css";
import "../styles/PlayerDetailsPanel.css";
import { getDisplayNameForPlayer } from "./Helpers";
import { Player } from "src/data/Players";
import * as classNames from "classnames";
// import { IconNames } from "@blueprintjs/icons";
// import { Link } from "react-router-dom";

interface PlayerDetailsPanelProps {
    // playerId: Players | undefined;
    rosterId: string;
    player: Player | undefined;
    shrunk: boolean;
}

export default class PlayerDetailsPanel extends React.Component<PlayerDetailsPanelProps> {
  render() {
    const { player, shrunk } = this.props;
    // const playerImage = getImageUrlForPlayer(rosterId, playerId);
    // const playerActionImage = getImageUrlForPlayerAction(rosterId, playerId);

    if (!player) {
        return (
        <div className={classNames("player-details-panel", {"-shrunk": shrunk})}>
            <Card>Meet the Players</Card>
        </div>
        );
    }
    return (
        <div className={classNames("player-details-panel", {"-shrunk": shrunk})}>
            <Card interactive={false} elevation={Elevation.TWO} className="details-panel-card">
                <div className="panel-header">{getDisplayNameForPlayer(player)}</div>
                <div className="panel-body">
                    {/* <div className="panel-divider" /> */}
                    <div className="panel-section">
                        <div className="panel-section-title">
                            <div className="title-text">Season Results</div>
                            <div className="title-divider" />
                        </div>
                        <div className="leadership-section">
                            <div className="section-label">
                                Overall Record:
                            </div>
                            <div className="section-items">
                                <Tag intent={Intent.SUCCESS} minimal={true} className="section-tag">{4}</Tag>
                                <Tag intent={Intent.DANGER} minimal={true} className="section-tag">{0}</Tag>
                            </div>
                        </div>
                        <div className="leadership-section">
                            <div className="section-label">
                                Overall Finish:
                            </div>
                            <div className="section-items">
                                <Tag intent={Intent.PRIMARY} minimal={true} className="section-tag">something</Tag>
                            </div>
                        </div>
                    </div>
                    {/* <div className="panel-divider -light" /> */}
                    <div className="panel-section">
                        <div className="panel-section-title">
                            <div className="title-text">TEAM LEADERSHIP</div>
                            <div className="title-divider" />
                        </div>
                        {/* <div className="leadership-section">
                            <div className="section-label">
                                Captained by:
                            </div>
                            <div className="section-items">
                                {roster.captains.map(captain => <RosterUserAvatar player={captain} rosterId={roster.id} hideBadge={true} />)}
                            </div>
                        </div>
                        <div className="leadership-section">
                            <div className="section-label">
                                Coached by:
                            </div>
                            <div className="section-items">
                                {roster.coaches.map(coach => <RosterUserAvatar player={coach} rosterId={roster.id} hideBadge={true} />)}
                            </div>
                        </div> */}
                    </div>
                    {/* {(roster.highlights.length !== 0) ? <div className="panel-section">
                        <div className="panel-section-title">
                            <div className="title-text">Season Highlights</div>
                            <div className="title-divider" />
                        </div>
                        <div className="highlights-section-items">
                        {roster.highlights.map(highlight => <div className="highlight-item">{highlight}</div>)}
                        </div>
                    </div> : undefined} */}
                </div>
                <ButtonGroup className="panel-footer">
                    {/* <Button className="footer-button" text="USAU Roster" icon={<Icon icon={IconNames.GLOBE} iconSize={10} />} /> */}
                    {/* <Button className="footer-button" text="Sched/Results" icon={<Icon icon={IconNames.CALENDAR} iconSize={10}/>}>
                        <Link
                            className="base-nav-bar-item-text"
                            to={"/results"}
                        />
                    </Button> */}
                </ButtonGroup>
            </Card>
        </div>
    );
  }
}
