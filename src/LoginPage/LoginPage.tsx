import React from "react";
import "./LoginPage.css"
import LoginForm from "./LoginForm/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <div className={"loginPage__block"}>
            <span className={"loginPage__block__nameSite"}>RivalCMS</span>
            <LoginForm/>
        </div>
    )
}

export default LoginPage