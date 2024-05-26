import React, { useState } from 'react';
import Card from './components/card';
import Home from './pages/home';
import About from './pages/about';
import Destinasi from './pages/destinasi';
import Aceh from './pages/aceh';
import Bromo from './pages/bromo';
import Derawan from './pages/derawan';
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
      </Routes>
    </>



  );
}

export default App;
