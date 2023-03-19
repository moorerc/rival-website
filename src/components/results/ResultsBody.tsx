import * as React from "react";
import "../../styles/ResultsBody.css";

import {
  Button,
  ButtonGroup,
  Card,
  InputGroup,
  Menu,
  MenuItem,
  NonIdealState,
  Popover,
  Position,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { RIVAL_ROSTERS, RosterList } from "src/data/RosterList";
import { Tournament } from "src/data/Tournaments";
import ResultsCard from "./ResultsCard";
import TournamentCard from "./TournamentCard";

export namespace ResultsBody {
  export interface Props {
    tournaments: Tournament[];
    roster: RosterList;
    searchString: string;
    showAll: boolean;
    selectRoster: (roster: RosterList) => void;
    changeSearchString: (searchString: string) => void;
    changeShowAll: (showAll: boolean) => void;
  }

  export interface State {
    selectedTournament: Tournament;
  }
}

export default class ResultsBody extends React.Component<
  ResultsBody.Props,
  ResultsBody.State
> {
  private scrollContainerRef = React.createRef<any>();

  constructor(props: ResultsBody.Props) {
    super(props);
    this.state = {
      selectedTournament: this.props.tournaments[0],
    };
  }

  render() {
    const { tournaments } = this.props;
    const { selectedTournament } = this.state;

    return (
      <div className="results-body">
        <div className="body-top">
          <div className="top-left">
            <TournamentCard tournament={selectedTournament} />
          </div>
          <div className="top-right">
            <div className="section-title">
              <span className="spacer" />
              <span className="title">Schedule / Results</span>
              <span className="spacer" />
            </div>
            {this.renderViewModeButtonGroup()}
            <Card className="results-body-card" ref={this.scrollContainerRef}>
              {tournaments.map((tournament) => (
                <ResultsCard
                  key={tournament.id}
                  tournament={tournament}
                  onClick={() => this.selectTournament(tournament)}
                />
              ))}
              {tournaments.length === 0 && (
                <NonIdealState
                  icon={IconNames.DISABLE}
                  title="No Results"
                  description="Try a different search"
                />
              )}
            </Card>
          </div>
        </div>
        <div className="body-bottom" />
      </div>
    );
  }

  private renderViewModeButtonGroup() {
    const { roster, searchString, showAll } = this.props;
    return (
      <ButtonGroup
        // minimal={true}
        fill={true}
        className="news-body-button-group"
      >
        <Popover
          content={this.rosterSelectMenu()}
          position={Position.BOTTOM}
          minimal={true}
          className="news-body-select-menu"
          popoverClassName="news-body-select-menu-popover"
          usePortal={true}
          targetClassName="news-body-select-menu-popover-target"
        >
          <Button
            className="news-body-select-menu-button"
            rightIcon={IconNames.CHEVRON_DOWN}
            text={showAll ? "All Results" : roster.displayName}
            minimal={true}
          />
        </Popover>
        <InputGroup
          className="news-body-search"
          round={false}
          leftIcon={IconNames.SEARCH}
          value={searchString}
          onChange={this.handleSearchChange}
          onSubmit={() => {}}
          rightElement={
            searchString !== "" ? (
              <Button
                icon={IconNames.SMALL_CROSS}
                minimal={true}
                onClick={this.clearSearchString}
              />
            ) : (
              undefined
            )
          }
        />
      </ButtonGroup>
    );
  }

  private rosterSelectMenu() {
    return (
      <Menu>
        <MenuItem text="All Results" onClick={this.handleShowAll} />
        {RIVAL_ROSTERS.map((roster) => (
          <MenuItem
            key={roster.id}
            text={roster.displayName}
            onClick={() => this.handleSelectRoster(roster)}
          />
        ))}
      </Menu>
    );
  }

  private handleShowAll = () => {
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
    this.props.changeShowAll(true);
  };

  private handleSelectRoster = (roster: RosterList) => {
    this.props.selectRoster(roster);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeSearchString(event.target.value);
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private clearSearchString = () => {
    this.props.changeSearchString("");
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollTop = 0;
    }
  };

  private selectTournament = (selectedTournament: Tournament) => {
    this.setState({ selectedTournament });
  };
}
