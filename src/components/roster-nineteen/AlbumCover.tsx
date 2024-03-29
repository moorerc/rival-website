import * as React from "react";
import "../../styles/RosterNineteenBody.css";

import classNames from "classnames";
import * as _ from "lodash";
import { Playlist } from "src/data/roster-nineteen/RosterNinteenData";

export namespace AlbumCover {
  export interface Props {
    playlist: Playlist;
    includeFullTitle?: boolean;
    isSelected: boolean;
    onClick: (playlist: Playlist) => void;
  }
}

export default class AlbumCover extends React.Component<AlbumCover.Props> {
  render() {
    const { playlist, isSelected, onClick, includeFullTitle } = this.props;

    return (
      <div
        className={classNames("album-cover", { "-is-selected": isSelected })}
        onClick={() => onClick(playlist)}
      >
        <div
          className="album-cover-image"
          style={{
            backgroundImage: `url(/img/roster-nineteen/playlist-covers/${
              playlist.image
            })`
          }}
        />
        <div
          className={classNames("album-cover-title", {
            "-long-title": playlist.title.length > 20,
            "-include-full-title": includeFullTitle
          })}
        >
          {playlist.title}
        </div>
      </div>
    );
  }
}
