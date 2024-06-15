import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo_putihImage from '../assets/images/logo_putih.png'
import backgroundImage from '../assets/images/background.jpg'
import bromoImage from '../assets/images/bromo.jpg'
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg'
import barCodeImage from '../assets/images/barCode.png'
import b2Image from '../assets/images/b2.jpg'
import labuanBajoImage from '../assets/images/labuanBajo.jpg'
import divingLabaImage from '../assets/images/divingLaba.jpg'
import candiImage from '../assets/images/candi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUserCircle,
} from 'react-icons/fa'
import {
  faStar,
  faPaperclip,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { faUniversity, faBank } from '@fortawesome/free-solid-svg-icons'

import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../components/css/profile.css'
import levelNumber from '../components/levelNumber'

function Profile() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScroll = (event) => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href').substring(1)

    if (location.pathname === '/homeuser') {
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/homeuser')
      setTimeout(() => {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const searchParams = new URLSearchParams(location.search)
  const destinationId = searchParams.get('Id')

  const imageMap = {
    '1': backgroundImage,
    '2': bromoImage,
    '3': pulauDerawanImage,
    '4': labuanBajoImage,
    '5': divingLabaImage,
    '6': b2Image,
  }

  const titleMap = {
    '1': 'Pulau Weh Aceh',
    '2': 'Bromo',
    '3': 'Pulau Derawan',
    '4': 'Labuan Bajo',
    '5': 'Diving Labuan Bajo',
    '6': 'Bromo Sunrise',
  }

  const Harga = {
    '1': 'RP 960.000',
    '2': 'RP 560.000',
    '3': 'RP 1000.000',
    '4': 'RP 1100.000',
    '5': 'RP 1000.000',
    '6': 'RP 600.000',
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    console.log('Selected file:', file)
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
                <a href="#home" onClick={handleScroll}>
                  HOME
                </a>
              </li>
              <li>
                <a href="#aboutUs" onClick={handleScroll}>
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="#destination" onClick={handleScroll}>
                  DESTINATION
                </a>
              </li>
              <li>
                <a href="#culture" onClick={handleScroll}>
                  CULTURE
                </a>
              </li>
              <li>
                <a href="#package" onClick={handleScroll}>
                  PACKAGE
                </a>
              </li>
              <li>
                <a href="#contactUs" onClick={handleScroll}>
                  CONTACT US
                </a>
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

      <div className="profile">
        <h2>PROFILE</h2>
        <div className="card profil">
          <h5
            style={{
              paddingTop: '20px',
              paddingLeft: '20px',
              fontWeight: '700',
            }}
          >
            Personal Detail
          </h5>
          <div className="container detail-profil">
            <div className="row">
              <div className="col">
                <FaUserCircle
                  size="180px"
                  style={{ marginRight: '10px', marginLeft: '150px' }}
                />
              </div>
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="nama-profil"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control nama-profil"
                    id="exampleFormControlInput1"
                    placeholder="Uhuy"
                  ></input>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="ttl-profil"
                  >
                    Tempat Tanggal Lahir
                  </label>
                  <input
                    type="text"
                    className="form-control ttl-profil"
                    id="exampleFormControlInput1"
                    placeholder="Jakarta, 25 Mei 1945"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="container detail-profil-2">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="email-profil"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control email-profil"
                    id="exampleFormControlInput1"
                    placeholder="Uhuy"
                  ></input>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="kota-profil"
                  >
                    Kota
                  </label>
                  <input
                    type="text"
                    className="form-control kota-profil"
                    id="exampleFormControlInput1"
                    placeholder="Uhuy"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="container detail-profil-3">
            <div className="row">
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="no-profil"
                  >
                    No. Telp
                  </label>
                  <input
                    type="text"
                    className="form-control no-profil"
                    id="exampleFormControlInput1"
                    placeholder="Uhuy"
                  ></input>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="provinsi-profil"
                  >
                    Provinsi
                  </label>
                  <input
                    type="text"
                    className="form-control provinsi-profil"
                    id="exampleFormControlInput1"
                    placeholder="Uhuy"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="alamat-profil">
              Alamat
            </label>
            <input
              type="text"
              className="form-control alamat-profil"
              id="exampleFormControlInput1"
              placeholder="Uhuy"
            ></input>
          </div>
          <h5
            style={{
              paddingTop: '20px',
              paddingLeft: '20px',
              fontWeight: '700',
            }}
          >
            Submitted Documents
          </h5>
          <div className="mb-3">
            <label htmlFor="ktpInput" className="ktp-profil">
              KTP / KK
            </label>
            <input
              type="file"
              className="form-control ktp-profil"
              id="ktpInput"
              onChange={handleFileUpload}
            ></input>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <button className="btn-cancle me-2">
              <Link to="/">CANCLE</Link>
            </button>
            <button className="btn-save">
              <Link to="/">SAVE</Link>
            </button>
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

export default Profile
