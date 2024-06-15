import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import temanWisataImage from '../assets/images/temanWisata.png'
import backgroundImage from '../assets/images/background.jpg'
import bromoImage from '../assets/images/bromo.jpg'
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg'
import baliImage from '../assets/images/bali.jpg'
import lombok1Image from '../assets/images/lombok1.jpg'
import surabayaImage from '../assets/images/surabaya.jpg'
import bandungImage from '../assets/images/bandung.jpg'
import komodoImage from '../assets/images/komodo.jpg'
import yogyakartaImage from '../assets/images/yogyakarta.jpg'
import kalselImage from '../assets/images/kalsel.jpg'
import jakartaImage from '../assets/images/jakarta.jpg'
import sulselImage from '../assets/images/sulsel.jpg'
import niasImage from '../assets/images/nias.jpg'
import papuaImage from '../assets/images/papua.jpg'
import banyuwangiImage from '../assets/images/banyuwangi.jpg'
import b2Image from '../assets/images/b2.jpg'
import labuanBajoImage from '../assets/images/labuanBajo.jpg'
import divingLabaImage from '../assets/images/divingLaba.jpg'
import tobaImage from '../assets/images/toba.png'
import palembangImage from '../assets/images/palembang.png'
import semarangImage from '../assets/images/semarang.png'
import logo_putihImage from '../assets/images/logo_putih.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaUserCircle,
} from 'react-icons/fa'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import '../App.css'
import Card from '../components/card'
import axios from 'axios'

