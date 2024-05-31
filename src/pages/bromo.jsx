import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import weh1Image from '../assets/images/weh1.jpg';
import weh2Image from '../assets/images/weh2.jpg';
import weh3Image from '../assets/images/weh3.jpg';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import bromoImage from '../assets/images/bromo.jpg'; 
import b2Image from '../assets/images/b2.jpg';
import b3Image from '../assets/images/b3.jpg';
import b4Image from '../assets/images/b4.jpeg';
import b5Image from '../assets/images/b5.jpg';
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg';
import labuanBajoImage from '../assets/images/labuanBajo.jpg';
import kawahIjenImage from '../assets/images/kawahIjen.jpg';
import rajaAmpatImage from '../assets/images/rajaAmpat.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaUserCircle} from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

import '../components/css/detailDestinasi.css'
import Card from '../components/card';
import { Link } from 'react-router-dom';



function Bromo() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);

    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <>
      <div id="home">
      <div className="header fixed-top">
      <div className="navbar">
      <a className="navbar-brand" href="#">
            <img src={logo_putihImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '100px', height: '80px' }} />
          </a>
        <ul className="inline-list">
          <li><a href="#home" onClick={handleScroll}>HOME</a></li>
          <li><a href="#aboutUs" onClick={handleScroll}>ABOUT US</a></li>
          <li><a href="#destination" onClick={handleScroll}>DESTINATION</a></li>
          <li><a href="#culture" onClick={handleScroll}>CULTURE</a></li>
          <li><a href="#package" onClick={handleScroll}>PACKAGE</a></li>
          <li><a href="#contactUs" onClick={handleScroll}>CONTACT US</a></li>
        </ul>
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            </form>
      </div>
      </div>
      </div>

     <div className="detail-2">
     <div class="container text-center">
        <div class="row align-items-center">
            <div class="col">
              <div className="gbr">
              <img src={b2Image} alt="Teman Wisata" className="d-inline-block align-text-top" />
              </div>
              <div className="gbr-sub">
              <div class="container text-center">
                <div class="row align-items-center">
                  <div class="col">
                  <img src={b2Image} alt="Teman Wisata" className="d-inline-block align-text-top" />
                  </div>
                  <div class="col">
                  <img src={b3Image} alt="Teman Wisata" className="d-inline-block align-text-top" />
                  </div>
                  <div class="col">
                  <img src={b4Image} alt="Teman Wisata" className="d-inline-block align-text-top" />
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class="col">
              <div className="dedes"> 
              <h2>Bromo</h2> 
              <p>Jawa Timur</p>
              <p>Mulai Dari <b>RP 560.000</b></p> 
              <div className="info">
              <h5>Details</h5>
              <p>Pulau Weh, yang terletak di ujung barat Indonesia di Provinsi Aceh, adalah surga tersembunyi dengan keindahan alam bawah laut yang menakjubkan dan pemandangan alam yang memukau.Pulau Weh menawarkan kombinasi sempurna antara keindahan alam bawah laut, pantai yang indah, dan aktivitas petualangan yang menarik. Dengan suasana yang tenang dan alami, Pulau Weh adalah destinasi yang ideal untuk berlibur dan melepaskan diri dari hiruk-pikuk kehidupan sehari-hari.</p>
              <ul>
                <li>
                <FaMapMarkerAlt /> <p>Pantai Iboih</p>
                </li>
                <li>
                <FaMapMarkerAlt /> <p>Tugu Nol Kilometer</p>
                </li>
                <li>
                <FaMapMarkerAlt /> <p>Pulau Rubiah</p>
                </li>
                <li>
                <FaMapMarkerAlt /> <p>Pantai Gapang</p>
                </li>
              </ul>
              </div>
              <button className="btn-book-now" type="submit">BOOK NOW</button>
            </div>
            </div>
        </div>
     </div>
     </div>

     <div className="galeri">
      <h4>Gallery</h4>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
          <img class="g1" src={b2Image} alt="Teman Wisata" />
          </div>
          <div class="col">
            <img class="g2" src={b3Image} alt="Teman Wisata" />
              <div class="col">
               <img class="g2" src={b4Image} alt="Teman Wisata" />
              </div>
          </div>
          <div class="col">
          <img class="g3" src={b5Image} alt="Teman Wisata" />
          </div>
        </div>
      </div>
     </div>


     <div className="say">
      <h4>Customer Says</h4>
      <div class="container">
          <div class="row">
            <div class="col">
              <div class="card" style={{ width: '350px', height: '170px', margin: 'auto', borderRadius: '15px', backgroundColor: '#EEE8DC' }}>
                <div className="card-body" style={{ display: "flex", alignItems: "start" }}>
                    <FaUserCircle size="50px" style={{ marginRight: "10px" }} />
                  <div>
                    <p style={{ marginBottom: '-5px' }}><b>USERNAME</b></p>
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                  </div>
              </div>
              <p style={{marginLeft: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum libero lacus, a condimentum velit</p>
              </div>
            </div>
            <div class="col">
            <div class="card" style={{ width: '350px', height: '170px', margin: 'auto', borderRadius: '15px', backgroundColor: '#EEE8DC' }}>
              <div className="card-body" style={{ display: "flex", alignItems: "start" }}>
                    <FaUserCircle size="50px" style={{ marginRight: "10px" }} />
                  <div>
                    <p style={{ marginBottom: '-5px' }}><b>USERNAME</b></p>
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                  </div>
              </div>
              <p style={{marginLeft: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum libero lacus, a condimentum velit</p>
              </div>
            </div>
            <div class="col">
            <div class="card" style={{ width: '350px', height: '170px', margin: 'auto', borderRadius: '15px', backgroundColor: '#EEE8DC'  }}>
              <div className="card-body" style={{ display: "flex", alignItems: "start" }}>
                    <FaUserCircle size="50px" style={{ marginRight: "10px" }} />
                  <div>
                    <p style={{ marginBottom: '-5px' }}><b>USERNAME</b></p>
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                    <FontAwesomeIcon icon={faStar} size="5px" />
                  </div>
              </div>
              <p style={{marginLeft: '20px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum libero lacus, a condimentum velit</p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-add-review" type="submit"><Link to="/review?Id=2">ADD REVIEW</Link></button>
     </div>

      <div id="contactUs">
      <div class="container">
        <div class="row">
          <div class="col text-start d-flex flex-column justify-content-center">
            <img src={logo_putihImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '90px', height: '70px', margin: '0', padding: '0' }} /> 
            <div className="conten1">
              <h5>Sebuah Cerita Sederhana Tentang</h5>
              <h5>Pusat Layanan Pariwisata di </h5>
              <h5>Indonesia</h5>
            </div>
            <div className="conten2">
              Aplikasi travel dan tourism dengan beragam layanan 
              dan informasi terpecaya, agar perjalanan anda 
              nyaman.
            </div>
          </div>
          <div class="col">
            <h4>Contact US</h4>
            <hr />
            <p>Jangan ragu untuk menghubungi dan menghubungi kami !!</p> 
              <div className="infomasi">
              <div className="wa">
              <FaWhatsapp style={{ marginLeft: '15px' }}  /> <p>+62 813 0989 5630</p>
              </div>

              <div className="email">
              <FaEnvelope style={{ marginLeft: '15px' }} /> <p>temanwisata@gmail.com</p>
              </div>

              <div className="lokasi">
              <FaMapMarkerAlt style={{ marginLeft: '15px' }} /> <p>Perkantoran Hijau Arkadia, Tower G, Jl. TB Simatupang No.88, RT.1/RW.1, Kebagusan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12520</p>
              </div>
              </div>
          </div>
        </div>
      </div>
       <hr />
       <h6>Copyright 2024 PT Berkelana Teman Wisata</h6>
    </div>


    </>
  );
}

export default Bromo;
