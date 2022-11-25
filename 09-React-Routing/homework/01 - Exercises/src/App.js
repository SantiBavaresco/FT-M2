import React from "react";
import {Routes, Route} from "react-router-dom";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */

// Importa Routes y Route desde react-router-dom
//  y renderiza el componente Routes.

export default function App() {
  return (
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shipping" element={ <Shipping/> } />
      <Route path="/promotions" element={ <Promotions/> } />
      <Route path="/cruises/:id" element={ <CardDetail/> } /> 
            {/* :id es una variable*/}
    </Routes>
  </div>)
}
