import * as React from "react";
import "../../styles/RBQMobileListItemCard.css";
import { Card, Elevation, Tag, Collapse, Icon } from "@blueprintjs/core";
import classNames from "classnames";
import { IconNames } from "@blueprintjs/icons";

export namespace RBQMobileListItemCard {
  export interface Props {
    imageUrl: string;
    title: string;
    titleRight?: JSX.Element;
    subtitle: JSX.Element;
    subtitleRight?: JSX.Element;
    noBorder?: boolean;
    tagValue?: number;
    detailsContent?: JSX.Element;
    onClick?: () => void;
  }

  export interface State {
    collapsed: boolean;
  }
}

export default class RBQMobileListItemCard extends React.Component<
  RBQMobileListItemCard.Props,
  RBQMobileListItemCard.State
> {
  state = {
    collapsed: true
  };

  render() {
    const {
      imageUrl,
      title,
      titleRight,
      subtitle,
      subtitleRight,
      noBorder,
      tagValue,
      detailsContent
    } = this.props;
    const { collapsed } = this.state;

    return (
      <Card
        interactive={false}
        elevation={Elevation.ONE}
        className="rbq-mobile-list-item-card"
        onClick={this.props.onClick}
      >
        <span className="card-main">
          <div
            className={classNames("list-item-card-image", {
              "-no-border": noBorder
            })}
            style={{
              background: "url(" + imageUrl + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          />
          <div className="list-item-card-content">
            <div className="title">
              <span className="main">{title}</span>
              {titleRight && <span className="right">{titleRight}</span>}
            </div>
            <div className="subtitle">
              <span className="main">{subtitle}</span>
              {subtitleRight && (
                <span
                  className="right"
                  onClick={detailsContent ? this.toggleDetails : undefined}
                >
                  {subtitleRight}
                  {detailsContent && (
                    <Icon
                      icon={
                        collapsed
                          ? IconNames.CHEVRON_RIGHT
                          : IconNames.CHEVRON_DOWN
                      }
                      iconSize={12}
                    />
                  )}
                </span>
              )}
            </div>
          </div>
          {tagValue !== undefined && (
            <div className="card-tag">
              <Tag
                className={classNames({
                  "-first": tagValue === 0,
                  "-second": tagValue === 1,
                  "-third": tagValue === 2
                })}
              >
                {tagValue < 3 && (
                  <img src="img/Rlogo.png" className="tag-logo" />
                )}
                {tagValue + 1}
              </Tag>
            </div>
          )}
        </span>
        {detailsContent !== undefined && (
          <Collapse
            className={classNames("card-details", { "-open": !collapsed })}
            isOpen={!collapsed}
          >
            <div>{detailsContent}</div>
          </Collapse>
        )}
      </Card>
    );
  }

  private toggleDetails = (event: React.MouseEvent<HTMLSpanElement>) => {
    this.setState({ collapsed: !this.state.collapsed });
    event.stopPropagation();
  };
}
