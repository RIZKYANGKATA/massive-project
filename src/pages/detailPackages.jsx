import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import backgroundImage from '../assets/images/background.jpg';
import bromo2Image from '../assets/images/bromo2.jpg'; 
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg';
import labuanBajo2Image from '../assets/images/labuanBajo2.jpg';
import airTerjunImage from '../assets/images/airTerjun.jpg';
import divingLabaImage from '../assets/images/divingLaba.jpg'; 
import divingLaba2Image from '../assets/images/divingLaba2.jpg'; 
import b2Image from '../assets/images/b2.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../components/css/detailPackages.css';

function detailPackages() {
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

  const searchParams = new URLSearchParams(location.search);
  const destinationId = searchParams.get('Id');

  const backgroundImageMap = {
    // '1': backgroundImage,
    // '2': bromoImage,
    // '3': pulauDerawanImage,
    '4': labuanBajo2Image,
    '5': divingLaba2Image,
    '6': bromo2Image,
  };

  const imageMap = {
    // '1': backgroundImage,
    // '2': bromoImage,
    // '3': pulauDerawanImage,
    '4': airTerjunImage,
    '5': divingLabaImage,
    '6': b2Image,
  };

  const titleMap = {
    // '1': 'Pulau Weh Aceh',
    // '2': 'Bromo',
    // '3': 'Pulau Derawan',
    '4': 'LABUAN BAJO',
    '5': 'DIVING LABUAN BAJO',
    '6': 'BROMO SUNRISE',
  };

  const subTitleMap = {
    // '1': 'Aceh',
    // '2': 'Jawa Timur',
    // '3': 'Kalimantan Timur',
    '4': 'NUSA TENGGARA TIMUR',
    '5': 'NUSA TENGGARA TIMUR',
    '6': 'JAWA TIMUR',
  };

  const destinasiMap ={
    '4': 'Air Terjun',
    '5': 'Pulau Kanawa',
    '6': 'Bukit Cinta',
  }

  const destinasi2Map ={
    '4': 'Cuanca Wulang',
    '5': 'Labuan Bajo',
    '6': 'Bromo',
  }

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
        <div className="content" style={{ backgroundImage: `url(${backgroundImageMap[destinationId]})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '430PX', position: 'relative' }}>
          <div className="overlay">
            <div className="de-pa">
              <h2>PAKET {titleMap[destinationId]}</h2>
              <h4>{subTitleMap[destinationId]}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="pi-de">
        <div class="container text-center">
            <div class="row align-items-center">
                <div class="col">
                    <button class="des">Destinasi 1</button>
                </div>
                <div class="col">
                    <button class="des">Destinasi 2</button>
                </div>
                <div class="col">
                    <button class="des">Destinasi 3</button>
                </div>
                <div class="col">
                    <button class="des">Destinasi 4</button>
                </div>
                <div class="col">
                    <button class="des">Destinasi 5</button>
                </div>
            </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row align-items-center">
            <div class="col" style={{paddingTop: '350px'}}>
                <img src={imageMap[destinationId]} alt="Destination" style={{height: '400px', width: '480px', marginTop: '-150px', marginLeft: '30px'}}/>
            </div>
            <div class="col last-i">
                <h2>{destinasiMap[destinationId]}</h2>
                <h2>{destinasi2Map[destinationId]}</h2>
                <p>Air terjun Cunca Wulang terletak di Kampung Wersawe, Desa Cunca Wulang, Kecamatan Mbeliling, Kabupaten Manggarai Barat, NTT. Sebelum populer seperti sekarang ini, Cunca Wulang sama sekali tak diketahui publik. Bahkan, masyarakat setempat pun tidak sembarang ke tempat itu. Baca juga: Banyak Trip Murah ke Labuan Bajo di Medsos, Awas Penipuan Sebab, menurut cerita dari nenek moyang, Cunca Wulang adalah tempat angker. Cerita itu diwariskan secara turun temurun dan diakui oleh masyarakat adat.</p>
            </div>
        </div>
      </div>
      <button className="btn-dede"><Link to={`/payment?Id=${destinationId}`}>BOOK NOW</Link></button>

      <div id="contactUs">
        <div className="container">
          <div className="row">
            <div className="col text-start d-flex flex-column justify-content-center">
              <img src={logo_putihImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '90px', height: '70px', margin: '0', padding: '0' }} />
              <div className="content1">
                <h5>Sebuah Cerita Sederhana Tentang</h5>
                <h5>Pusat Layanan Pariwisata di </h5>
                <h5>Indonesia</h5>
              </div>
              <div className="content2">
                Aplikasi travel dan tourism dengan beragam layanan
                dan informasi terpercaya, agar perjalanan anda
                nyaman.
              </div>
            </div>
            <div className="col">
              <h4>Contact US</h4>
              <hr />
              <p>Jangan ragu untuk menghubungi dan menghubungi kami !!</p>
              <div className="informasi">
                <div className="wa">
                  <FaWhatsapp style={{ marginLeft: '15px' }} /> <p>+62 813 0989 5630</p>
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

export default detailPackages;
