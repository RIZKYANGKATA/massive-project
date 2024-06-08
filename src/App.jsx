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
import Register from './components/register';
import ForgotPassword from './components/forgotPassword';
import Review from './pages/review';
import Payment from './pages/payment';
import Payment2 from './pages/payment2';
import Payment3 from './pages/payment3';
import DetailPackages from './pages/detailPackages';
import Qris from './pages/qris';
import DoneBook from './pages/doneBook';
import BuktiPembayaran from './pages/buktiPembayaran';
import CekTiket from './pages/cekTiket';
import Profile from './pages/profile';
import { Route, Routes } from 'react-router-dom';

import CekEmail from './components/cekEmail'
import SetPassword from './components/setPassword'
import SuksesReset from './components/suksesReset'

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
        <Route path="/register" element={<Register/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/cekemail/:email" element={<CekEmail />} />
        <Route path="/suksesreset" element={<SuksesReset />} />
        <Route path="/setpassword/:email" element={<SetPassword />} />
        <Route path="/review" element={<Review/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/payment2" element={<Payment2/>} />
        <Route path="/payment3" element={<Payment3/>} />
        <Route path="/detailPackages" element={<DetailPackages/>} />
        <Route path="/qris" element={<Qris/>} />
        <Route path="/buktiPembayaran" element={<BuktiPembayaran/>} />
        <Route path="/doneBook" element={<DoneBook/>} />
        <Route path="/cekTiket" element={<CekTiket/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
