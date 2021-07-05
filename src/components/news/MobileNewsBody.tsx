import * as React from "react";
import "../../styles/News.css";
import "../../styles/MobileNewsBody.css";

import {
  Button,
  ButtonGroup,
  Popover,
  Position,
  Menu,
  MenuItem,
  InputGroup,
  NonIdealState
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import * as _ from "lodash";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { NewsItem } from "src/data/news/News";
import NewsCard from "./NewsCard";

interface MobileNewsBodyProps {
  news: NewsItem[];
  roster: RosterList;
  searchString: string;
  showAll: boolean;
  selectRoster: (roster: RosterList) => void;
  changeSearchString: (searchString: string) => void;
  changeShowAll: (showAll: boolean) => void;
}

export default class MobileNewsBody extends React.Component<
  MobileNewsBodyProps
> {
  private scrollContainerRef = React.createRef<any>();

  render() {
    const { news } = this.props;

    return (
      <React.Fragment>
        {this.renderViewModeButtonGroup()}
        <div
          className="mobile-news-body-scroll-container"
          ref={this.scrollContainerRef}
        >
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
        </div>
      </React.Fragment>
    );
  }

  private renderViewModeButtonGroup() {
    const { roster, searchString, showAll } = this.props;
    return (
      <ButtonGroup
        minimal={true}
        fill={true}
        className="mobile-roster-button-group"
      >
        <Popover
          content={this.rosterSelectMenu()}
          position={Position.BOTTOM}
          minimal={true}
          className="mobile-roster-select-menu"
          popoverClassName="mobile-roster-select-menu-popover"
        >
          <Button
            rightIcon={IconNames.CHEVRON_DOWN}
            text={showAll ? "All News" : roster.displayName}
          />
        </Popover>
        <InputGroup
          className="mobile-news-search"
          round={false}
          leftIcon={IconNames.SEARCH}
          value={searchString}
          onChange={this.handleSearchChange}
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
        <MenuItem text="All News" onClick={this.handleShowAll} />
        {RIVAL_ROSTERS.map(roster => (
          <MenuItem
            key={roster.id}
            text={roster.displayName}
            onClick={() => this.handleSelectRoster(roster)}
          />
        ))}
      </Menu>
    );
  }

  private handleShowAll = () => {
    this.props.changeShowAll(true);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private handleSelectRoster = (roster: RosterList) => {
    this.props.selectRoster(roster);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

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
