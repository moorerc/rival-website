import * as React from "react";
import BaseNavBar from '../components/BaseNavBar';


export default class About extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="rival-website-app-about-us">
        <BaseNavBar />

        	<div id="aboutus-content" className="container col-sm-12">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-10" id="maincol">
                  
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10">
                      <div className="row">
                        <div className="thumbnail col-xs-4 nobord">
                          <img src="img/aboutus/MichiganUltimate.png" alt="..."/>
                        </div>
                        <div className="thumbnail col-xs-4 nobord">
                          <img src="img/aboutus/RivalShieldSmall.png" alt="..."/>
                        </div>
                        <div className="thumbnail col-xs-4 nobord">
                          <img src="img/aboutus/FeverUltimate.png" alt="..."/>
                        </div>
                      </div>
                      <br/>
                      <div className="row">
                        <div className="panel panel-default">
                          <div className="panel-body aboutus-paragraph">
                          Rival Ultimate is an experiment in conglomeration, an effort at new beginnings, 
                          an exercise in construction. <br/><br/>
                          A mixed bag of Fever and Flywheel alum, with some Sara Scott thrown in for good measure,
                          the idea for Rival was conceived at its most basic level as a way to play women's ultimate
                            competitively with good friends. Throughout the 2015 club season, Rival grew to be much
                            more than just a hope for spirited, competitive play-- we became a squad boasting a
                              myriad of skillsets bent on building a competitive new women's program in the Great
                              Lakes region.	
                          </div>
                        </div>
                      </div>
                      <br/>
                      <div className="row">
                        <div className="thumbnail col-xs-12">
                          <img src="img/aboutus/RivalTeamBeach.jpg" alt="..."/>
                        </div>
                        <div className="thumbnail col-xs-12">
                          <img src="img/aboutus/RivalBacks.jpg" alt="..."/>
                        </div>
                        <div className="thumbnail col-xs-12">
                          <img src="img/aboutus/RivalPyramid.jpg" alt="..."/>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="col-sm-1"></div>
                    
                
                    
                    
              </div>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
    );
  }
};