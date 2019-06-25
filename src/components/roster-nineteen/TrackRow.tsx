import * as React from "react";
import "../../styles/RosterNineteenBody.css";

import * as _ from "lodash";
import { Track } from "src/data/roster-nineteen/RosterNinteenData";
import { getDisplayNameForPlayer } from "../basic/Helpers";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export namespace TrackRow {
  export interface Props {
    track: Track;
  }
}

export default class TrackRow extends React.Component<TrackRow.Props> {
  render() {
    const { track } = this.props;

    return (
      <div className="tracks-table-row table-row">
        <div className="table-col col-play">
          <Icon
            className="play-icon"
            icon={IconNames.PLAY}
            onClick={this.handleClickTrack}
          />
        </div>
        <div className="table-col col-track -center">{track.artist.jersey}</div>
        <div className="table-col col-title">{track.title}</div>
        <div className="table-col col-artist">
          {getDisplayNameForPlayer(track.artist)}
        </div>
        {/* <div className="table-col col-duration">5 years ago</div> */}
      </div>
    );
  }

  private handleClickTrack = () => {
    window.open(this.props.track.link, "_blank");
  };
}
