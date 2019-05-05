import * as React from "react";

interface EmptyDetailsPanelProps {
  message: string;
}

export default class RBQEmptyDetailsPanel extends React.Component<
  EmptyDetailsPanelProps
> {
  render() {
    return (
      <div className="rbq-empty-details-panel">
        <img src="img/Rlogo.png" className="title-logo" />
        {this.props.message}
      </div>
    );
  }
}
