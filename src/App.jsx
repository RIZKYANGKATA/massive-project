import React, { useState } from 'react';
import Card from './components/card';
import Home from './pages/home';
import About from './pages/about';
import Destinasi from './pages/destinasi';
import Aceh from './pages/aceh';
import Bromo from './pages/bromo';
import Derawan from './pages/derawan';
import Packages from './pages/packages';
import CultureBali from './pages/cultureBali';
import Panglipuran from './pages/panglipuran';
import Login from './components/login';
import { Route, Routes } from 'react-router-dom';


function App() {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/destinasi" element={<Destinasi/>} /> 
        <Route path="/aceh/:id" element={<Aceh/>} /> 
        <Route path="/bromo/:id" element={<Bromo/>} /> 
        <Route path="/derawan/:id" element={<Derawan/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/cultureBali" element={<CultureBali/>} />
        <Route path="/panglipuran/:id" element={<Panglipuran/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>



  );
}

export default App;
