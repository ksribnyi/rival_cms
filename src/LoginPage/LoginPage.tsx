import React from "react";
import "./LoginPage.css"
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {loginUser, setStatusAuth} from "../redux/AuthReducer/AuthReducer";

const LoginPage = ({loginUser, authorized, statusAuth, setStatusAuth}: {loginUser : any, authorized: boolean, statusAuth: boolean, setStatusAuth: any}) => {
    return (
        <div className={"loginPage__block"}>
            <span className={"loginPage__block__nameSite"}>RivalCMS</span>
            <LoginForm loginUser={loginUser} authorized={authorized} statusAuth={statusAuth} setStatusAuth={setStatusAuth}/>

        </div>
    )
}

const stateProps = (state: any) => ({
    authorized: state.auth.authorized,
    statusAuth: state.auth.statusAuth
})

export default connect(stateProps, {loginUser, setStatusAuth})(LoginPage)