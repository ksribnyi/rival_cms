import React from "react";
import "./ContentPage.css"
import {Route, Routes} from 'react-router-dom';
import Header from "../Header/Header";
import Navbar from "./Navbar/Navbar";
import ListPages from "./ListPages/ListPages";

const ContentPage = () => {
    return (
        <div className={"contentPage__block"}>
            <Header/>
            <div className={"contentPage__block__content"}>
                <Navbar/>
                <Routes>
                    <Route path="/list_pages" element={<ListPages/>}/>
                </Routes>
            </div>
        </div>
    )
}
export default ContentPage