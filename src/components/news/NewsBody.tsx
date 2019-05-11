import * as React from "react";
import "../../styles/NewsBody.css";

import * as _ from "lodash";
import MobileHomeBody from "../home/MobileHomeBody";
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
}

export default class NewsBody extends React.Component<NewsBody.Props> {
  render() {
    const { news } = this.props;

    return (
      <div className="news-body">
        <div className="body-top">
          <div className="top-left">
            <MobileHomeBody />
          </div>
          <div className="top-right">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Breaking News</span>
              <span className="spacer" />
            </div>
            {this.renderViewModeButtonGroup()}
            <Card className="news-results-card">
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
  };

  private clearSearchString = () => {
    this.props.changeSearchString("");
  };
}
