import {AnyAction, combineReducers, createStore, Store} from "redux";
import PagesReducer from "./PagesReducer/PagesReducer";
import FilesReducer from "./FilesReducer/FilesReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TStore = Store<TAppState, AnyAction>;
export type TGetState = () => TAppState;

let reducers = combineReducers({
    pages: PagesReducer,
    files: FilesReducer
})

const store: TStore = createStore(reducers);

export default store