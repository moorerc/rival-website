import { TypedAction } from "redoodle";
import { RosterList } from "src/data/RosterList";
import { SSSNavTab } from "src/data/sss/SSS";

export const PREFIX = "@rival-website";

export const SELECT_ROSTER = TypedAction.define(`${PREFIX}//SELECT_ROSTER`)<
  RosterList
>();

export const SELECT_SSS_TAB = TypedAction.define(`${PREFIX}//SELECT_SSS_TAB`)<
  SSSNavTab
>();
