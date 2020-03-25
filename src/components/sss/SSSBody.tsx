import * as React from "react";
import "../../styles/SSSBody.css";

import * as classNames from "classnames";
import * as _ from "lodash";
import { SHOWS, Show, SSSNavTab } from "../../data/sss/SSS";
import { IconNames } from "@blueprintjs/icons";
import { Button } from "@blueprintjs/core";
import SSSRules from "./SSSRules";

export namespace SSSBody {
  export interface Props {
    selectedTab: SSSNavTab;
  }

  export interface State {
    selectedShow: Show | undefined;
  }
}

export default class SSSBody extends React.Component<
  SSSBody.Props,
  SSSBody.State
> {
  state: SSSBody.State = {
    selectedShow: undefined
  };

  render() {
    const { selectedTab } = this.props;
    return (
      <div className="sss-body">
        {selectedTab === SSSNavTab.HOME ? this.renderHomeBody() : <SSSRules />}
      </div>
    );
  }

  public renderHomeBody() {
    const { selectedShow } = this.state;
    return (
      <React.Fragment>
        {selectedShow === undefined && (
          <div className="headliner-container">
            <div
              className="headliner-bg"
              style={{
                backgroundImage: "url(/img/sss/familyphoto_loweropacity.jpg)"
              }}
            />
            <div className="headliner-subtitle">
              <img
                className="shield"
                src={"/img/sss/sss_shield_2019_red.png"}
              />
              <div className="text-container">
                <div className="subtitle-text">
                  The Third Bi-Annual Scott Family Gift-o-rama Fun Run to End
                  the Flu Secret Santa Gift Exchange
                </div>
                <div className="subtitle-icons">
                  <span className="match">98% Match</span>
                  <span className="year">DEC 2019</span>
                  <span className="rating">R</span>
                  <span className="seasons">3 Seasons</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="list-container">
          {selectedShow !== undefined ? (
            <div className="top-spacer" />
          ) : (
            <div className="section-label">Trending Now</div>
          )}
          {this.renderTrendingNow()}
        </div>
        {selectedShow && (
          <div className="selected-show-container">
            {this.renderShow(selectedShow)}
          </div>
        )}
      </React.Fragment>
    );
  }

  public renderTrendingNow = () => {
    const { selectedShow } = this.state;
    return (
      <div className="trending-now">
        {SHOWS.map(show => {
          const previewImage = show.previewImg ? show.previewImg : show.img;
          return (
            <div className={"show-preview"} key={show.title}>
              <img
                className={classNames("show-preview-image", {
                  "-selected": selectedShow === show,
                  "hover-effect": selectedShow === undefined,
                  "non-selected-show":
                    selectedShow !== undefined && selectedShow !== show
                })}
                src={previewImage}
                onClick={() => this.handleSelectShow(show)}
              />
              {selectedShow === show && <div className="arrow-down" />}
            </div>
          );
        })}
      </div>
    );
  };

  public renderShow(show: Show) {
    return (
      <div className="selected-show">
        <div className="info-container">
          <Button
            icon={IconNames.CROSS}
            className="close-button"
            minimal={true}
            onClick={this.clearSelectedShow}
          />
          <div className={classNames("info-title", show.className)}>
            {show.title}
          </div>
          <div className="info-star">{"Starring " + show.star}</div>
          <div className="info-details">
            {show.details.map(details => (
              <div className="detail" key={details.title + details.value}>
                <div className="detail-category">{details.title + ":"}</div>
                <div className="detail-value">{details.value}</div>
              </div>
            ))}
          </div>
          <div className="info-summary">
            {show.summary.map(summaryItem => (
              <React.Fragment>
                {summaryItem}
                <br />
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div
          className="selected-show-image"
          style={{ backgroundImage: "url(" + show.img + ")" }}
        >
          <div className="gradient-cover" />
          <div className={classNames("cover-quote", show.className)}>
            {`"` + show.slogan + `"`}
          </div>
        </div>
      </div>
    );
  }

  private clearSelectedShow = () => {
    this.setState({ selectedShow: undefined });
  };

  private handleSelectShow = (selectShow: Show) => {
    this.setState({
      selectedShow: selectShow
    });
  };
}
