import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import b2Image from '../assets/images/b2.jpg';
import labuanBajoImage from '../assets/images/labuanBajo.jpg';
import divingLabaImage from '../assets/images/divingLaba.jpg'; 
import bromoImage from '../assets/images/bromo.jpg';
import banyuwangi2Image from '../assets/images/banyuwangi2.jpeg';
import weh2Image from '../assets/images/weh2.jpg';
import der4Image from '../assets/images/der4.jpeg';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaUsers } from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

import '../components/css/packages.css';

function Packages() {
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

      <div className="paket">
        <div className="j-paket">
          <b>JELAJAHI PAKET KAMI</b>
        </div>
        <p>Temukan paket perjalanan terbaik yang sesuai dengan kebutuhan Anda! Mulai dari liburan keluarga hingga petualangan solo, kami memiliki beragam pilihan untuk memenuhi keinginan liburan Anda. Rasakan pengalaman yang tak terlupakan dan buat kenangan indah bersama kami.</p>
      </div>

      <div className="paket-2">

        <div className="card mb-3">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
            <div className="col">
              <img src={labuanBajoImage} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            </div>
            <div class="col">
            <div className="card-body">
                <Link to="/detailPackages?Id=4">
                  <p className="card-title" style={{color: 'black'}}>Paket Tour</p>
                  <p className="card-title" style={{color: 'black'}}>Labuan Bajo 1 Hari</p>
                </Link>
              <div className="p-k">
                <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                <p className="card-text">Adat, dan Alam Budaya Flores.</p>
              </div>
                <ul className="inpa">
                  <li><FaClock /> 1 hari</li>
                  <li><FaUsers /> 5 pax</li>
                  <li><FaMapMarkerAlt /> NTT</li>
              </ul>
            </div>
            </div>
            <div class="col nekon" style={{backgroundColor: '#EEE8DC', marginRight: '-30px', marginBottom: '0px', height: '300px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px'}}>
              <h5>Private Tour</h5>
              <p>1,1 juta</p>
              <p style={{fontSize: '25px', fontWeight: 'normal', marginLeft: '45px'}}>per orang</p>
              <button className="btn-bopa" type="submit"><Link to="/payment?Id=4">BOOK NOW</Link></button>
            </div>
          </div>
        </div>
        </div>

        <div className="card mb-3">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
            <div className="col">
              <img src={divingLabaImage} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            </div>
            <div class="col">
            <div className="card-body">
              <Link to="/detailPackages?Id=5">
                  <p className="card-title" style={{color: 'black'}}>Diving</p>
                  <p className="card-title" style={{color: 'black'}}>Labuan Bajo</p>
                </Link>
              <div className="p-k">
                <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                <p className="card-text">Adat, dan Alam Budaya Flores.</p>
              </div>
                <ul className="inpa">
                  <li><FaClock /> 1 hari</li>
                  <li><FaUsers /> 5 pax</li>
                  <li><FaMapMarkerAlt /> NTT</li>
              </ul>
            </div>
            </div>
            <div class="col nekon" style={{backgroundColor: '#EEE8DC', marginRight: '-30px', marginBottom: '0px', height: '300px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px'}}>
              <h5>Private Tour</h5>
              <p>1 juta</p>
              <p style={{fontSize: '25px', fontWeight: 'normal', marginLeft: '45px'}}>per orang</p>
              <button className="btn-bopa" type="submit"><Link to="/payment?Id=5">BOOK NOW</Link></button>
            </div>
          </div>
        </div>
        </div>

        <div className="card mb-3">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
            <div className="col">
              <img src={b2Image} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            </div>
            <div class="col">
            <div className="card-body">
               <Link to="/detailPackages?Id=6">
                  <p className="card-title" style={{color: 'black'}}>Paket Wisata</p>
                  <p className="card-title" style={{color: 'black'}}>Bromo Sunrise 1 Hari</p>
                </Link>
              <div className="p-k">
                <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                <p className="card-text">Adat, dan Alam Budaya Flores.</p>
              </div>
                <ul className="inpa">
                  <li><FaClock /> 1 hari</li>
                  <li><FaUsers /> 5 pax</li>
                  <li><FaMapMarkerAlt /> NTT</li>
              </ul>
            </div>
            </div>
            <div class="col nekon" style={{backgroundColor: '#EEE8DC', marginRight: '-30px', marginBottom: '0px', height: '300px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px'}}>
              <h5>Private Tour</h5>
              <p>600 Ribu</p>
              <p style={{fontSize: '25px', fontWeight: 'normal', marginLeft: '45px'}}>per orang</p>
              <button className="btn-bopa" type="submit"><Link to="/payment?Id=6">BOOK NOW</Link></button>
            </div>
          </div>
        </div>
        </div>

        <div className="card mb-3">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
            <div className="col">
              <img src={bromoImage} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            </div>
            <div class="col">
            <div className="card-body">
                <p className="card-title">Paket Wisata</p>
                <p className="card-title">Wae Rebo 2d 1n</p>
              <div className="p-k">
                <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                <p className="card-text">Adat, dan Alam Budaya Flores.</p>
              </div>
                <ul className="inpa">
                  <li><FaClock /> 1 hari</li>
                  <li><FaUsers /> 5 pax</li>
                  <li><FaMapMarkerAlt /> NTT</li>
              </ul>
            </div>
            </div>
            <div class="col nekon" style={{backgroundColor: '#EEE8DC', marginRight: '-30px', marginBottom: '0px', height: '300px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px'}}>
              <h5>Private Tour</h5>
              <p>1,6 juta</p>
              <p style={{fontSize: '25px', fontWeight: 'normal', marginLeft: '45px'}}>per orang</p>
              <button className="btn-bopa" type="submit" style={{marginTop: '60px', marginRight: '0px'}}><Link to="/payment">BOOK NOW</Link></button>
            </div>
          </div>
        </div>
        </div>

        <div className="card mb-3">
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col">
            <div className="col">
              <img src={banyuwangi2Image} className="img-fluid custom-img" alt="Teman Wisata 1" />
            </div>
            </div>
            <div class="col">
            <div className="card-body">
                <p className="card-title">Paket Wisata</p>
                <p className="card-title">Banyuwangi 2d 1n</p>
              <div className="p-k">
                <p className="card-text">Paket One Day Trip Labuan Bajo</p>
                <p className="card-text">Mengunjungi Air Terjun, Rumah</p>
                <p className="card-text">Adat, dan Alam Budaya Flores.</p>
              </div>
                <ul className="inpa">
                  <li><FaClock /> 1 hari</li>
                  <li><FaUsers /> 5 pax</li>
                  <li><FaMapMarkerAlt /> NTT</li>
              </ul>
            </div>
            </div>
            <div class="col nekon" style={{backgroundColor: '#EEE8DC', marginRight: '-30px', marginBottom: '0px', height: '300px', borderBottomRightRadius: '15px', borderTopRightRadius: '15px'}}>
              <h5>Private Tour</h5>
              <p>1,2 juta</p>
              <p style={{fontSize: '25px', fontWeight: 'normal', marginLeft: '45px'}}>per orang</p>
              <button className="btn-bopa" type="submit" style={{marginTop: '60px', marginRight: '0px'}}><Link to="">BOOK NOW</Link></button>
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
