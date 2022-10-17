import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";
import ContentPage from "./ContentPage/ContentPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/content/*" element={<ContentPage/>}/>
            </Routes>
        </div>
    )
}

export default App;