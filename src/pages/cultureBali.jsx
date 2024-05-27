import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import bromoImage from '../assets/images/bromo.jpg'; 
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg';
import labuanBajoImage from '../assets/images/labuanBajo.jpg';
import kawahIjenImage from '../assets/images/kawahIjen.jpg';
import rajaAmpatImage from '../assets/images/rajaAmpat.jpg';
import desaPenglipuranImage from '../assets/images/desaPenglipuran.jpg';
import goaGajahImage from '../assets/images/goaGajah.jpg';
import puraTanahLotImage from '../assets/images/puraTanahLot.jpg';
import puraBesakihImage from '../assets/images/puraBesakih.jpg';
import puraTirtaEmpulImage from '../assets/images/puraTirtaEmpul.jpg';
import tariKecakImage from '../assets/images/tariKecak.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';

import '../components/css/destinasi.css';
import Card from '../components/cardCulture';
import { Link } from 'react-router-dom';



function cultureBali() {
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
      <div className="conten-2">
        <div className="title">
          <p><b>DESTINASI BUDAYA</b></p>
        </div>
        <div className="subTitle">
        <h4>BALI</h4>
        </div>
      </div>
      </div>

      <div className="destination-2">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
          <Card id="1"
              imageUrl={desaPenglipuranImage} 
              title="Desa Penglipuran"
              subTitle="Bangli, Bali"
              description="Memiliki daya tarik budaya, tradisi, dan bangunan arsitektur yang telah dilestarikan turun temurun."
              harga="RP 560.000"
              rating={4}
            />
            <Link to="/panglipuran"></Link>
          </div>
          <div class="col">
          <Card id="2"
              imageUrl={goaGajahImage}
              title="Goa Gajah"
              subTitle="Gianyar, Bali"
              description="Perpaduan sejarah, arsitektur, dan spiritualitas, memberikan wawasan tentang budaya dan agama."
              harga="RP 560.000"
              rating={5}
            />
            <Link to="/goaGajah"></Link>
          </div>
          <div class="col">
          <Card id="3"
              imageUrl={puraBesakihImage}
              title="Pura Agung Besaki" 
              subTitle="Karangasem, Bali"
              description="Taman Nasional Karimunjawa merupakan rangkaian 27 pulau yang terletak di Laut Jawa."
              harga="RP 560.000"
              rating={4}
            />
             <Link to="/puraAgungBesakih"></Link>
          </div>
          <div class="col">
          <Card
              imageUrl={puraTanahLotImage} 
              title="Pura Tanah Lot" 
              subTitle="Tabanan, Bali"
              description="Terkenal dengan pemandangan matahari terbenam yang menakjubkan. "
              harga="RP 560.000"
              rating={4}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={puraTirtaEmpulImage}
              title="Tirta Empul"
              subTitle="Gianyar, Bali"
              description="Taman Nasional Karimunjawa merupakan rangkaian 27 pulau yang terletak di Laut Jawa.           "
              harga="RP 560.000"
              rating={5}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={tariKecakImage}
              title="Tari Kecak Uluwatu" 
              subTitle="Badung,  Bali"
              description="Perpaduan  antara seni, budaya, dan keindahan alam yang menawarkan pengalaman mendalam."
              harga="RP 560.000"
              rating={4}
            />
          </div>
        </div>
      </div>
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

export default cultureBali;
