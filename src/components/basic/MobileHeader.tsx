import * as React from "react";
import "../../styles/MobileHeader.css";
interface MobileHeaderProps {
  title: string;
}

export default class MobileHeader extends React.Component<MobileHeaderProps> {
  render() {
    const { title } = this.props;
    return (
      <div className="mobile-header">
        <span className="spacer" />
        <span className="title">{title}</span>
        <span className="spacer" />
      </div>
    );
  }
}
