import React, { useState } from 'react';
import Card from './components/card';
import Home from './pages/home';
import About from './pages/about';
import Destinasi from './pages/destinasi';
import { Route, Routes } from 'react-router-dom';


function App() {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<Home/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/about" element={<About/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/destinasi" element={<Destinasi/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </>



  );
}

export default App;
