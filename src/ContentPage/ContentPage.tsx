import React from "react";
import "./ContentPage.css"
import {Route, Routes} from 'react-router-dom';
import Header from "../Header/Header";
import Navbar from "./Navbar/Navbar";
import ListPages from "./ListPages/ListPages";
import CreatePage from "./CreatePage/CreatePage";
import FilesPage from "./FilesPage/FilesPage";

const ContentPage = () => {
    return (
        <div className={"contentPage__block"}>
            <Header/>
            <div className={"contentPage__block__content"}>
                <Navbar/>
                <Routes>
                    <Route path="/list_pages" element={<ListPages/>}/>
                    <Route path="/create_page" element={<CreatePage/>}/>
                    <Route path="/files_page" element={<FilesPage/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default ContentPage