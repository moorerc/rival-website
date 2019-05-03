import * as React from "react";
import "../../styles/Results.css";
import "../../styles/MobileResultsBody.css";

import * as _ from "lodash";
import { Tournament } from "src/data/Tournaments";
import TournamentCard from "./TournamentCard";
import { RosterList, RIVAL_ROSTERS } from "src/data/RosterList";
import {
  ButtonGroup,
  Popover,
  Button,
  InputGroup,
  Position,
  Menu,
  MenuItem
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

interface MobileResultsBodyProps {
  tournaments: Tournament[];
  roster: RosterList;
  searchString: string;
  showAll: boolean;
  selectRoster: (roster: RosterList) => void;
  changeSearchString: (searchString: string) => void;
  changeShowAll: (showAll: boolean) => void;
}

export default class MobileResultsBody extends React.Component<
  MobileResultsBodyProps
> {
  render() {
    const { tournaments } = this.props;

    return (
      <React.Fragment>
        {this.renderViewModeButtonGroup()}
        <div className="mobile-results-body-scroll-container">
          {_.map(tournaments, (tournament, index) => (
            <TournamentCard tournament={tournament} key={index} />
          ))}
        </div>
      </React.Fragment>
    );
  }

  private renderViewModeButtonGroup() {
    const { roster, searchString, showAll } = this.props;
    return (
      <ButtonGroup
        minimal={true}
        fill={true}
        className="mobile-results-button-group"
      >
        <Popover
          content={this.rosterSelectMenu()}
          position={Position.BOTTOM}
          minimal={true}
          className="mobile-results-select-menu"
          popoverClassName="mobile-results-select-menu-popover"
        >
          <Button
            rightIcon={IconNames.CHEVRON_DOWN}
            text={showAll ? "All Results" : roster.displayName}
          />
        </Popover>
        <InputGroup
          className="mobile-results-search"
          round={false}
          leftIcon={IconNames.SEARCH}
          value={searchString}
          onChange={this.handleSearchChange}
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
        <MenuItem
          text="All Results"
          onClick={() => this.props.changeShowAll(true)}
        />
        {RIVAL_ROSTERS.map(roster => (
          <MenuItem
            key={roster.id}
            text={roster.displayName}
            onClick={() => this.props.selectRoster(roster)}
          />
        ))}
      </Menu>
    );
  }

  private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.changeSearchString(event.target.value);
  };

  private clearSearchString = () => {
    this.props.changeSearchString("");
  };
}
