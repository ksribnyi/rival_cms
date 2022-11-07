import {InitStates} from "../InitStates";
import {AnyAction} from "redux";
import {ReducersTypes} from "../reducers.types";
import {FilesActions} from "../ActionsType";

const FilesReducer = (state: ReducersTypes.IFiles = InitStates.Files, action: AnyAction) => {
    switch (action.type) {
        case FilesActions.SET_FILE:
            return {
                ...state,
                list: {
                    count : state.list.count + 1,
                    files: [...state.list.files, {...action.data, id: state.list.count}]
                }
            }
        case FilesActions.DELETE_FILE:
            return {
                ...state,
                list: {
                    count: state.list.count,
                    files: [...state.list.files.filter((file) => file.id !== action.id)]
                }
            }
        case FilesActions.SET_NAME_FILE:
            return {
                ...state,
                list: {
                    files: [...state.list.files.map((file) => file.id === action.id ? {
                        ...file,
                        name: action.name
                    } : file)]
                }
            }
        default:
            return state
    }
}

export const setFile = (data: any, time: number) => ({type: FilesActions.SET_FILE, data, time})
export const deleteFile = (id: number) => ({type: FilesActions.DELETE_FILE, id})
export const setNameFile = (id: number, name: string) => ({type: FilesActions.SET_NAME_FILE, id, name})

export default FilesReducer