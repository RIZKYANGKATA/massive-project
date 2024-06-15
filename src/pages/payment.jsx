import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo_putihImage from '../assets/images/logo_putih.png'
import backgroundImage from '../assets/images/background.jpg'
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
import axios from 'axios'

function Payment() {
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const { idparams } = useParams()
  const navigate = useNavigate()

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('email', email)
    formData.append('phone_number', phone_number)
    formData.append('destinasi_id', idparams)
    try {
      const response = await axios.post(
        'http://localhost:3000/pembayaran',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      const { id } = response.data.pembayaran
      localStorage.setItem('idpembayaran', id)
      navigate(`/payment2/${idparams}`)
      console.log('sukses', idparams)
    } catch (error) {
      console.log('error', error)
    }
  }

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
            <p>
              Informasi ini untuk mengirimkan konfirmasi dan pembaruan pesanan
            </p>
            <form onSubmit={handleSubmit}>
              <div className="container text-center">
                <div className="row align-items-center">
                  <div className="col">
                    <h5>
                      First Name
                      <input
                        className="form-control form-control-lg name"
                        type="text"
                        placeholder="Enter your first name"
                        value={first_name}
                        onChange={handleFirstNameChange}
                      />
                    </h5>
                  </div>
                  <div className="col">
                    <h5>
                      Last Name
                      <input
                        className="form-control form-control-lg name"
                        type="text"
                        placeholder="Enter your last name"
                        value={last_name}
                        onChange={handleLastNameChange}
                      />
                    </h5>
                  </div>
                </div>
                <h5>
                  Email
                  <input
                    className="form-control form-control-lg email-p"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </h5>
                <h5>
                  Phone Number
                  <input
                    className="form-control form-control-lg phone-p"
                    type="text"
                    placeholder="Enter your phone number"
                    value={phone_number}
                    onChange={handlePhoneChange}
                  />
                </h5>
                <button className="btn-next-page" type="submit">
                  NEXT
                </button>
              </div>
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

export default Payment
