import React, { useState } from 'react'
import Card from './components/card'
import Home from './pages/home'
import About from './pages/about'
import Destinasi from './pages/destinasi'
import Aceh from './pages/aceh'
import Bromo from './pages/bromo'
import Derawan from './pages/derawan'
import Packages from './pages/packages'
import CultureBali from './pages/cultureBali'
import Panglipuran from './pages/panglipuran'
import Login from './components/login'
import Register from './components/register'
import ForgotPassword from './components/forgotPassword'
import Review from './pages/review'
import Payment from './pages/payment'
import Payment2 from './pages/payment2'
import Payment3 from './pages/payment3'
import DetailPackages from './pages/detailPackages'
import Qris from './pages/qris'
import DoneBook from './pages/doneBook'
import BuktiPembayaran from './pages/buktiPembayaran'
import CekTiket from './pages/cekTiket'
import Profile from './pages/profile'
import Admin from './admin/admin'
import InformasiAdmin from './admin/informasiAdmin'
import TambahAdmin from './admin/tambahAdmin'
import EditAdmin from './admin/editAdmin'
import PembayaranAdmin from './admin/pembayaranAdmin'
import HistoryAdmin from './admin/historyAdmin'
import { Route, Routes } from 'react-router-dom'

import CekEmail from './components/cekEmail'
import SetPassword from './components/setPassword'
import SuksesReset from './components/suksesReset'
import Detail from './pages/detail'
import DestinasiAdmin from './admin/destinasiAdmin'
import TambahDestinasiAdmin from './admin/tambahDestinasiAdmin'
import EditDestinasiAdmin from './admin/editDestinasiAdmin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/homeuser" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinasi" element={<Destinasi />} />
        <Route path="/destination/:id" element={<Detail />} />
        <Route path="/aceh/:id" element={<Aceh />} />
        <Route path="/bromo/:id" element={<Bromo />} />
        <Route path="/derawan/:id" element={<Derawan />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/cultureBali" element={<CultureBali />} />
        <Route path="/panglipuran/:id" element={<Panglipuran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/cekemail/:email" element={<CekEmail />} />
        <Route path="/suksesreset" element={<SuksesReset />} />
        <Route path="/setpassword/:email" element={<SetPassword />} />
        <Route path="/review" element={<Review />} />
        <Route path="/payment/:idparams" element={<Payment />} />
        <Route path="/payment2/:idparams" element={<Payment2 />} />
        <Route path="/payment3/:idparams" element={<Payment3 />} />
        <Route path="/detailPackages" element={<DetailPackages />} />
        <Route path="/qris" element={<Qris />} />
        <Route
          path="/buktiPembayaran/:idparams"
          element={<BuktiPembayaran />}
        />
        <Route path="/doneBook/:idparams" element={<DoneBook />} />
        <Route path="/cekTiket/:idparams" element={<CekTiket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/informasiAdmin" element={<InformasiAdmin />} />
        <Route path="/tambahAdmin" element={<TambahAdmin />} />
        <Route path="/editAdmin" element={<EditAdmin />} />
        <Route path="/pembayaranAdmin" element={<PembayaranAdmin />} />
        <Route path="/historyAdmin" element={<HistoryAdmin />} />
        <Route path="/destinasiAdmin" element={<DestinasiAdmin />} />
        <Route
          path="/tambahdestinasiadmin"
          element={<TambahDestinasiAdmin />}
        />
        <Route
          path="/editdestinasiadmin/:idparams"
          element={<EditDestinasiAdmin />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
