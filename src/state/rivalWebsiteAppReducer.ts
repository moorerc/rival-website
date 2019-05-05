import { Reducer, setWith, TypedReducer } from "redoodle";
import { SELECT_ROSTER } from "./actions";
import { RosterList, RIVAL_2018 } from "src/data/RosterList";

export interface RivalWebsiteAppState {
  selectedRoster: RosterList;
}

export const INITIAL_STATE: RivalWebsiteAppState = {
  selectedRoster: RIVAL_2018
};

export const reduceRivalWebsiteAppState: Reducer<
  RivalWebsiteAppState
> = TypedReducer.builder<RivalWebsiteAppState>()
  .withHandler(
    SELECT_ROSTER.TYPE,
    (state: RivalWebsiteAppState, selectedRoster: RosterList) => {
      return setWith(state, {
        selectedRoster: selectedRoster
      });
    }
  )
  .withDefaultHandler(state => {
    return state !== undefined ? state : INITIAL_STATE;
  })
  .build();
