import * as React from "react";
import "../../styles/NewsCard.css";

import { Card, Icon, Text } from "@blueprintjs/core";

import * as _ from "lodash";
import * as moment from "moment";
import { NewsItem } from "src/data/news/News";
import { IconNames } from "@blueprintjs/icons";

interface NewsCardProps {
  newsItem: NewsItem;
}

export default class NewsCard extends React.Component<NewsCardProps> {
  render() {
    const { newsItem } = this.props;
    return (
        <Card className="news-card" elevation={1} onClick={this.handleOpenLink}>
            <div className="card-left"><Icon className="news-type-icon" icon={IconNames.DOCUMENT} /></div>
            <div className="card-right">
                <div className="title"><Text ellipsize={true}>{newsItem.title}</Text></div>
                <div className="divider" />
                <div className="subtitle">
                  <div className="subtitle-left">{"By: " + newsItem.author}</div>
                  <div className="subtitle-right">{moment(newsItem.date).format("LL")}</div>
                </div>
            </div>
        </Card>
    );
  }

  private handleOpenLink = () => {
    window.open(this.props.newsItem.link, "_blank");
  }


}
