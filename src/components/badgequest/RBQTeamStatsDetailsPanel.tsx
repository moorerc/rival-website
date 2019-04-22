import * as React from "react";

import { Card } from "@blueprintjs/core";
import { rbq2018BadgeEarned } from "../../data/rbq/RBQ2018";

export default class RBQTeamStatsDetailsPanel extends React.Component<{}> {
  render() {
    return (
      <div className="rbq-team-stats-details-panel">
        <Card>{rbq2018BadgeEarned.length}</Card>
      </div>
    );
  }
}
