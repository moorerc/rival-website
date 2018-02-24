// import { combineReducers, loggingMiddleware, Reducer } from "redoodle";
import { combineReducers, Reducer } from "redoodle";
import { createStore, Store } from "redux";
import { INITIAL_STATE, reduceRivalWebsiteAppState, RivalWebsiteAppState } from "./rivalWebsiteAppReducer";

export interface RootState {
    rivalWebsiteAppState: RivalWebsiteAppState;
}

const reducer: Reducer<RootState> = combineReducers({
    rivalWebsiteAppState: reduceRivalWebsiteAppState,
});

export const store: Store<RootState> = createStore(reducer as Reducer<RootState>, {
    rivalWebsiteAppState: INITIAL_STATE,
});
