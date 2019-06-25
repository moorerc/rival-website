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
    specialTrack?: boolean;
  }
}

export default class TrackRowMobile extends React.Component<
  TrackRowMobile.Props
> {
  render() {
    const { track, specialTrack } = this.props;
    const num = track.artist.jersey === undefined ? "C" : track.artist.jersey;

    return (
      <div className="track-row-mobile">
        <span className="row-top">
          <div className="track-title">
            {specialTrack
              ? num + " - " + getDisplayNameForPlayer(track.artist)
              : track.title}
          </div>
          {specialTrack !== true ? (
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
          ) : (
            <div className="row-icon">
              <Icon icon={IconNames.HEART} iconSize={10} />
            </div>
          )}
        </span>
        <span className="row-bottom">
          {specialTrack !== true && (
            <div className="track-artist">
              {getDisplayNameForPlayer(track.artist)}
              <Icon className="artist-dot" icon={IconNames.DOT} iconSize={6} />
              <span>
                Track{" "}
                {track.artist.jersey === undefined ? "C" : track.artist.jersey}
              </span>
            </div>
          )}
        </span>
      </div>
    );
  }

  private handleClickTrack = () => {
    window.open(this.props.track.link, "_blank");
  };
}
