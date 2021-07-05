import { TypedAction } from "redoodle";
import { RosterList } from "src/data/RosterList";

export const PREFIX = "@rival-website";

export const SELECT_ROSTER = TypedAction.define(`${PREFIX}//SELECT_ROSTER`)<
  RosterList
>();