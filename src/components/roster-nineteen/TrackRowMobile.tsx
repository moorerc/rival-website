import * as React from "react";
import "../../styles/RosterNineteenBody.css";

import * as _ from "lodash";
import { Track } from "src/data/roster-nineteen/RosterNinteenData";
import { getDisplayNameForPlayer } from "../basic/Helpers";
import {
  Icon,
  Menu,
  Popover,
  MenuItem,
  Classes,
  Position
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export namespace TrackRowMobile {
  export interface Props {
    track: Track;
  }
}

export default class TrackRowMobile extends React.Component<
  TrackRowMobile.Props
> {
  render() {
    const { track } = this.props;

    return (
      <div className="track-row-mobile">
        <span className="row-top">
          <div className="track-title">{track.title}</div>
          <div className="row-icon">
            <Popover
              content={
                <Menu className="play-menu">
                  <MenuItem
                    icon={<Icon icon={IconNames.MUSIC} />}
                    label="Play Song"
                    onClick={this.handleClickTrack}
                  />
                </Menu>
              }
              position={Position.BOTTOM_RIGHT}
              minimal={true}
              className={Classes.DARK}
            >
              <Icon icon={IconNames.MORE} iconSize={10} />
            </Popover>
          </div>
        </span>
        <span className="row-bottom">
          <div className="track-artist">
            {getDisplayNameForPlayer(track.artist)}
            <Icon className="artist-dot" icon={IconNames.DOT} iconSize={6} />
            <span>Track {track.artist.jersey}</span>
          </div>
        </span>
      </div>
    );
  }

  private handleClickTrack = () => {
    window.open(this.props.track.link, "_blank");
  };
}
