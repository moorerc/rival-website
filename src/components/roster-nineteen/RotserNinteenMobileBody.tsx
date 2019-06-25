import * as React from "react";
import "../../styles/RosterNinteenMobileBody.css";

// import * as classNames from "classnames";
import * as _ from "lodash";
import {
  Playlist,
  CATEGORIES
} from "src/data/roster-nineteen/RosterNinteenData";
import AlbumCover from "./AlbumCover";
// import { Tabs, Tab } from "@blueprintjs/core";
// import { IconNames } from "@blueprintjs/icons";
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

  // render() {
  //   // const { playlist } = this.props;
  //   // const firstPlaylist = playlist === PLAYLISTS[0];
  //   // const lastPlaylist = playlist === PLAYLISTS[PLAYLISTS.length - 1];

  //   return (
  //     <React.Fragment>
  //       {/* {this.renderViewModeButtonGroup()}
  //       <div
  //         className="roster-nineteen-mobile-body"
  //         ref={this.scrollContainerRef}
  //       >
  //         {this.state.mode === RosterNineteenMode.LIST
  //           ? this.renderListView()
  //           : this.renderPlaylistView()}
  //       </div> */}
  //       <Tabs selectedTabId={this.state.mode} onChange={this.handleChangeMode}>
  //         <Tab
  //           id={RosterNineteenMode.LIST}
  //           title="Playlists"
  //           panel={this.renderListView()}
  //           // onClick={() => this.handleChangeMode(RosterNineteenMode.LIST)}
  //         />
  //         <Tab
  //           id={RosterNineteenMode.PLAYLIST}
  //           title="Album"
  //           panel={this.renderPlaylistView()}
  //         />
  //       </Tabs>
  //     </React.Fragment>
  //   );
  // }

  // <div
  //   className="roster-nineteen-mobile-body"
  //   ref={this.scrollContainerRef}
  // >
  //   {PLAYLISTS.map((p, index) => (
  //     <AlbumCover
  //       playlist={p}
  //       includeTitle={true}
  //       isSelected={false}
  //       onClick={this.handleSelectPlaylist}
  //       key={"playlist_" + index}
  //     />
  //   ))}
  // </div>

  private renderListView = () => {
    return (
      <React.Fragment>
        {CATEGORIES.map(category => {
          return (
            <div className="category-container">
              <div className="category-title">{category.title}</div>
              <div className="category-description">{category.description}</div>
              <div className="playlists-container">
                {category.playlists.map((p, index) => (
                  <AlbumCover
                    playlist={p}
                    includeTitle={true}
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

    return (
      <div className="mobile-playlist-view">
        <div className="top-buttons-container">
          <Icon
            icon={IconNames.CHEVRON_LEFT}
            onClick={() => this.handleChangeMode(RosterNineteenMode.LIST)}
          />
        </div>
        <div className="playlist-scroll-container">
          <AlbumCover
            playlist={playlist}
            includeTitle={true}
            isSelected={false}
            onClick={() => {}}
          />
          <div className="mobile-tracks-list">
            {playlist.trackList.map((track, index) => (
              <TrackRowMobile key={"track_" + index} track={track} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // private renderViewModeButtonGroup() {
  //   const { mode } = this.state;

  //   return (
  //     <ButtonGroup
  //       minimal={true}
  //       fill={true}
  //       className="mobile-roster-button-group"
  //     >
  //       <Button
  //         icon={IconNames.PROPERTIES}
  //         active={mode === RosterNineteenMode.LIST}
  //         onClick={() => {
  //           this.handleChangeMode(RosterNineteenMode.LIST);
  //           if (this.scrollContainerRef.current) {
  //             this.scrollContainerRef.current.scrollTop = 0;
  //           }
  //         }}
  //       />
  //       <Button
  //         icon={IconNames.MUSIC}
  //         active={mode === RosterNineteenMode.PLAYLIST}
  //         onClick={() => {
  //           this.handleChangeMode(RosterNineteenMode.PLAYLIST);
  //           if (this.scrollContainerRef.current) {
  //             this.scrollContainerRef.current.scrollTop = 0;
  //           }
  //         }}
  //       />
  //     </ButtonGroup>
  //   );
  // }

  private handleChangeMode = (newMode: RosterNineteenMode) => {
    this.setState({ mode: newMode });
  };

  private handleSelectPlaylist = (playlist: Playlist) => {
    this.props.selectPlaylist(playlist);
    this.handleChangeMode(RosterNineteenMode.PLAYLIST);
  };
}
