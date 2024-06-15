import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo_putihImage from '../assets/images/logo_putih.png'
import backgroundImage from '../assets/images/background.jpg'
import bromoImage from '../assets/images/bromo.jpg'
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg'
import labuanBajoImage from '../assets/images/labuanBajo.jpg'
import divingLabaImage from '../assets/images/divingLaba.jpg'
import b2Image from '../assets/images/b2.jpg'
import candiImage from '../assets/images/candi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import {
  faStar,
  faPaperclip,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../components/css/payment.css'
import levelNumber from '../components/levelNumber'
import axios from 'axios'

function Payment2() {
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

  const subTitle = {
    '1': 'Aceh',
    '2': 'Jawa Timur',
    '3': 'Kalimantan Timur',
    '4': 'Nusa Tenggara Timur',
    '5': 'Nusa Tenggara Timur',
    '6': 'Jawa Timur',
  }

  const Harga = {
    '1': 'RP 960.000',
    '2': 'RP 560.000',
    '3': 'RP 1000.000',
    '4': 'RP 1100.000',
    '5': 'RP 1000.000',
    '6': 'RP 600.000',
  }

  const [nama, setNama] = useState('')
  const [harga, setHarga] = useState('')
  const [informasi, setInformasi] = useState('')
  const [daerah, setDaerah] = useState('')
  const [file, setFile] = useState(null)
  const { idparams } = useParams()

  const getDetailDestinasi = async () => {
    const response = await axios.get(
      `http://localhost:3000/destinasi/${idparams}`,
    )

    setNama(response.data.nama)
    setHarga(response.data.harga)
    setInformasi(response.data.informasi)
    setDaerah(response.data.daerah)
    setFile(response.data.url)
  }
  useEffect(() => {
    getDetailDestinasi()
  }, [])

  const [tanggalPergi, setTanggalPergi] = useState('')
  const [tanggalPulang, setTanggalPulang] = useState('')
  const [jumlahWisatawan, setJumlahWisatawan] = useState('')

  const handleTanggalPergiChange = (e) => {
    setTanggalPergi(e.target.value)
  }

  const handleTanggalPulangChange = (e) => {
    setTanggalPulang(e.target.value)
  }

  const handleJumlahWisatawanChange = (e) => {
    setJumlahWisatawan(e.target.value)
  }

  const handleSubmit = async (e) => {
    const idpembayaran = localStorage.getItem('idpembayaran')

    e.preventDefault()
    const formData = new FormData()
    formData.append('tanggal_pergi', tanggalPergi)
    formData.append('tanggal_pulang', tanggalPulang)
    formData.append('jumlah_wisatawan', jumlahWisatawan)

    try {
      const response = await axios.patch(
        `http://localhost:3000/pembayaran/${idpembayaran}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      navigate(`/payment3/${idparams}`)
      console.log('sukses', response)
    } catch (error) {
      console.log('error', error)
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

      <div className="contact-detail">
        <div className="card payment">
          <div className="card-body">
            <div className="ket-des">
              <h3>Paket Destinasi {nama}</h3>
              <h6>{daerah}</h6>
              <h6 className="harga">{harga}</h6>
            </div>
            <img
              src={file}
              alt="Destination"
              style={{
                height: '220px',
                width: '380px',
                marginTop: '-150px',
                marginLeft: '30px',
              }}
            />
            <form onSubmit={handleSubmit} className="container form2">
              <div className="row">
                <div className="col">
                  <p
                    style={{
                      textAlign: 'start',
                      marginLeft: '-30px',
                      color: '#777777',
                    }}
                  >
                    Tanggal Pergi
                  </p>
                  <input
                    className="form-control me-2 t-p"
                    type="date"
                    value={tanggalPergi}
                    onChange={handleTanggalPergiChange}
                    placeholder="HH/BB/TTTT"
                    aria-label="Tanggal Pergi"
                  />
                </div>
                <div className="col">
                  <p
                    style={{
                      textAlign: 'start',
                      marginLeft: '-30px',
                      color: '#777777',
                    }}
                  >
                    Tanggal Pulang
                  </p>
                  <input
                    className="form-control me-2 t-p"
                    type="date"
                    value={tanggalPulang}
                    onChange={handleTanggalPulangChange}
                    placeholder="HH/BB/TTTT"
                    aria-label="Tanggal Pulang"
                  />
                </div>
              </div>
              <p
                style={{
                  textAlign: 'start',
                  marginLeft: '-20px',
                  color: '#777777',
                }}
              >
                Jumlah Wisatawan
              </p>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control t-p"
                  value={jumlahWisatawan}
                  onChange={handleJumlahWisatawanChange}
                  placeholder=""
                  style={{ marginLeft: '30px' }}
                  aria-label="Jumlah Wisatawan"
                />
              </div>
              <button className="btn-next-page" type="submit">
                NEXT
              </button>
            </form>
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

export default Payment2
