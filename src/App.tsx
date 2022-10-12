import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage/MainPage";
import LoginPage from "./LoginPage/LoginPage";
import './App.css';

const App = () =>{
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </div>
  )
}

export default App;