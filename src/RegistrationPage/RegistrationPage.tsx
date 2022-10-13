import React from "react";
import "./RegistrationPage.css"
import Header from "../Header/Header";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


const RegistrationPage = () => {
    return (
        <div className={"RegistrationPage__block"}>
            <Header/>
            <span className={"RegistrationPage__block__nameSite"}>RivalCMS</span>
            <RegistrationForm/>
        </div>
    )
}

export default RegistrationPage