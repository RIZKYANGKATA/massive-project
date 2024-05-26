import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import b2Image from '../assets/images/b2.jpg';
import weh2Image from '../assets/images/weh2.jpg';
import der4Image from '../assets/images/der4.jpeg';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import '../components/css/packages.css';

function Packages() {
  return (
    <>
      <div id="home">
        <div className="header fixed-top">
          <div className="navbar">
            <a className="navbar-brand" href="#">
              <img src={logo_putihImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '100px', height: '80px' }} />
            </a>
            <ul className="inline-list">
              <li><Link to="/">HOME</Link></li>
              <li><a href="/">ABOUT US</a></li>
              <li><a href="/">DESTINATION</a></li>
              <li><a href="/">CULTURE</a></li>
              <li><a href="/">PACKAGE</a></li>
              <li><a href="/">CONTACT US</a></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            </form>
          </div>
        </div>
      </div>

      <div className="paket">
        <div className="j-paket">
          <b>JELAJAHI PAKET KAMI</b>
        </div>
        <p>Temukan paket perjalanan terbaik yang sesuai dengan kebutuhan Anda! Mulai dari liburan keluarga hingga petualangan solo, kami memiliki beragam pilihan untuk memenuhi keinginan liburan Anda. Rasakan pengalaman yang tak terlupakan dan buat kenangan indah bersama kami.</p>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Paket Wisata 1</h5>
                <p className="card-text">Deskripsi singkat tentang paket wisata 1.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 2" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Paket Wisata 2</h5>
                <p className="card-text">Deskripsi singkat tentang paket wisata 2.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 3" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Paket Wisata 3</h5>
                <p className="card-text">Deskripsi singkat tentang paket wisata 3.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 3" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Paket Wisata 4</h5>
                <p className="card-text">Deskripsi singkat tentang paket wisata 4.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 3" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Paket Wisata 5</h5>
                <p className="card-text">Deskripsi singkat tentang paket wisata 5.</p>
              </div>
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

export default Packages;
