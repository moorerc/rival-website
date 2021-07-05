import * as React from "react";
import "../../styles/RosterNineteenBody.css";

import * as _ from "lodash";
import { Button, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import TrackRow from "./TrackRow";
import {
  Playlist,
  PLAYLISTS,
  RIVAL_2019_PLAYLIST
} from "src/data/roster-nineteen/RosterNinteenData";
import AlbumCover from "./AlbumCover";

export namespace RosterNineteenBody {
  export interface Props {
    playlist: Playlist;
    selectPlaylist: (playlist: Playlist) => void;
    nextPlaylist: () => void;
    previousPlaylist: () => void;
  }
}

export default class RosterNineteenBody extends React.Component<
  RosterNineteenBody.Props
> {
  private scrollContainerRef = React.createRef<any>();

  render() {
    const { playlist } = this.props;
    const firstPlaylist = playlist === PLAYLISTS[0];
    const lastPlaylist = playlist === PLAYLISTS[PLAYLISTS.length - 1];

    const sortedTracks = _.sortBy(
      playlist.trackList,
      track => track.artist.jersey
    );

    const specialTrack = playlist === RIVAL_2019_PLAYLIST;

    return (
      <div className="roster-nineteen-body">
        <div className="body-top">
          <div className="side-nav left-nav">
            <Button
              className="roster-control-button"
              icon={<Icon icon={IconNames.CHEVRON_LEFT} iconSize={20} />}
              minimal={true}
              onClick={this.props.previousPlaylist}
              disabled={firstPlaylist}
            />
          </div>
          <div className="content">
            <div className="content-left">
              <div
                className="playlist-cover-container"
                style={{
                  backgroundImage: `url(/img/roster-nineteen/playlist-covers/${
                    playlist.image
                  })`
                }}
              />
            </div>
            <div className="content-right">
              <div className="playlist-text">
                <div className="playlist-title-header">Playlist</div>
                <div className="playlist-title">{playlist.title}</div>
                <div className="playlist-description">
                  {playlist.description}
                </div>
              </div>
              <div className="tracks-table">
                <div className="tracks-table-header table-row">
                  <div className="table-col col-play">
                    <Icon className="play-icon" icon={IconNames.PLAY} />
                  </div>
                  <div className="table-col col-track">Track</div>
                  {!specialTrack && (
                    <div className="table-col col-title">Title</div>
                  )}
                  <div className="table-col col-artist">Artist</div>
                  {/* <div className="table-col col-duration">Dur</div> */}
                </div>
                <div className="tracks-table-body">
                  {sortedTracks.map((track, index) => (
                    <TrackRow
                      key={"track_" + index}
                      track={track}
                      specialTrack={specialTrack}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="side-nav right-nav">
            <Button
              className="roster-control-button"
              icon={<Icon icon={IconNames.CHEVRON_RIGHT} iconSize={20} />}
              minimal={true}
              onClick={this.props.nextPlaylist}
              disabled={lastPlaylist}
            />
          </div>
        </div>
        <div className="body-bottom" ref={this.scrollContainerRef}>
          {PLAYLISTS.map((p, index) => (
            <AlbumCover
              playlist={p}
              isSelected={p === playlist}
              onClick={this.props.selectPlaylist}
              key={"playlist_" + index}
            />
          ))}
        </div>
      </div>
    );
  }
}
