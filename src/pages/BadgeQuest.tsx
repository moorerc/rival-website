import * as React from "react";
import { connect } from 'react-redux';
import * as _ from 'lodash';
import * as moment from 'moment';
import * as classNames from 'classnames';

import { USERS, User, BADGES, BadgesEarned, Badge } from '../badgequest/constants';

interface OwnProps {
}

interface ConnectedProps {
}

interface ConnectedActions {
}

interface State {
  currentTab: string;
  selectedUser: User;
  selectedBadge: Badge;
}

class BadgeQuest extends React.PureComponent<OwnProps & ConnectedProps & ConnectedActions, State>  {

  state: State = {
    currentTab: "overall",
    selectedUser: null,
    selectedBadge: null
  };

  private userHasBadge = (user: User, badge: Badge) => {
    let hasBadge = false;
    _.forEach(user.badges, function(userbadge: Badge, key: any) {
      if (userbadge.id == badge.id) {
        hasBadge =  true;
      }
    });
    return hasBadge;
  }

  private badgeTitleFromId = (badgeid: number) => {
    let badgetitle = "";
    _.forEach(BADGES, function(badge: Badge, key: any) {
      if (badge.id == badgeid) {
        badgetitle =  badge.title;
      }
    });
    return badgetitle;
  }

  private allBadgesEarned = (badgeid: number) => {
    let allBs = [];
    _.forEach(USERS, function(user: User, key: any) {
      _.forEach(user.badges, function(badgeearned: BadgesEarned, key: any) {
        if (badgeearned.id == badgeid) {
          allBs.push({...badgeearned, "user":user.name});
        }
      });
    });
    return allBs;
  }

  private renderLeaderBoard = () => {
    const usersSorted: User[] = _.sortBy(USERS,"badges.length");
     _.reverse(usersSorted);
    return (
      <div className="panel panel-default" style={{"height":"90%", "overflow":"scroll"}}>
          <ul className="list-group">
              {_.map(usersSorted, (user: User, index: number) => (
                <li 
                  className="list-group-item user-list-item" 
                  key={index}
                  onClick={(e: any) => this.setState({selectedUser: user, selectedBadge:null, currentTab:"user"})}
                >
                  <span className={ classNames("badge", {
                          'badgegold': (index == 0),
                          'badgesilver': (index == 1),
                          'badgebronze': (index == 2)
                      })}
                  >
                      {
                        (index < 3) ?
                        <img src="img/Rlogo.png" alt="..." style={{"height":"10px", "width":"10px", "marginRight":"5px", "filter":"invert(100%)"}} /> :
                        <span></span>
                      }
                      {index + 1}
                  </span>
                  <img className="media-object" src={"img/userimages17/"+user.image} alt="..." style={{"height":"60px", "width":"60px", "borderRadius":"50%"}} />
                  <div style={{"position":"absolute", "top":"0", "left":"0", "height":"100%", "width":"100%", "paddingLeft": "100px", "paddingTop":"10px"}}>
                      <h5>{user.name.toUpperCase()}</h5>
                      <span>Badges Earned: {user.badges.length}</span>
                  </div>
              </li>
              ))}
          </ul>
      </div>
    );
  };

  private renderBadgePanel = () => {
    const sortedBadges = _.sortBy(BADGES,"id");
    return (
      <div className="panel panel-default" style={{"height":"90%", "overflow":"scroll"}}>
          <div className="col-sm-6" style={{"paddingTop":"10px", "paddingLeft":"0", "paddingRight":"0"}}>
            {_.map(sortedBadges, (badge: Badge, index: number) => (
              (index%2 == 0) ? 
              <div 
                onClick={(e: any) => this.setState({selectedBadge: badge, selectedUser:null, currentTab:"badge"})}
                key={index} 
                className="container_badges" 
                style={{"paddingBottom":"5px", "paddingTop":"5px", "width":"75%", "float":"right", "textAlign":"center"}}
              >
                  <img src={"img/badgeimages/"+badge.image} alt="..." style={{"height":"80px", "width":"80px", "borderRadius":"50%"}} />
              </div>
              :
              <span key={index}></span>
            ))}
          </div>
          <div className="col-sm-6" style={{"paddingTop":"60px", "paddingLeft":"0", "paddingRight":"0"}}>
            {_.map(sortedBadges, (badge: Badge, index: number) => (
              (index%2 != 0) ? 
              <div 
                onClick={(e: any) => this.setState({selectedBadge: badge, selectedUser:null, currentTab:"badge"})}
                key={index} className="container_badges"style={{"paddingBottom":"5px", "paddingTop":"5px", "width":"75%", "float":"left", "textAlign":"center"}}>
                  <img src={"img/badgeimages/"+badge.image} alt="..." style={{"height":"80px", "width":"80px", "borderRadius":"50%"}} />
              </div>
              :
              <span key={index}></span>
            ))}
          </div>
      </div>
    );
  }

