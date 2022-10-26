import {AnyAction, combineReducers, createStore, Store} from "redux";
import PagesReducer from "./PagesReducer/PagesReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TStore = Store<TAppState, AnyAction>;
export type TGetState = () => TAppState;

let reducers = combineReducers({
    pages: PagesReducer
})

const store: TStore = createStore(reducers);

export default store