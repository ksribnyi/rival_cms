import "./Header.css"
import React from "react";
import {useNavigate} from "react-router-dom";
import LogoSvgGenerator from "../SvgGenerator/LogoSvgGenerator";

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={"header__block"}>
            <div className={"header__block__logo"}><LogoSvgGenerator id={"logo"}/><span className={"header__block__logo__text"}>RivalCMS</span></div>
            <button onClick={() => navigate("/login")} className={"header__block__button__singIn"}>Sign in</button>
        </div>
    )
}
export default Header