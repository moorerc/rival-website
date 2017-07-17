import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Link } from 'react-router-dom';

import { NAV_BAR } from '../constants';
import { NavBarItem } from '../interfaces';


interface OwnProps {
}

interface ConnectedProps {
}

interface ConnectedActions {
}

interface State {
}

class BaseNavBar extends React.PureComponent<OwnProps & ConnectedProps & ConnectedActions, State>  {
  render() {
    return (
      <div className="base-nav-bar">
        <div className="base-nav-bar-items">
          {_.map(NAV_BAR, (navBarItem: NavBarItem, index) => (
            <Link 
              key={navBarItem.key} 
              className="base-nav-bar-item"
              to={navBarItem.route}
            >
                {navBarItem.title.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseNavBar);