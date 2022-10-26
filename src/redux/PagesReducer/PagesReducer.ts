import {InitStates} from "../InitStates";
import {AnyAction} from "redux";
import {ReducersTypes} from "../reducers.types";
import {PagesActions} from "../ActionsType";

const PagesReducer = (state: ReducersTypes.IPages = InitStates.Pages, action: AnyAction) => {
    switch (action.type) {
        case PagesActions.SET_PAGE:
            return {
                ...state,
                list: {
                    count : state.list.count + 1,
                    pages: [...state.list.pages, action.data]
                }
            }
        case PagesActions.DELETE_PAGE:
            return {
                ...state,
                list: {
                    pages: [...state.list.pages.filter((page) => page.id !== action.id)]
                }
            }
        case PagesActions.SET_STATUS:
            return {
                ...state,
                list: {
                    pages: [...state.list.pages.map((page) => page.id === action.id ? {
                        ...page,
                        pageStatus: action.status
                    } : page)]
                }
            }
        case PagesActions.SET_NAME_PAGE:
            return {
                ...state,
                list: {
                    pages: [...state.list.pages.map((page) => page.id === action.id ? {
                        ...page,
                        namePage: action.name
                    } : page)]
                }
            }
        default:
            return state
    }
}

export const setPage = (data: any) => ({type: PagesActions.SET_PAGE, data})
export const deletePage = (id: number) => ({type: PagesActions.DELETE_PAGE, id})
export const setStatus = (id: number, status: boolean) => ({type: PagesActions.SET_STATUS, id, status})
export const setNamePage = (id: number, name: string) => ({type: PagesActions.SET_NAME_PAGE, id, name})

export default PagesReducer