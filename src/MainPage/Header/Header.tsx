import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./Header.css"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={"header__block"}>
            <div className={"header__block__content"}>
                <NavLink className={"header__block__content__link"} to="/">Pricing</NavLink>
                <NavLink className={"header__block__content__link"} to="/">About</NavLink>
                <button onClick={() => navigate("/login")} className={"header__block__content__button"}>Sign in</button>
            </div>
        </div>
    )
}
export default Header