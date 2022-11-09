import React from "react";
import "./RegistrationPage.css"
import Header from "../Header/Header";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {connect} from "react-redux";
import {registrationUser} from "../redux/AuthReducer/AuthReducer";



const RegistrationPage = ({registrationUser}: {registrationUser: any}) => {
    return (
        <div className={"RegistrationPage__block"}>
            <Header/>
            <span className={"RegistrationPage__block__nameSite"}>RivalCMS</span>
            <RegistrationForm registrationUser={registrationUser}/>
        </div>
    )
}

export default connect(null, {registrationUser})(RegistrationPage)