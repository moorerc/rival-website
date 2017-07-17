import * as React from "react";
import * as _ from 'lodash';

import { EXTERNAL_LINKS } from '../constants';
import { ExternalLinkItem } from '../interfaces';
import BaseNavBar from '../components/BaseNavBar';

export default class Home extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="rival-website-app-home">
        <BaseNavBar />
        <div className="rival-website-app-home-bgimage"></div>
        <div className="rival-website-app-home-main-content">
          <div className="main-content-div">
            <span className="logo-image"></span>
            <div className="external-links-bar">
              {_.map(EXTERNAL_LINKS, (navBarItem: ExternalLinkItem, index) => (
                <a href={navBarItem.href} target={navBarItem.target}>
                  <div className={"smlogo " + navBarItem.icon}></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};