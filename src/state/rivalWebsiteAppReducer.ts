import { Reducer, setWith, TypedReducer } from "redoodle";
import { SELECT_ROSTER, SELECT_SSS_TAB } from "./actions";
import { RosterList, RIVAL_2019 } from "src/data/RosterList";
import { SSSNavTab } from "src/data/sss/SSS";

export interface RivalWebsiteAppState {
  selectedRoster: RosterList;
  sssTab: SSSNavTab;
}

export const INITIAL_STATE: RivalWebsiteAppState = {
  selectedRoster: RIVAL_2019,
  sssTab: SSSNavTab.HOME
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
  .withHandler(
    SELECT_SSS_TAB.TYPE,
    (state: RivalWebsiteAppState, selectedTab: SSSNavTab) => {
      return setWith(state, {
        sssTab: selectedTab
      });
    }
  )
  .withDefaultHandler(state => {
    return state !== undefined ? state : INITIAL_STATE;
  })
  .build();