function Home() {
  const [destinasi, setDestinasi] = useState([])

  const getDestinasi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/destinasi')
      setDestinasi(response.data.slice(0, 3)) // Mengambil 3 data teratas
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getDestinasi()
  }, [])

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...'
    }
    return text
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
            <ul className="inline-list" style={{ marginLeft: '160px' }}>
              <li>
                <a href="#home">HOME</a>
              </li>
              <li>
                <a href="#aboutUs">ABOUT US</a>
              </li>
              <li>
                <a href="#destination">DESTINATION</a>
              </li>
              <li>
                <a href="#culture">CULTURE</a>
              </li>
              <li>
                <a href="#package">PACKAGE</a>
              </li>
              <li>
                <a href="#contactUs">CONTACT US</a>
              </li>
              {/* <li><button className="btn-register" type="submit"><Link to="/register">SIGN UP</Link></button></li>
          <li><button className="btn-login" type="submit"><Link to="/login">LOGIN</Link></button></li> */}
            </ul>
            <form
              className="d-flex"
              role="search"
              style={{ marginLeft: '40px' }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </form>
            <Link to="/profile">
              <FaUserCircle
                size="30px"
                style={{ marginLeft: '90px', color: 'white' }}
              />
            </Link>
          </div>
        </div>

        <div
          className="conten"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <div className="title">
            <p>
              <b>PERJALANAN MENJELAJAHI DUNIA</b>
            </p>
          </div>
          <div className="subTitle">
            <h6>
              Di sini, petualangan tak terbatas menanti Anda. Temukan destinasi
              impian, rencanakan liburan sempurna, dan biarkan kami{' '}
            </h6>
            <h6>membantu Anda menciptakan kenangan yang tak terlupakan.</h6>
          </div>
          <div className="end">
            <h6>Ayo, mulai petualangan Anda bersama kami sekarang!</h6>
          </div>
        </div>
      </div>

      <div className="booking">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
              Cari Destinasi
              <form className="d" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Masukan Destinasi"
                  aria-label="Search"
                />
              </form>
            </div>
            <div class="col">
              Jumlah Orang *
              <form className="d" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Masukkan Jumlah"
                  aria-label="Search"
                />
              </form>
            </div>
            <div class="col">
              Chekin Date *
              <form className="d" role="search">
                <input
                  className="form-control me-2"
                  type="date"
                  placeholder="HH/BB/TTTT"
                  aria-label="Search"
                />
              </form>
            </div>
            <div class="col">
              Chekout Date *
              <form className="d" role="search">
                <input
                  className="form-control me-2"
                  type="date"
                  placeholder="HH/BB/TTTT"
                  aria-label="Search"
                />
              </form>
            </div>
            <p className="btn-booking">
              <button className="btn" type="submit">
                CARI SEKARANG
              </button>
            </p>
          </div>
        </div>
      </div>

      <div id="aboutUs">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <img
                src={temanWisataImage}
                alt="Teman Wisata"
                className="d-inline-block align-text-top"
                style={{
                  width: '80%',
                  height: '80%',
                  marginTop: '50px',
                  borderRadius: '50px',
                }}
              />
            </div>
            <div class="col">
              <b>TENTANG KAMI</b>
              <p>
                "Website ini membantu para traveler, wisatawan, dan backpacker
                yang kesulitan mencari informasi tentang tempat wisata unik
                dengan budaya dan tradisi setempat. Kami menawarkan pengalaman
                berbeda dan berkesan, serta mengembangkan strategi pemasaran
                inovatif dan bertanggung jawab untuk menarik lebih banyak
                pengunjung dan memperpanjang masa tinggal mereka. Kami juga
                menerapkan praktik berkelanjutan untuk melestarikan sumber daya
                alam."
              </p>
              <button className="btn-aboutUs" type="submit">
                <Link to="/about">SELENGKAPNYA</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="destination">
        <h6>TEMUKAN TEMPAT</h6>
        <b>DESTINASI POPULER</b>
        <p>
          Temukan tempat-tempat terkenal yang menakjubkan di sini! Dengan
          beragam pilihan mulai dari alam yang memesona
        </p>
        <p>
          hingga situs bersejarah yang menarik, ada sesuatu untuk semua orang.
          Jelajahi keindahan yang menakjubkan dan nikmati
        </p>
        <p>pengalaman tak terlupakan.</p>

        <div className="container text-center">
          <div className="row align-items-center">
            {destinasi.map((item, index) => (
              <div className="col" key={item.id}>
                <Card
                  id={item.id}
                  imageUrl={item.url}
                  title={item.nama}
                  subTitle={item.daerah}
                  description={truncateText(item.informasi, 100)}
                  harga={`RP ${item.harga}`}
                  rating={4} // Ganti dengan rating yang sesuai jika ada di database
                />
                <Link to={`/detail/${item.id}`}></Link>
              </div>
            ))}
          </div>
          <button className="btn-destination" type="submit">
            <Link to="/destinasi">MORE DESTINATION</Link>
          </button>
        </div>
      </div>

      <div id="culture">
        <h6>TEMUKAN BUDAYA</h6>
        <b>DESTINASI BUDAYA</b>
        <p>
          Temukan tempat-tempat budaya yang menakjubkan di sini! Dengan beragam
          pilihan mulai dari festival tradisional hingga
        </p>
        <p>
          warisan arsitektur yang memukau, ada sesuatu untuk semua orang.
          Jelajahi kekayaan budaya yang menakjubkan dan
        </p>
        <p>nikmati pengalaman tak terlupakan.</p>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3 position-relative">
              <img
                src={baliImage}
                className="img-fluid image"
                alt="Teman Wisata 1"
              />
              <div className="text-overlay-1 position-absolute top-0 start-0">
                <Link to="/cultureBali">
                  <h3>Bali</h3>
                </Link>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={lombok1Image}
                className="img-fluid image"
                alt="Teman Wisata 2"
              />
              <div className="text-overlay-1 position-absolute top-0 start-0">
                <h3>Lombok</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={surabayaImage}
                className="img-fluid image"
                alt="Teman Wisata 3"
              />
              <div className="text-overlay-1 position-absolute top-0 start-0">
                <h3>Surabaya</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={bandungImage}
                className="img-fluid image"
                alt="Teman Wisata 4"
              />
              <div className="text-overlay-1 position-absolute top-0 start-0">
                <h3>Bandung</h3>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 position-relative">
              <img
                src={komodoImage}
                className="img-fluid image"
                alt="Teman Wisata 1"
              />
              <div className="text-overlay-2 position-absolute top-0 start-0">
                <h3>Komodo</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={yogyakartaImage}
                className="img-fluid image"
                alt="Teman Wisata 2"
              />
              <div className="text-overlay-2 position-absolute top-0 start-0">
                <h3>Yogyakarta</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={kalselImage}
                className="img-fluid image"
                alt="Teman Wisata 3"
              />
              <div className="text-overlay-2 position-absolute top-0 start-0">
                <h3>Kalimantan</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={jakartaImage}
                className="img-fluid image"
                alt="Teman Wisata 4"
              />
              <div className="text-overlay-2 position-absolute top-0 start-0">
                <h3>Jakarta</h3>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-3 position-relative">
              <img
                src={sulselImage}
                className="img-fluid image"
                alt="Teman Wisata 1"
              />
              <div className="text-overlay-3 position-absolute top-0 start-0">
                <h3>Sulawesi</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={niasImage}
                className="img-fluid image"
                alt="Teman Wisata 2"
              />
              <div className="text-overlay-3 position-absolute top-0 start-0">
                <h3>Nias</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={banyuwangiImage}
                className="img-fluid image"
                alt="Teman Wisata 3"
              />
              <div className="text-overlay-3 position-absolute top-0 start-0">
                <h3>Banyuwangi</h3>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img
                src={papuaImage}
                className="img-fluid image"
                alt="Teman Wisata 4"
              />
              <div className="text-overlay-3 position-absolute top-0 start-0">
                <h3>Papua</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="package">
        <h6>PAKET POPULER</h6>
        <b>JELAJAHI PAKET KAMI</b>
        <p>
          Temukan paket perjalanan terbaik yang sesuai dengan kebutuhan Anda!
          Mulai dari liburan keluarga hingga petualangan
        </p>
        <p>
          solo, kami memiliki beragam pilihan untuk memenuhi keinginan liburan
          Anda. Rasakan pengalaman yang tak terlupakan
        </p>
        <p>dan buat kenangan indah bersama kami.</p>

        <div className="card mb-3">
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
                <div className="col">
                  <img
                    src={labuanBajoImage}
                    className="img-fluid custom-img"
                    alt="Teman Wisata 1"
                  />
                </div>
              </div>
              <div class="col">
                <div className="card-body">
                  <Link to="/detailPackages?Id=4">
                    <p className="card-title" style={{ color: 'black' }}>
                      Paket Tour
                    </p>
                    <p className="card-title" style={{ color: 'black' }}>
                      Labuan Bajo 1 Hari
                    </p>
                  </Link>
                  <div className="p-k">
                    <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                    <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                    <p className="card-text">Adat, dan Alam Budaya Flores.</p>
                  </div>
                  <ul className="inpa">
                    <li>
                      <FaClock /> 1 hari
                    </li>
                    <li>
                      <FaUsers /> 5 pax
                    </li>
                    <li>
                      <FaMapMarkerAlt /> NTT
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col nekon"
                style={{
                  backgroundColor: '#EEE8DC',
                  marginRight: '-30px',
                  marginBottom: '0px',
                  height: '300px',
                  borderBottomRightRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              >
                <h5>Private Tour</h5>
                <p>1,1 juta</p>
                <p
                  style={{
                    fontSize: '25px',
                    fontWeight: 'normal',
                    marginLeft: '15px',
                  }}
                >
                  per orang
                </p>
                <button className="btn-bopa" type="submit">
                  <Link to="/payment?Id=4">BOOK NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
                <div className="col">
                  <img
                    src={divingLabaImage}
                    className="img-fluid custom-img"
                    alt="Teman Wisata 1"
                  />
                </div>
              </div>
              <div class="col">
                <div className="card-body">
                  <Link to="/detailPackages?Id=5">
                    <p className="card-title" style={{ color: 'black' }}>
                      Diving
                    </p>
                    <p className="card-title" style={{ color: 'black' }}>
                      Labuan Bajo
                    </p>
                  </Link>
                  <div className="p-k">
                    <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                    <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                    <p className="card-text">Adat, dan Alam Budaya Flores.</p>
                  </div>
                  <ul className="inpa">
                    <li>
                      <FaClock /> 1 hari
                    </li>
                    <li>
                      <FaUsers /> 5 pax
                    </li>
                    <li>
                      <FaMapMarkerAlt /> NTT
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col nekon"
                style={{
                  backgroundColor: '#EEE8DC',
                  marginRight: '-30px',
                  marginBottom: '0px',
                  height: '300px',
                  borderBottomRightRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              >
                <h5>Private Tour</h5>
                <p>1 juta</p>
                <p
                  style={{
                    fontSize: '25px',
                    fontWeight: 'normal',
                    marginLeft: '15px',
                  }}
                >
                  per orang
                </p>
                <button className="btn-bopa" type="submit">
                  <Link to="/payment?Id=5">BOOK NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div class="container text-center">
            <div class="row align-items-center">
              <div class="col">
                <div className="col">
                  <img
                    src={b2Image}
                    className="img-fluid custom-img"
                    alt="Teman Wisata 1"
                  />
                </div>
              </div>
              <div class="col">
                <div className="card-body">
                  <Link to="/detailPackages?Id=6">
                    <p className="card-title" style={{ color: 'black' }}>
                      Paket Wisata
                    </p>
                    <p className="card-title" style={{ color: 'black' }}>
                      Bromo Sunrise 1 Hari
                    </p>
                  </Link>
                  <div className="p-k">
                    <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                    <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                    <p className="card-text">Adat, dan Alam Budaya Flores.</p>
                  </div>
                  <ul className="inpa">
                    <li>
                      <FaClock /> 1 hari
                    </li>
                    <li>
                      <FaUsers /> 5 pax
                    </li>
                    <li>
                      <FaMapMarkerAlt /> NTT
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="col nekon"
                style={{
                  backgroundColor: '#EEE8DC',
                  marginRight: '-30px',
                  marginBottom: '0px',
                  height: '300px',
                  borderBottomRightRadius: '15px',
                  borderTopRightRadius: '15px',
                }}
              >
                <h5>Private Tour</h5>
                <p>600 Ribu</p>
                <p
                  style={{
                    fontSize: '25px',
                    fontWeight: 'normal',
                    marginLeft: '15px',
                  }}
                >
                  per orang
                </p>
                <button className="btn-bopa" type="submit">
                  <Link to="/payment?Id=6">BOOK NOW</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-destination" type="submit">
          <Link to="/packages">VIEW ALL PACKAGES</Link>
        </button>
      </div>

      <div id="contactUs">
        <div class="container">
          <div class="row">
            <div class="col text-start d-flex flex-column justify-content-center">
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
                terpecaya, agar perjalanan anda nyaman.
              </div>
            </div>
            <div class="col">
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

export default Home
