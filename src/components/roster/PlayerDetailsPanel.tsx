import { Card, Elevation, ButtonGroup, NonIdealState } from "@blueprintjs/core";
import * as React from "react";
import "../../styles/App.css";
import "../../styles/PlayerDetailsPanel.css";
import { getDisplayNameForPlayer } from "../basic/Helpers";
import { Player } from "src/data/Players";
import { IconNames } from "@blueprintjs/icons";

interface PlayerDetailsPanelProps {
  rosterId: string;
  player: Player;
}

export default class PlayerDetailsPanel extends React.Component<
  PlayerDetailsPanelProps
> {
  render() {
    const { player } = this.props;
    // const playerImage = getImageUrlForPlayer(rosterId, playerId);
    // const playerActionImage = getImageUrlForPlayerAction(rosterId, playerId);

    return (
      <div className="player-details-panel">
        <Card
          interactive={false}
          elevation={Elevation.TWO}
          className="details-panel-card"
        >
          <div className="panel-header">{getDisplayNameForPlayer(player)}</div>
          <div className="panel-body">
            <NonIdealState
              className="empty-bio"
              icon={IconNames.EDIT}
              description="Player bios coming soon!"
            />
          </div>
          <ButtonGroup className="panel-footer">
            {/* <Button className="footer-button" text="USAU Roster" icon={<Icon icon={IconNames.GLOBE} iconSize={10} />} /> */}
            {/* <Button className="footer-button" text="Sched/Results" icon={<Icon icon={IconNames.CALENDAR} iconSize={10}/>}>
                        <Link
                            className="web-nav-bar-item-text"
                            to={"/results"}
                        />
                    </Button> */}
          </ButtonGroup>
        </Card>
      </div>
    );
  }
}
