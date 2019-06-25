import * as React from "react";
import "../styles/App.css";
import "../styles/RosterNineteen.css";

import * as classNames from "classnames";
import { isMobile } from "react-device-detect";
import * as _ from "lodash";
import RosterNineteenBody from "src/components/roster-nineteen/RosterNineteenBody";
import { Link } from "react-router-dom";
import {
  Playlist,
  PLAYLISTS,
  RIVAL_2019_PLAYLIST
} from "src/data/roster-nineteen/RosterNinteenData";
import RosterNineteenMobileBody from "src/components/roster-nineteen/RotserNinteenMobileBody";
import { ProgressBar, Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import * as moment from "moment";

export namespace RosterNineteen {
  export interface StateProps {}

  export type Props = StateProps;

  export interface State {
    selectedPlaylist: Playlist;
  }
}

class RosterNineteenInternal extends React.Component<
  RosterNineteen.Props,
  RosterNineteen.State
> {
  state: RosterNineteen.State = {
    selectedPlaylist: PLAYLISTS[0]
  };

  render() {
    const seasonStart = moment("2019-06-22", "YYYY-MM-DD");
    const natties = moment("2019-10-24", "YYYY-MM-DD");
    const today = moment();
    const daysTotal = moment.duration(natties.diff(seasonStart)).asDays();
    const daysPassed = moment
      .duration(today.diff(seasonStart))
      .asDays()
      .toFixed(0);
    const progressVal = parseInt(daysPassed) / daysTotal;

    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page roster-nineteen-page", {
            "-mobile": isMobile
          })}
        >
          {this.renderHeader()}
          <div className="roster-nineteen-page-body">
            {isMobile ? (
              <RosterNineteenMobileBody
                playlist={this.state.selectedPlaylist}
                selectPlaylist={this.selectPlaylist}
                nextPlaylist={this.nextPlaylist}
                previousPlaylist={this.previousPlaylist}
              />
            ) : (
              <RosterNineteenBody
                playlist={this.state.selectedPlaylist}
                selectPlaylist={this.selectPlaylist}
                nextPlaylist={this.nextPlaylist}
                previousPlaylist={this.previousPlaylist}
              />
            )}
          </div>
          <div className="roster-nineteen-page-footer">
            {isMobile
              ? this.renderControlsMobile(daysPassed, progressVal, daysTotal)
              : this.renderControlsWeb(daysPassed, progressVal, daysTotal)}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private handleClickPlay = () => {
    window.open(
      "https://open.spotify.com/playlist/2upvTnzAS3EtKhxv92kg4m",
      "_blank"
    );
  };

  private selectPlaylist = (playlist: Playlist) => {
    this.setState({ selectedPlaylist: playlist });
  };

  private nextPlaylist = () => {
    const index = _.findIndex(PLAYLISTS, this.state.selectedPlaylist);
    if (index != undefined && index + 1 < PLAYLISTS.length) {
      this.setState({
        selectedPlaylist: PLAYLISTS[index + 1]
      });
    }
  };

  private previousPlaylist = () => {
    const index = _.findIndex(PLAYLISTS, this.state.selectedPlaylist);
    if (index != undefined && index > 0) {
      this.setState({
        selectedPlaylist: PLAYLISTS[index - 1]
      });
    }
  };

  private renderHeader = () => {
    return (
      <div className="roster-nineteen-page-header">
        <Link className="web-nav-bar-image" to="/roster2019">
          <img
            className="roster-logo-image"
            src="/img/roster-nineteen/RosterNineteen_Logo.png"
          />
        </Link>
        <div className="horizontal-spacer" />
        <Link className="web-nav-bar-image" to="/">
          <img
            className="rival-logo-image"
            src="/img/roster-nineteen/Rlogo_white_small.png"
          />
        </Link>
      </div>
    );
  };

  private renderControlsMobile = (
    daysPassed: string,
    progressVal: number,
    daysTotal: number
  ) => {
    return (
      <React.Fragment>
        <div className="controls-bar-mobile">
          <div className="progress-bar">
            <ProgressBar value={progressVal} animate={false} stripes={false} />
          </div>
          <div className="main-controls">
            <Icon
              className="control-icon -heart"
              icon={IconNames.HEART}
              iconSize={14}
              onClick={() => this.selectPlaylist(RIVAL_2019_PLAYLIST)}
            />
            <div className="title">
              Moving Up the Charts
              <Icon
                className="title-icon"
                icon={IconNames.DOT}
                iconSize={8}
                onClick={this.handleClickPlay}
              />
              <span className="main-track-artist">Rival 2019</span>
            </div>
            <Icon
              className="control-icon -play"
              icon={IconNames.PLAY}
              iconSize={14}
              onClick={this.handleClickPlay}
            />
          </div>
          {/* <Icon
            className="control-icon"
            icon={IconNames.RANDOM}
            iconSize={12}
          />
          <Icon className="control-icon" icon={IconNames.STEP_BACKWARD} />
          <Icon
            className="control-icon -play"
            icon={IconNames.PLAY}
            iconSize={18}
            onClick={this.handleClickPlay}
          />
          <Icon className="control-icon" icon={IconNames.STEP_FORWARD} />
          <Icon
            className="control-icon"
            icon={IconNames.REFRESH}
            iconSize={12}
          /> */}
        </div>
        {/* <div className="progress-bar">
          <span className="duration-marker">{daysPassed}</span>
          <ProgressBar value={progressVal} animate={false} stripes={false} />
          <span className="duration-marker">{daysTotal}</span>
        </div> */}
        {/* <div className="main-track-title">
          Moving Up the Charts
          <span className="main-track-artist">by Rival 2019</span>
        </div> */}
      </React.Fragment>
    );
  };

  private renderControlsWeb = (
    daysPassed: string,
    progressVal: number,
    daysTotal: number
  ) => {
    return (
      <React.Fragment>
        <div className="controls-bar">
          <Icon
            className="control-icon"
            icon={IconNames.RANDOM}
            iconSize={12}
          />
          <Icon className="control-icon" icon={IconNames.STEP_BACKWARD} />
          <Icon
            className="control-icon -play"
            icon={IconNames.PLAY}
            iconSize={18}
            onClick={this.handleClickPlay}
          />
          <Icon className="control-icon" icon={IconNames.STEP_FORWARD} />
          <Icon
            className="control-icon"
            icon={IconNames.REFRESH}
            iconSize={12}
          />
        </div>
        <div className="progress-bar">
          <span className="duration-marker">{daysPassed}</span>
          <ProgressBar value={progressVal} animate={false} stripes={false} />
          <span className="duration-marker">{daysTotal}</span>
        </div>
        <div className="main-track-title">
          Moving Up the Charts
          <span className="main-track-artist">by Rival 2019</span>
        </div>
      </React.Fragment>
    );
  };
}

export const RosterNineteen = RosterNineteenInternal;
