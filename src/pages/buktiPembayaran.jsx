import React, { useEffect, useState } from 'react'
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
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import {
  faStar,
  faPaperclip,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { faUniversity, faBank } from '@fortawesome/free-solid-svg-icons'

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../components/css/payment.css'
import levelNumber from '../components/levelNumber'
import axios from 'axios'
import dayjs from 'dayjs'

function BuktiPembayaran() {
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

  const handleFileUpload = () => {
    document.getElementById('fileInput').click()
  }

  const [nama, setNama] = useState('')
  const [harga, setHarga] = useState('')
  const [informasi, setInformasi] = useState('')
  const [daerah, setDaerah] = useState('')
  const [file, setFile] = useState(null)
  const { idparams } = useParams()
  const [tanggalPergi, setTanggalPergi] = useState('')
  const [tanggalPulang, setTanggalPulang] = useState('')
  const [jumlahWisatawan, setJumlahWisatawan] = useState('')

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

  const getpembayaran = async () => {
    const idpembayaran = localStorage.getItem('idpembayaran')
    const response = await axios.get(
      `http://localhost:3000/pembayaran/${idpembayaran}`,
    )
    const formattedTanggalPergi = dayjs(response.data.tanggal_pergi).format(
      'YYYY-MM-DD',
    )

    console.log('data pembayaran', response.data)

    setTanggalPergi(formattedTanggalPergi)
    setJumlahWisatawan(response.data.jumlah_wisatawan)
  }
  useEffect(() => {
    getDetailDestinasi()
    getpembayaran()
  }, [])

  const [buktibayar, setbuktibayar] = useState('')

  const handlebuktibayarChange = (e) => {
    const file = e.target.files[0]
    setbuktibayar(file)
  }

  const handleSubmit = async (e) => {
    const idpembayaran = localStorage.getItem('idpembayaran')

    e.preventDefault()
    const formData = new FormData()
    formData.append('image', buktibayar)

    try {
      const response = await axios.put(
        `http://localhost:3000/pembayaranimage/${idpembayaran}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      navigate(`/doneBook/${idparams}`)
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
        <levelNumber />
        <div className="card payment">
          <div className="card-body">
            <div className="pembayaran">
              <h3
                style={{
                  textAlign: 'start',
                  paddingLeft: '20px',
                  paddingTop: '30px',
                }}
              >
                Unggah Bukti Pembayaran
              </h3>
            </div>
            <div className="container text-start pembayaran2">
              <form>
                <div className="row align-items-center">
                  <div className="col" style={{ paddingBottom: '95px' }}>
                    <div
                      className="card"
                      style={{ marginBottom: '10px', height: '420px' }}
                    >
                      <div className="card-body">
                        <h6 style={{ color: 'gray', fontWeight: 'normal' }}>
                          Seret dan lepaskan gambar anda disini
                        </h6>
                        <input
                          id="fileInput"
                          type="file"
                          // style={{ display: 'none' }}
                          onChange={handlebuktibayarChange}
                        />
                        {/* <button
                          className="btn btn-primary mt-3 pilihGambar"
                          // onClick={handlebuktibayarChange}
                        >
                          Pilih Gambar
                        </button> */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="card"
                      style={{ marginBottom: '110px', height: '420px' }}
                    >
                      <h3 style={{ marginTop: '20px', marginLeft: '20px' }}>
                        Ringkasan Tiket Anda
                      </h3>
                      <div className="card-body">
                        <div className="container text-center">
                          <div className="row align-items-center">
                            <div className="col">
                              <img
                                src={file}
                                alt="Destination"
                                style={{
                                  height: '120px',
                                  width: '250px',
                                  marginTop: '10px',
                                  marginRight: '-70px',
                                }}
                              />
                            </div>
                            <div className="col">
                              <p
                                style={{
                                  fontSize: '18px',
                                  marginTop: '-60px',
                                  color: '#021526',
                                }}
                              >
                                <b>{titleMap[destinationId]}</b>
                              </p>
                              <p
                                style={{
                                  fontSize: '18px',
                                  marginTop: '-60px',
                                  color: '#021526',
                                  marginLeft: '-20px',
                                }}
                              >
                                <b>
                                  Tanggal Pergi <br /> {tanggalPergi}
                                </b>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container text-start">
                        <div
                          className="row align-items-center"
                          style={{ paddingBottom: '80px' }}
                        >
                          <div className="col">
                            <p
                              style={{ fontSize: '18px', fontWeight: 'normal' }}
                            >
                              {jumlahWisatawan} Tiket Wisatawan
                            </p>
                            <b
                              style={{
                                fontSize: '18px',
                                fontWeight: '800',
                                marginLeft: '50px',
                              }}
                            >
                              Total Harga
                            </b>
                          </div>
                          <div className="col">
                            <p
                              style={{
                                fontSize: '18px',
                                fontWeight: '800',
                                paddingLeft: '70px',
                              }}
                            >
                              {harga}
                            </p>
                            <b style={{ marginLeft: '70px' }}>
                              RP. {jumlahWisatawan * harga}
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="btn-unggah" onClick={handleSubmit}>
                    UNGGAH
                  </button>
                </div>
              </form>
            </div>
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

export default BuktiPembayaran
