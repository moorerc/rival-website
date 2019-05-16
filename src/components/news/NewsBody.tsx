import * as React from "react";
import "../../styles/NewsBody.css";

import * as _ from "lodash";
import {
  Card,
  NonIdealState,
  ButtonGroup,
  Popover,
  Button,
  Position,
  InputGroup,
  Menu,
  MenuItem
} from "@blueprintjs/core";
import { NewsItem } from "src/data/news/News";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { IconNames } from "@blueprintjs/icons";
import NewsCard from "./NewsCard";
import PhotoGrid from "./PhotoGrid";

export namespace NewsBody {
  export interface Props {
    news: NewsItem[];
    roster: RosterList;
    searchString: string;
    showAll: boolean;
    selectRoster: (roster: RosterList) => void;
    changeSearchString: (searchString: string) => void;
    changeShowAll: (showAll: boolean) => void;
  }

  export interface State {
    selectedNewsItem: NewsItem | undefined;
  }
}

const PHOTO_GRID_IMAGES = {
  all: {
    imageA: "/img/photo-grids/all_2016_regionals.jpg",
    imageB: "/img/photo-grids/all_2015_cookies.jpg",
    imageC: "/img/photo-grids/all_2016_dance.jpg",
    imageD: "/img/photo-grids/all_2016_practice.jpg",
    imageE: "/img/photo-grids/all_2017_coaches.jpg",
    imageF: "/img/photo-grids/all_2016_kristen.jpg",
    imageG: "/img/photo-grids/all_2018_beach2.jpg"
  },
  "rival-2018": {
    imageA: "/img/photo-grids/2018_harley.jpg",
    imageB: "/img/photo-grids/2018_sara.jpg",
    imageC: "/img/photo-grids/2018_dance.jpg",
    imageD: "/img/photo-grids/2018_allstars2.jpg",
    imageE: "/img/photo-grids/2018_cheer.jpg",
    imageF: "/img/photo-grids/2018_iris.jpg",
    imageG: "/img/photo-grids/2018_gryffindor.jpg"
  },
  "rival-2017": {
    imageA: "/img/photo-grids/2017_huddle.jpg",
    imageB: "/img/photo-grids/2017_roomies.jpg",
    imageC: "/img/photo-grids/2017_captains.jpg",
    imageD: "/img/photo-grids/2017_massage.jpg",
    imageE: "/img/photo-grids/2017_balloons.jpg",
    imageF: "/img/photo-grids/2017_slide.jpg",
    imageG: "/img/photo-grids/2017_selfie.jpg"
  },
  "rival-2016": {
    imageA: "/img/photo-grids/2016_hearts_3.jpg",
    imageB: "/img/photo-grids/2016_limbo.jpg",
    imageC: "/img/photo-grids/2016_captains.jpg",
    imageD: "/img/photo-grids/2016_winning.jpg",
    imageE: "/img/photo-grids/2016_practice.jpg",
    imageF: "/img/photo-grids/2016_killin_it.jpg",
    imageG: "/img/photo-grids/2016_stack.jpg"
  },
  "rival-2015": {
    imageA: "/img/photo-grids/2015_team_beach.jpg",
    imageB: "/img/photo-grids/2015_sand_rival.jpg",
    imageC: "/img/photo-grids/2015_mich_beach.jpg",
    imageD: "/img/photo-grids/2015_rival_practice.jpg",
    imageE: "/img/photo-grids/2015_rival_highfive.jpg",
    imageF: "/img/photo-grids/2015_is_janine.jpg",
    imageG: "/img/photo-grids/2015_rival_sunset.jpg"
  }
};

export default class NewsBody extends React.Component<
  NewsBody.Props,
  NewsBody.State
> {
  state: NewsBody.State = {
    selectedNewsItem: undefined
  };

  private scrollContainerRef = React.createRef<any>();

  render() {
    const { news, roster, showAll } = this.props;

    const photoGridImages = showAll
      ? PHOTO_GRID_IMAGES["all"]
      : PHOTO_GRID_IMAGES[roster.id];

    return (
      <div className="news-body">
        <div className="body-top">
          <div className="top-left">
            <PhotoGrid {...photoGridImages} />
          </div>
          <div className="top-right">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Breaking News</span>
              <span className="spacer" />
            </div>
            {this.renderViewModeButtonGroup()}
            <Card className="news-results-card" ref={this.scrollContainerRef}>
              {news.map((newsItem, index) => (
                <NewsCard key={index} newsItem={newsItem} />
              ))}
              {news.length === 0 && (
                <NonIdealState
                  icon={IconNames.DISABLE}
                  title="No Results"
                  description="Try a different search"
                />
              )}
            </Card>
          </div>
        </div>
        <div className="body-bottom" />
      </div>
    );
  }

  private renderViewModeButtonGroup() {
    const { roster, searchString, showAll } = this.props;
    return (
      <ButtonGroup
        // minimal={true}
        fill={true}
        className="news-body-button-group"
      >
        <Popover
          content={this.rosterSelectMenu()}
          position={Position.BOTTOM}
          minimal={true}
          className="news-body-select-menu"
          popoverClassName="news-body-select-menu-popover"
          usePortal={true}
          targetClassName="news-body-select-menu-popover-target"
        >
          <Button
            className="news-body-select-menu-button"
            rightIcon={IconNames.CHEVRON_DOWN}
            text={showAll ? "All News" : roster.displayName}
            minimal={true}
          />
        </Popover>
        <InputGroup
          className="news-body-search"
          round={false}
          leftIcon={IconNames.SEARCH}
          value={searchString}
          onChange={this.handleSearchChange}
          onSubmit={() => {}}
          rightElement={
            searchString !== "" ? (
              <Button
                icon={IconNames.SMALL_CROSS}
                minimal={true}
                onClick={this.clearSearchString}
              />
            ) : (
              undefined
            )
          }
        />
      </ButtonGroup>
    );
  }

  private rosterSelectMenu() {
    return (
      <Menu>
        <MenuItem
          text="All News"
          onClick={() => this.props.changeShowAll(true)}
        />
        {RIVAL_ROSTERS.map(roster => (
          <MenuItem
            key={roster.id}
            text={roster.displayName}
            onClick={() => this.props.selectRoster(roster)}
          />
        ))}
      </Menu>
    );
  }

  private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeSearchString(event.target.value);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private clearSearchString = () => {
    this.props.changeSearchString("");
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };
}
