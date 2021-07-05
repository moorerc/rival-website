import * as React from "react";
import "../../styles/RosterNinteenMobileBody.css";

import * as _ from "lodash";
import {
  Playlist,
  CATEGORIES,
  RIVAL_2019_PLAYLIST
} from "src/data/roster-nineteen/RosterNinteenData";
import AlbumCover from "./AlbumCover";
import TrackRowMobile from "./TrackRowMobile";
import { IconNames } from "@blueprintjs/icons";
import { Icon } from "@blueprintjs/core";

export namespace RosterNineteenMobileBody {
  export interface Props {
    playlist: Playlist;
    selectPlaylist: (playlist: Playlist) => void;
    nextPlaylist: () => void;
    previousPlaylist: () => void;
  }

  export interface State {
    mode: RosterNineteenMode;
  }
}

export enum RosterNineteenMode {
  PLAYLIST = "PLAYLIST",
  LIST = "LIST"
}

export default class RosterNineteenMobileBody extends React.Component<
  RosterNineteenMobileBody.Props,
  RosterNineteenMobileBody.State
> {
  state: RosterNineteenMobileBody.State = {
    mode: RosterNineteenMode.LIST
  };

  private scrollContainerRef = React.createRef<any>();

  render() {
    return (
      <div
        className="roster-nineteen-mobile-body"
        ref={this.scrollContainerRef}
      >
        {this.state.mode === RosterNineteenMode.LIST
          ? this.renderListView()
          : this.renderPlaylistView()}
      </div>
    );
  }

  private renderListView = () => {
    return (
      <React.Fragment>
        {CATEGORIES.map(category => {
          return (
            <div className="category-container" key={category.title}>
              <div className="category-title">{category.title}</div>
              <div className="category-description">{category.description}</div>
              <div className="playlists-container">
                {category.playlists.map((p, index) => (
                  <AlbumCover
                    playlist={p}
                    isSelected={false}
                    onClick={this.handleSelectPlaylist}
                    key={"playlist_" + index}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  private renderPlaylistView = () => {
    const { playlist } = this.props;

    const sortedTracks = _.sortBy(
      playlist.trackList,
      track => track.artist.jersey
    );

    return (
      <div className="mobile-playlist-view">
        <div className="top-buttons-container">
          <Icon
            icon={IconNames.CHEVRON_LEFT}
            onClick={() => this.handleChangeMode(RosterNineteenMode.LIST)}
            iconSize={20}
          />
        </div>
        <div className="playlist-scroll-container">
          <AlbumCover
            playlist={playlist}
            includeFullTitle={true}
            isSelected={false}
            onClick={() => {}}
          />
          <div className="playlist-desc">{playlist.description}</div>
          <div className="mobile-tracks-list">
            {sortedTracks.map((track, index) => (
              <TrackRowMobile
                key={"track_" + index}
                track={track}
                specialTrack={playlist === RIVAL_2019_PLAYLIST}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  private handleChangeMode = (newMode: RosterNineteenMode) => {
    this.setState({ mode: newMode });
  };

  private handleSelectPlaylist = (playlist: Playlist) => {
    this.props.selectPlaylist(playlist);
    this.handleChangeMode(RosterNineteenMode.PLAYLIST);
  };
}
