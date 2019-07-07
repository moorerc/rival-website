import * as React from "react";

import { RBQMobileHome } from "./RBQMobileHome";

export default class RBQTeamStatsDetailsPanel extends React.Component<{}> {
  render() {
    return (
      <div className="rbq-team-stats-details-panel">
        <RBQMobileHome
          selectBadge={() => undefined}
          selectPlayer={() => undefined}
        />
      </div>
    );
  }
}
