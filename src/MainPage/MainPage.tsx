import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import Footer from "./Footer/Footer";
import "./MainPage.css"
import "../assets/image/Demo.png"
import TextContent from "./TextContant/TextContent";

const MainPage: React.FC = () => {
    return (
        <div className={"mainPage__block"}>
            <div className={"mainPage__block__content"}>
                <HeaderMain/>
                <TextContent/>
            </div>
            <Footer/>
        </div>
    )
}
export default MainPage