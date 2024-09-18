import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
const Content = () => {


    return(
        <Routes>
            <Route path="/register" element={<Register/>}/>    
            <Route path="/login" element={<Login/>}/>   
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );

}

export default Content;