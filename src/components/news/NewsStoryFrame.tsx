// import * as React from "react";
// import "../../styles/NewsCard.css";

// import { Card } from "@blueprintjs/core";

// import * as _ from "lodash";
// // import * as moment from "moment";
// import { NewsItem } from "src/data/news/News";

// // interface NewsStoryFrameProps {
// //   //   newsItem: NewsItem;
// //   //   onClick?: () => void;
// // }

// export namespace NewsStoryFrame {
//   export interface Props {
//     newsItem: NewsItem;
//     onClick?: () => void;
//   }
// }

// export default class NewsStoryFrame extends React.Component<
//   NewsStoryFrame.Props
// > {
//   render() {
//     const { newsItem } = this.props;
//     return (
//       <Card
//         className="news-frame-card"
//         elevation={1}
//         onClick={this.props.onClick ? this.props.onClick : this.handleOpenLink}
//       >
//         <iframe src={newsItem.link} />
//       </Card>
//     );
//   }

//   private handleOpenLink = () => {
//     window.open(this.props.newsItem.link, "_blank");
//   };
// }
