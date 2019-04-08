import * as React from "react";
import "../styles/App.css";
import "../styles/News.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import { isMobile } from "react-device-detect";
import * as classNames from "classnames";
import * as _ from "lodash";
import * as moment from "moment";
import MobileNewsBody from "src/components/news/MobileNewsBody";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import { ALL_NEWS, NewsItem } from "src/data/news/News";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

interface NewsPageState {
  roster: RosterList;
  searchFilterString: string;
  showAll: boolean;
}

export default class News extends React.Component<NewsPageState> {
  state: NewsPageState = {
    roster: RIVAL_ROSTERS[RIVAL_ROSTERS.length - 1],
    searchFilterString: "",
    showAll: true
  };

  render() {
    const { roster, searchFilterString, showAll } = this.state;

    let seasonNews = ALL_NEWS;
    if (!showAll) {
      seasonNews = _.filter(
        ALL_NEWS,
        news => moment(news.date).year() === roster.year
      );
    }
    const filteredNews = _.filter(seasonNews, news =>
      news.title.toLowerCase().includes(searchFilterString.toLowerCase())
    );
    const news = _.reverse(_.sortBy(filteredNews, this.convertDate));

    return (
      <React.Fragment>
        <div
          className={classNames("rival-website-page rival-news-page", {
            "-mobile": isMobile
          })}
        >
          <CombinedNavBar pageName="news" />
          <div className="news-page-body">
            {/* <a className="twitter-timeline" href="https://twitter.com/RivalUltimate?ref_src=twsrc%5Etfw" /> */}
            {isMobile ? (
              <MobileNewsBody
                news={news}
                roster={roster}
                selectRoster={this.handleSelectRoster}
                changeSearchString={this.handleSearchChange}
                searchString={searchFilterString}
                showAll={showAll}
                changeShowAll={this.handleShowAll}
              />
            ) : (
              <NonIdealState
                className="construction-empty-state"
                title="News. Coming soon."
                icon={IconNames.BUILD}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }

  private handleSelectRoster = (roster: RosterList) => {
    this.setState({
      roster,
      showAll: false
    });
  };

  private handleSearchChange = (searchFilterString: string) => {
    this.setState({ searchFilterString });
  };

  private handleShowAll = (showAll: boolean) => {
    this.setState({ showAll });
  };

  private convertDate(newsItem: NewsItem) {
    return moment(newsItem.date);
  }
}
