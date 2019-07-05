import * as _ from "lodash";
import * as React from "react";
import { Badges } from "src/data/rbq/Badges";
import { Players } from "src/data/Players";
// import "../../styles/RBQMobileHeaderBar.css";
import { RBQMobileDetailsHeader } from "./RBQMobileDetailsHeader";
import { RBQDetailsView } from "src/pages/BadgeQuest";

export namespace RBQMobileDetailsPanel {
  export interface Props {
    selectedBadge?: Badges;
    selectedPlayer?: Players;
    detailsView: RBQDetailsView;
  }
}

export class RBQMobileDetailsPanel extends React.Component<
  RBQMobileDetailsPanel.Props
> {
  render() {
    // const { detailsView } = this.props;
    return (
      <div className="rbq-mobile-details-panel">{this.renderContent()}</div>
    );
  }

  private renderContent() {
    const { detailsView } = this.props;

    switch (detailsView) {
      case RBQDetailsView.DETAILS_BADGE:
        return this.renderBadgeView();
      default:
        return "rbq details yo";
    }
  }

  private renderBadgeView = () => {
    return <RBQMobileDetailsHeader />;
  };
}
