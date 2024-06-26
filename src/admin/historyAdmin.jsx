import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo_putihImage from '../assets/images/logo_putih.png'
import backgroundImage from '../assets/images/background.jpg'
import bromoImage from '../assets/images/bromo.jpg'
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg'
import b2Image from '../assets/images/b2.jpg'
import labuanBajoImage from '../assets/images/labuanBajo.jpg'
import divingLabaImage from '../assets/images/divingLaba.jpg'
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUserCircle,
  FaShoppingBag,
} from 'react-icons/fa'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../components/css/admin.css'
import axios from 'axios'

function HistoryAdmin() {
  const [pembayaran, setPembayaran] = useState([])
  const [filteredPembayaran, setFilteredPembayaran] = useState([])
  const [searchTransaksiId, setSearchTransaksiId] = useState('')
  const [searchTanggal, setSearchTanggal] = useState('')

  useEffect(() => {
    const fetchPembayaran = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pembayaran')
        setPembayaran(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchPembayaran()
  }, [])

  useEffect(() => {
    filterPembayaran()
  }, [pembayaran, searchTransaksiId, searchTanggal])

  const filterPembayaran = () => {
    let filteredData = pembayaran.filter((item) => {
      if (item.status_terima !== 'Sudah Diterima') return false // Exclude items with status not 'Sudah Diterima'
      if (searchTransaksiId && item.no_transaksi !== searchTransaksiId)
        return false // Check transaction ID
      if (searchTanggal && item.tanggal !== searchTanggal) return false // Check transaction date
      return true
    })
    setFilteredPembayaran(filteredData)
  }

  const handleSearch = () => {
    filterPembayaran()
  }

  return (
    <>
      <div id="home">
        <div className="header fixed-top">
          <div className="navbar">
            <a className="navbar-brand" href="#">
              <img
                src={logo_putihImage}
                alt="Teman Wisata"
                className="d-inline-block align-text-top"
                style={{ width: '100px', height: '80px' }}
              />
            </a>
            <ul className="inline-list">
              <li>
                <Link to="/admin">HOME</Link>
              </li>
              {/* <li>
                <Link to="/informasiAdmin">ADMIN</Link>
              </li> */}
              <li>
                <Link to="/pembayaranAdmin">PEMBAYARAN</Link>
              </li>
              <li>
                <Link to="/destinasiAdmin">DESTINASI</Link>
              </li>
              <li>
                <Link to="/historyAdmin">HISTORY</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </div>

      <div className="admin">
        <h1>RIWAYAT PEMBAYARAN</h1>
        <div className="container text-center history">
          <div className="row align-items-center">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Nomor Transaksi"
                value={searchTransaksiId}
                onChange={(e) => setSearchTransaksiId(e.target.value)}
              />
            </div>
            {/* <div className="col">
              <input
                className="form-control"
                type="date"
                placeholder="HH/BB/TTTT"
                value={searchTanggal}
                onChange={(e) => setSearchTanggal(e.target.value)}
              />
            </div> */}
            <div className="col">
              <button className="btn btn-primary" onClick={handleSearch}>
                Cari
              </button>
            </div>
          </div>
          <div className="container text-center hisad">
            <div className="row align-items-center">
              <div className="col">
                <h5>Nomor Transaksi</h5>
              </div>
              <div className="col">
                <h5>Tanggal</h5>
              </div>

              <div className="col">
                <h5>Nama</h5>
              </div>
              <div className="col">
                <h5>Status</h5>
              </div>
            </div>
            <hr />
            {filteredPembayaran.map((item, index) => (
              <div className="row align-items-center" key={index}>
                <div className="col">{item.no_transaksi}</div>
                <div className="col">{item.createdAt}</div>
                <div className="col">{item.first_name}</div>
                <div className="col">{item.status_terima}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contactUs">
        <div className="container">
          <div className="row">
            <div className="col text-start d-flex flex-column justify-content-center">
              <img
                src={logo_putihImage}
                alt="Teman Wisata"
                className="d-inline-block align-text-top"
                style={{
                  width: '90px',
                  height: '70px',
                  margin: '0',
                  padding: '0',
                }}
              />
              <div className="conten1">
                <h5>Sebuah Cerita Sederhana Tentang</h5>
                <h5>Pusat Layanan Pariwisata di </h5>
                <h5>Indonesia</h5>
              </div>
              <div className="conten2">
                Aplikasi travel dan tourism dengan beragam layanan dan informasi
                terpercaya, agar perjalanan anda nyaman.
              </div>
            </div>
            <div className="col">
              <h4>Contact US</h4>
              <hr />
              <p>Jangan ragu untuk menghubungi dan menghubungi kami !!</p>
              <div className="infomasi">
                <div className="wa">
                  <FaWhatsapp style={{ marginLeft: '15px' }} />{' '}
                  <p>+62 813 0989 5630</p>
                </div>

                <div className="email">
                  <FaEnvelope style={{ marginLeft: '15px' }} />{' '}
                  <p>temanwisata@gmail.com</p>
                </div>

                <div className="lokasi">
                  <FaMapMarkerAlt style={{ marginLeft: '15px' }} />{' '}
                  <p>
                    Perkantoran Hijau Arkadia, Tower G, Jl. TB Simatupang No.88,
                    RT.1/RW.1, Kebagusan, Kota Jakarta Selatan, Daerah Khusus
                    Ibukota Jakarta 12520
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h6>Copyright 2024 PT Berkelana Teman Wisata</h6>
      </div>
    </>
  )
}

export default HistoryAdmin
