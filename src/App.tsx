import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import MainPage from "./MainPage/MainPage";

const App = () =>{
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    </div>
  )
}

export default App;