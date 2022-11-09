import {AnyAction, combineReducers, createStore, Store} from "redux";
import PagesReducer from "./PagesReducer/PagesReducer";
import FilesReducer from "./FilesReducer/FilesReducer";
import AuthReducer from "./AuthReducer/AuthReducer";

export type TAppState = ReturnType<typeof reducers>;
export type TStore = Store<TAppState, AnyAction>;
export type TGetState = () => TAppState;

let reducers = combineReducers({
    pages: PagesReducer,
    files: FilesReducer,
    auth: AuthReducer
})

const store: TStore = createStore(reducers);

export default store