  private renderMainPanelHeader = () => {
    return (
      <div className="btn-group btn-group-justified" role="group" aria-label="..." style={{"paddingTop":"20px"}}>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={ classNames("btn btn-default", {
                'activetab': (this.state.currentTab === 'overall'),
            })}
            onClick={(e: any) => this.setState({currentTab: "overall"})}
          >
            Team Stats
          </button>
        </div>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={ classNames("btn btn-default", {
                'activetab': (this.state.currentTab === 'user'),
            })}
            onClick={(e: any) => this.setState({currentTab: "user"})}
          >
            Individual Details
          </button>
        </div>
        <div className="btn-group" role="group">
          <button 
            type="button" 
            className={ classNames("btn btn-default", {
                'activetab': (this.state.currentTab === 'badge'),
            })}
            onClick={(e: any) => this.setState({currentTab: "badge"})}
          >
            Badge Details
          </button>
        </div>
      </div>
    );
  };

  private renderViewNoneSelected = (text: string) => {
    return (
      <span>
        <div style={{"marginLeft":"auto", "marginRight":"auto", "display":"block", "width":"100%", "textAlign":"center", "marginTop":"60px", "marginBottom":"20px"}}>
            <img src={"img/Rlogo.png"} alt="..." style={{"height":"150px", "width":"150px", "filter":"invert(80%)"}} />
        </div>
        <div style={{"width":"100%", "display":"block", "textAlign":"center"}}>
            <span style={{"filter":"invert(80%)", "fontSize":"20px"}}>{text}</span>
        </div>
      </span>
    );
  };

