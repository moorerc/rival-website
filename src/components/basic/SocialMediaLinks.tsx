import * as React from "react";
import "../../styles/App.css";

import SocialMediaButton from "../basic/SocialMediaButton";
import * as classNames from "classnames";

export interface SocialMediaSite {
  name: string;
  link: string;
}

const SOCIAL_MEDIA_SITES: SocialMediaSite[] = [
  {
    name: "facebook",
    link: "https://www.facebook.com/rivalultimate/"
  },
  {
    name: "twitter",
    link: "https://twitter.com/RivalUltimate/"
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/rivalultimate/"
  },
  {
    name: "email",
    link: "mailto:captains@rivalultimate.com"
  }
];

export namespace SocialMediaLinks {
  export interface Props {
    gold: boolean;
    large?: boolean;
    hoverable?: boolean;
  }
}

export default class SocialMediaLinks extends React.Component<
  SocialMediaLinks.Props
> {
  render() {
    const { gold, large, hoverable } = this.props;
    const imagePrefix = "/img/social-logos/";
    const imageSuffix = gold ? "_gold.png" : ".png";
    const hoverImageSuffix = gold ? ".png" : "_gold.png";

    return (
      <div className={classNames("social-media-links", { "-large": large })}>
        {SOCIAL_MEDIA_SITES.map((site: SocialMediaSite) => (
          <SocialMediaButton
            link={site.link}
            image={imagePrefix + site.name + imageSuffix}
            key={site.name}
            hoverImage={
              hoverable ? imagePrefix + site.name + hoverImageSuffix : undefined
            }
          />
        ))}
      </div>
    );
  }
}
