import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./mainPage.css"
import "../assets/image/Demo.png"
import TextContent from "./TextContant/TextContent";

const MainPage: React.FC = () => {
    return (
        <div className={"mainPage__block"}>
            <div className={"mainPage__block__content"}>
                <Header/>
                <TextContent/>
            </div>
            <Footer/>
        </div>
    )
}
export default MainPage