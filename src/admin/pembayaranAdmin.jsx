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

function PembayaranAdmin() {
  const [pembayaran, datapembayaran] = useState([])

  const getpembayaran = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/pembayaran`)
      datapembayaran(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getpembayaran()
  }, [])

  const handleStatusChange = async (id) => {
    console.log('id', id)
    try {
      const response = await axios.put(
        `http://localhost:3000/pembayaran/${id}/status`,
        {
          status: 'Sudah Diterima',
        },
      )
      console.log('response', response)
      getpembayaran()
    } catch (error) {
      console.error('Error updating status:', error)
    }
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
        <h1>PEMBAYARAN</h1>
        <div className="container text-center informasi-admin">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nomor Transaksi</th>
                <th>Tanggal</th>
                <th>Nama</th>
                <th>Status</th>
                <th>Status Terima</th>
              </tr>
            </thead>
            <tbody>
              {pembayaran.map((item, index) => (
                <tr key={index}>
                  <td>{item.no_transaksi}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.first_name}</td>
                  <td>{item.status}</td>
                  <td
                    className={
                      item.status_terima === 'Sudah Diterima'
                        ? 'text-success'
                        : 'text-danger'
                    }
                  >
                    {item.status_terima}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleStatusChange(item.id)}
                      disabled={item.status_terima === 'Sudah Diterima'}
                    >
                      Ubah Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default PembayaranAdmin
