import { Reducer, setWith, TypedReducer } from "redoodle";
import { RIVAL_2022, RosterList } from "src/data/RosterList";
import { SELECT_ROSTER } from "./actions";

export interface RivalWebsiteAppState {
  selectedRoster: RosterList;
}

export const INITIAL_STATE: RivalWebsiteAppState = {
  selectedRoster: RIVAL_2022,
};

export const reduceRivalWebsiteAppState: Reducer<RivalWebsiteAppState> = TypedReducer.builder<
  RivalWebsiteAppState
>()
  .withHandler(
    SELECT_ROSTER.TYPE,
    (state: RivalWebsiteAppState, selectedRoster: RosterList) => {
      return setWith(state, {
        selectedRoster: selectedRoster,
      });
    }
  )
  .withDefaultHandler((state) => {
    return state !== undefined ? state : INITIAL_STATE;
  })
  .build();
