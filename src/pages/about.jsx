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
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../components/css/about.css'

function About() {
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

        <div
          className="conten"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <div className="title" id="aboutUs">
            <p>
              <b>ABOUT US</b>
            </p>
          </div>
          <div className="subTitle">
            <h6>
              “Web Site yang membantu para traveler, pariwisatawan, backpacker
              yang memiliki kesulitan dalam mencari informasi
            </h6>
            <h6>
              rekomendasi tempat wisata yang menarik keunikan budaya dan tradisi
              setempat, memberikan pengalaman yang berbeda
            </h6>
            <h6>
              dan berkesan bagi para pengunjung. Kami mengembangkan strategi
              pemasaran yang inovatif dan bertanggung jawab
            </h6>
            <h6>
              untuk menarik lebih banyak pengunjung dan mendorong mereka untuk
              tinggal lebih lama. Serta mewujudkan lingkungan
            </h6>
            <h6>
              dalam praktik berkelanjutan dan bisa melestarikan salah satu
              sumber daya alam.”
            </h6>
          </div>
        </div>
      </div>

      <div className="isi">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div className="gambar">
                <img
                  src={candiImage}
                  alt="Teman Wisata"
                  className="d-inline-block align-text-top"
                />
              </div>
            </div>
            <div className="col">
              <h3>Jelajahi Dunia Bersama Kami</h3>
              <p>
                Kami membantu traveler menemukan destinasi wisata unik dan
                kebudayaan lokal. Dengan strategi pemasaran inovatif, kami
                mendorong pengunjung untuk menjelajahi lebih dalam dan
                berkontribusi pada praktik berkelanjutan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="end-2">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div
                className="card text-center"
                style={{ maxWidth: '250px', margin: 'auto' }}
              >
                <div className="card-body">
                  <FontAwesomeIcon icon={faStar} size="lg" />
                  <p className="card-text">
                    Complete Packages For All Your Wishes
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-center"
                style={{ maxWidth: '250px', margin: 'auto' }}
              >
                <div className="card-body">
                  <FontAwesomeIcon icon={faPaperclip} size="lg" />
                  <p className="card-text">
                    Expert Guides For Your Ultimate Journey
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card text-center"
                style={{ maxWidth: '250px', margin: 'auto' }}
              >
                <div className="card-body">
                  <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                  <p className="card-text">
                    Unbeatable Prices, Unforgettable Experiences!
                  </p>
                </div>
              </div>
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

export default About
