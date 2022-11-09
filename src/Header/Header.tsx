import "./Header.css"
import React from "react";
import {useNavigate} from "react-router-dom";
import LogoSvgGenerator from "../SvgGenerator/LogoSvgGenerator";
import {connect} from "react-redux";
import {logoutUser} from "../redux/AuthReducer/AuthReducer";

const userPhoto = require("../assets/image/user_photo.png")

const Header = ({logoutUser, authorized}: { logoutUser: any, authorized: boolean }) => {
    const navigate = useNavigate()
    const Logout = () => {
        logoutUser()
        navigate("/login")
    }
    return (
        <div className={"header__block"}>
            <div className={"header__block__logo"}><LogoSvgGenerator id={"logo"}/><span
                className={"header__block__logo__text"}>RivalCMS</span></div>
            {
                authorized ?
                    <span className={"header__block_content"}>
                        <div className={"header__block_content__plan"}><p>Pro Plan</p></div>
                        <img className={"header__block_content__userPhoto"} onClick={() => Logout()} alt={"user_photo"} src={userPhoto}/>
                    </span>
                    :
                    <button onClick={() => navigate("/login")} className={"header__block__button__singIn"}>Sign
                        in</button>
            }

        </div>
    )
}

const stateProps = (state: any) => ({
    authorized: state.auth.authorized
})
export default connect(stateProps, {logoutUser})(Header)