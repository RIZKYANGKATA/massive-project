import React, { useState } from 'react'
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

function TambahDestinasiAdmin() {
  const [nama, setNama] = useState('')
  const [harga, setHarga] = useState('')
  const [informasi, setInformasi] = useState('')
  const [daerah, setDaerah] = useState('')
  const [image, setImage] = useState(null)
  const navigate = useNavigate()

  const handleImageUpload = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('nama', nama)
    formData.append('harga', harga)
    formData.append('informasi', informasi)
    formData.append('daerah', daerah)
    formData.append('image', image)

    try {
      await axios.post('http://localhost:3000/destinasi', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      navigate('/destinasiadmin')
    } catch (error) {
      console.error('Error submitting form:', error)
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
        <h1>TAMBAH DESTINASI</h1>
        <form className="form-admin" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="namaInput" className="form-label id-admin">
              Nama
            </label>
            <input
              type="text"
              className="form-control id-admin"
              id="namaInput"
              placeholder="Masukkan Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hargaInput" className="form-label nama-admin">
              Harga
            </label>
            <input
              type="number"
              className="form-control nama-admin"
              id="hargaInput"
              placeholder="Masukkan Harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="informasiInput" className="form-label foto-admin">
              Informasi
            </label>
            <input
              type="text"
              className="form-control foto-admin"
              id="informasiInput"
              onChange={(e) => setInformasi(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="daerahInput" className="form-label username-admin">
              Daerah
            </label>
            <input
              type="text"
              className="form-control username-admin"
              id="daerahInput"
              placeholder="Masukkan Daerah"
              value={daerah}
              onChange={(e) => setDaerah(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label password-admin">
              Image
            </label>
            <input
              type="file"
              className="form-control password-admin"
              id="imageInput"
              onChange={handleImageUpload}
              required
            />
          </div>
          <button className="btn-simpan-admin" type="submit">
            SIMPAN
          </button>
        </form>
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

export default TambahDestinasiAdmin
