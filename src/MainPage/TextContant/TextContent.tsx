import React from "react";
import "./TextContent.css"
import {useNavigate} from "react-router-dom";

const demo = require("../../assets/image/Demo.png")

const TextContent:React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={"mainContent__block"}>
            <h1 className={"mainContent__block__nameSite"}>RivalCMS</h1>
            <span className={"mainContent__block__tagline"}>Fresh new way to build sites</span>
            <button onClick={() => navigate("/login")} className={"mainContent__block__button"}>Get started free</button>
            <span className={"mainContent__block__text"}>*no card needed</span>
            <img className={"mainContent__block__imageDemo"} alt={"demo"} src={demo}/>
        </div>
    )
}
export default TextContent