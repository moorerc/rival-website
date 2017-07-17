import * as React from "react";
import BaseNavBar from '../components/BaseNavBar';

export default class News extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="rival-website-app-news">
        <BaseNavBar />

      <div id="news-content" className="container col-sm-12">
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10" id="maincol">
					
					
					
					<div className="row">
						<div className="col-sm-2"></div>
						<div className="col-sm-8" style={{"text-align": "center"}}>
							<span className="newsheader"> NEWS 2015 </span>
						</div>
						<div className="col-sm-2"></div>
					</div>

					<br/><br/>					
					
					<div className="row">
						<div className="col-xs-6 col-sm-4 col-md-3">
							<a className="article" target="_blank" href="http://ultiworld.com/2015/06/29/santa-maria-sinks-a-new-womens-team-and-a-shakeup-in-the-great-lakes/">
							<div className="thumbnail">
								<span className="article-icon glyphicon glyphicon-pencil"></span>
								<div className="caption">
									<div className="article-date">June 19, 2015</div>
									<div className="article-title">"Santa Maria Sinks: A New Women's Team And A Shakeup In The Great Lakes"</div>
									<div className="article-source">Ultiworld</div>
								</div>
							</div>
							</a>
						</div>
						
						<div className="col-xs-6 col-sm-4 col-md-3">
							<a className="article" target="_blank" href="http://ultiworld.com/livewire/elite-select-challenge-2015-filming-schedule/">
							<div className="thumbnail">
								<span className="article-icon glyphicon glyphicon-film"></span>
								<div className="caption">
									<div className="article-date">July 9, 2015</div>
									<div className="article-title">"Elite-Select Challenge 2015 Filming Schedule"</div>
									<div className="article-source">Ultiworld</div>
								</div>
							</div>
							</a>
						</div>
						
						
						<div className="col-xs-6 col-sm-4 col-md-3">
							<a className="article" target="_blank" href="https://artsandcraycrafts.wordpress.com/2015/08/28/sharing-stories/">
							<div className="thumbnail">
								<span className="article-icon glyphicon glyphicon-pencil"></span>
								<div className="caption">
									<div className="article-date">August 28, 2015</div>
									<div className="article-title">"Sharing Stories"</div>
									<div className="article-source">Sarah Craycraft</div>
								</div>
							</div>
							</a>
						</div>
						
					</div>
					
					
			</div>
			<div className="col-sm-1"></div>
		</div>
	</div>


      </div>
    );
  }
};