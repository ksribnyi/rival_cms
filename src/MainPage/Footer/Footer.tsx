import React from "react";
import "./Footer.css";
import LogoSvgGenerator from "../../SvgGenerator/LogoSvgGenerator";
import {NavLink} from "react-router-dom";

const Footer:React.FC = () => {
    return (
        <div className={"footer__block"}>
            <nav className={"footer__block__content"}>
                <NavLink className={"footer__block__content__link"} to="/">Register</NavLink>
                <NavLink className={"footer__block__content__link"} to="/">Term & conditions</NavLink>
                <NavLink className={"footer__block__content__link"} to="/">Privacy policy</NavLink>
                <NavLink className={"footer__block__content__link"} to="/">Documentation</NavLink>
                <NavLink className={"footer__block__content__link"} to="/">Pricing</NavLink>
                <NavLink className={"footer__block__content__link"} to="/">Our blog</NavLink>
                <div className={"footer__block__content__logo"}>
                    <LogoSvgGenerator id={"logo"}/>
                    <NavLink className={"footer__block__content__link"} to="/">RivalCMS</NavLink>
                </div>
            </nav>

        </div>
    )
}
export default Footer