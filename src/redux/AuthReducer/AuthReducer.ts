import {InitStates} from "../InitStates";
import {AnyAction} from "redux";
import {ReducersTypes} from "../reducers.types";
import {AuthActions} from "../ActionsType";

const AuthReducer = (state: ReducersTypes.Users = InitStates.Users, action: AnyAction) => {
    switch (action.type) {
        case AuthActions.REGISTRATION_USER:
            return {
                ...state,
                users: [...state.users, action.data]
            }
        case AuthActions.LOGIN_USER:
            if (state.users.some(user => action.email === user.email && action.password === user.password)) {
                return {
                    ...state,
                    authorized: true,
                    activeUser: [...state.users.filter(user => action.email === user.email && action.password === user.password)],
                    statusAuth: false
                }
            } else {
                return {
                    ...state,
                    authorized: false,
                    statusAuth: true
                }
            }
        case AuthActions.LOGOUT_USER:
            return {
                ...state,
                activeUser: {},
                authorized: false
            }
        case AuthActions.SET_STATUS_AUTH:
            return {
                ...state,
                statusAuth: action.status
            }
        default:
            return state
    }
}

export const registrationUser = (data: any) => ({type: AuthActions.REGISTRATION_USER, data})
export const loginUser = (email: string, password: string) => ({type: AuthActions.LOGIN_USER, email, password})
export const logoutUser = () => ({type: AuthActions.LOGOUT_USER})
export const setStatusAuth = (status: boolean) => ({type: AuthActions.SET_STATUS_AUTH, status})

export default AuthReducer