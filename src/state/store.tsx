import { useDispatch } from "react-redux";
import { combineReducers, Reducer } from "redoodle";
import { createStore, Store } from "redux";
import { INITIAL_STATE, reduceRivalWebsiteAppState } from "./rivalWebsiteAppReducer";

const rootReducer= combineReducers({
    rivalWebsiteAppState: reduceRivalWebsiteAppState,
});

export type RootState = ReturnType<typeof rootReducer>


const store: Store<RootState> = createStore(rootReducer as Reducer<RootState>, {
    rivalWebsiteAppState: INITIAL_STATE,
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() 

export default store;