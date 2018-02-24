import { TypedAction } from "redoodle";

export const PREFIX = "@rival-website";

export const INCREMENT_ENTHUSIASM = TypedAction.define(`${PREFIX}//INCREMENT_ENTHUSIASM`)<{}>();
export const DECREMENT_ENTHUSIASM = TypedAction.define(`${PREFIX}//DECREMENT_ENTHUSIASM`)<{}>();
