import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "./HeaderMain.css"

const HeaderMain:React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={"headerMain__block"}>
            <div className={"headerMain__block__content"}>
                <NavLink className={"headerMain__block__content__link"} to="/">Pricing</NavLink>
                <NavLink className={"headerMain__block__content__link"} to="/">About</NavLink>
                <button onClick={() => navigate("/login")} className={"headerMain__block__content__button"}>Sign in</button>
            </div>
        </div>
    )
}
export default HeaderMain