  private renderViewUserSelected = () => {
    const userImageURL = "/img/userimages17/" + this.state.selectedUser.image;
    const sortedBadges = _.sortBy(BADGES,"id");
    const userBadges = _.sortBy(this.state.selectedUser.badges, "date_earned");
    return (
        <span>
            <div style={{"width":"100%", "borderBottom": "1px solid lightgray", "height":"150px", "paddingBottom":"20px", "paddingTop":"10px"}}>
                <div className="col-sm-3" alt="..." style={{"padding":"10px", "backgroundSize":"cover", "borderRadius":"10%", "height":"120px", "width":"120px", "backgroundPosition":"center", "backgroundImage": "url(" + userImageURL.toString()+ ")"}}></div>
            </div>
            <div className="container-badges">
              {_.map(sortedBadges, (badge: Badge, index: number) => (
                <div className="mini-badge" key={index}>
                    <img className={ classNames("", {
                          'badgegray': !this.userHasBadge(this.state.selectedUser, badge)
                          })}
                          src={"img/badgeimages/"+badge.image}
                     />
                </div>
              ))}
            </div>
            <div className="container-history">
                <div className="panel panel-default">
                  <table className="table" style={{"fontSize":"10px"}}>
                      <thead style={{"fontWeight":"bold"}}>
                        <tr>
                          <th style={{"padding": "5px"}}>Badge</th>
                          <th style={{"padding": "5px"}}>Date Earned</th>
                          <th style={{"padding": "5px"}}>Notes</th>
                        </tr>
                      </thead>
                    <tbody>
                       {_.map(userBadges, (badge: BadgesEarned, index: number) => (
                        <tr key={index}>
                            <td>{this.badgeTitleFromId(badge.id)}</td>
                            <td>{moment(parseInt(badge.date_earned)).format('MMMM Do YYYY, h:mm a')}</td>
                            <td>{badge.details}</td>
                        </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
            </div>
        </span>
    );
  }

  private renderViewBadgeSelected = () => {
    const badgesEarned = BADGES;
    return (
      <span>
        <div style={{"width":"100%", "height":"110px", "position":"relative", "borderBottom": "1px solid lightgray", "paddingBottom":"15px"}}>
            <img src={"img/badgeimages/"+this.state.selectedBadge.image} alt="..." style={{"height":"100px", "width":"100px", "margin":"5px", "borderRadius":"50%", "padding":"5px"}} />
            <div style={{"position":"absolute", "top":"0", "left":"0", "width":"100%", "height":"100%", "paddingLeft":"130px", "paddingTop":"15px", "paddingBottom":"15px", "paddingRight":"15px"}}>
                <div style={{"fontSize":"18px", "width":"100%"}}>{this.state.selectedBadge.title.toUpperCase()}</div>
                <div style={{"fontSize":"10px", "marginTop":"10px"}}>
                    {this.state.selectedBadge.description}
                </div>
            </div>
        </div>
        <div className="container-badges">
          {_.map(USERS, (user: User, index: number) => (
            <div className="mini-badge" key={index}>
                <img className={ classNames("", {
                      'badgegray': !this.userHasBadge(user, this.state.selectedBadge)
                      })}
                      src={"img/userimages17/"+user.image}
                  />
            </div>
          ))}
        </div>
        <div className="container-history">
            <div className="panel panel-default">
              <table className="table" style={{"fontSize":"10px"}}>
                  <thead style={{"fontWeight":"bold"}}>
                    <tr>
                    <td>User</td>
                    <td>Date Earned</td>
                    <td>Notes</td>
                    </tr>
                  </thead>
                <tbody>
                  {_.map(this.allBadgesEarned(this.state.selectedBadge.id), (badge: any, index: number) => (
                    <tr key={index}>
                        <td>{badge.user}</td>
                        <td>{moment(parseInt(badge.date_earned)).format('MMMM Do YYYY, h:mm a')}</td>
                        <td>{badge.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
        </div>
      </span>
    );
  }

  private renderBadgeView = () => {
    return (
      <div className="panel-body">
        { this.state.selectedBadge == null ?
          this.renderViewNoneSelected("SELECT A BADGE FROM THE PANEL ON THE RIGHT") :
          this.renderViewBadgeSelected()
        }
      </div>
    )
  }

  private renderOverallView = () => {
    return (
      <div className="panel-body">
        {this.renderViewNoneSelected("COMING SOON!")}
      </div>
    )
  }

  private renderUserView = () => {
    return (
      <div className="panel-body">
        { this.state.selectedUser == null ?
          this.renderViewNoneSelected("SELECT A USER FROM THE PANEL ON THE LEFT") :
          this.renderViewUserSelected()
        }
      </div>
    )
  }



  private renderMainView = () => {
    if (this.state.currentTab == "badge") {
      return this.renderBadgeView();
    }
    else if (this.state.currentTab == "overall") {
      return this.renderOverallView();
    }
    else if (this.state.currentTab == "user") {
      return this.renderUserView();
    }
    return;
  }


  render() {
    return (
      <div className="rival-website-app-badgequest">
        <div className="col-sm-3" style={{"height": "100%", "paddingTop":"80px", "paddingBottom": "50px"}}>
            <div className="" style={{"textAlign": "center"}}>
                <h3>LEADERBOARD</h3>
            </div>
            {this.renderLeaderBoard()}
        </div>
        <div className="col-sm-6" style={{"height":"100%"}}>
            <span style={{"textAlign":"center"}}>
              <h1>
                <img src="img/Rlogo.png" alt="..." style={{"height":"40px", "width":"40px", "marginRight":"15px"}}/>
                BADGE QUEST 2017
              </h1>
            </span>
            {this.renderMainPanelHeader()}
            <div className="panel panel-default" style={{"marginTop":"10px", "height":"78%", "overflow":"scroll"}}>
              {this.renderMainView()}
            </div>
        </div>
        <div className="col-sm-3" style={{"height":"100%", "paddingTop":"80px", "paddingBottom":"50px"}}>
            <div className="" style={{"textAlign":"center"}}>
                <h3>THE BADGES</h3>
            </div>
            {this.renderBadgePanel()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BadgeQuest);