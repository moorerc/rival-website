import * as React from "react";
import "../styles/App.css";
import "../styles/News.css";

import CombinedNavBar from "src/components/navigation/CombinedNavBar";
import { isMobile } from "react-device-detect";
import * as classNames from "classnames";
import * as _ from "lodash";
import * as moment from "moment";
import MobileNewsBody from "src/components/news/MobileNewsBody";
import { RosterList } from "src/data/RosterList";
import { ALL_NEWS, NewsItem } from "src/data/news/News";
import { NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { RootState } from "src/state/store";
import { Dispatch, connect } from "react-redux";
import { SELECT_ROSTER } from "src/state/actions";

export namespace News {
  export interface StateProps {
    selectedRoster: RosterList;
  }

  export interface ConnectedActions {
    selectRoster: (roster: RosterList) => void;
  }

  export type Props = StateProps & ConnectedActions;

  export interface State {
    searchFilterString: string;
    showAll: boolean;
  }
}

class NewsInternal extends React.Component<News.Props, News.State> {
  state: News.State = {
    searchFilterString: "",
    showAll: false
  };

  render() {
    const { selectedRoster } = this.props;
    const { searchFilterString, showAll } = this.state;

    let seasonNews = ALL_NEWS;
    if (!showAll) {
      seasonNews = _.filter(
        ALL_NEWS,
        news => moment(news.date).year() === selectedRoster.year
      );
    }
    const filteredNews = _.filter(seasonNews, news =>
      news.title.toLowerCase().includes(searchFilterString.toLowerCase())
    );
    const news = _.reverse(_.sortBy(filteredNews, this.convertDate));

    return (
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
              roster={selectedRoster}
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
    );
  }

  private handleSelectRoster = (roster: RosterList) => {
    this.setState({
      showAll: false
    });
    this.props.selectRoster(roster);
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

const mapStateToProps = (state: RootState): News.StateProps => {
  return {
    selectedRoster: state.rivalWebsiteAppState.selectedRoster
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RootState>
): News.ConnectedActions => ({
  selectRoster: (roster: RosterList) => {
    dispatch(SELECT_ROSTER(roster));
  }
});

export const News = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsInternal);
