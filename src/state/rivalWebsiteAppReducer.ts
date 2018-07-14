import { Reducer, setWith, TypedReducer } from "redoodle";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "./actions";

export interface RivalWebsiteAppState {
    enthusiasmLevel: number;
    languageName: string;
}

export const INITIAL_STATE: RivalWebsiteAppState = {
    enthusiasmLevel: 1,
    languageName: "world",
};

export const reduceRivalWebsiteAppState: Reducer<RivalWebsiteAppState> = TypedReducer.builder<RivalWebsiteAppState>()
    .withHandler(INCREMENT_ENTHUSIASM.TYPE, (state: RivalWebsiteAppState) => {
        return setWith(state, {
                enthusiasmLevel: state.enthusiasmLevel + 1,
            });
    })
    .withHandler(DECREMENT_ENTHUSIASM.TYPE, (state: RivalWebsiteAppState) => {
        return setWith(state, {
                enthusiasmLevel: state.enthusiasmLevel - 1,
            });
    })
    .withDefaultHandler((state) => {
        return state !== undefined ? state : INITIAL_STATE;
    })
    .build();
