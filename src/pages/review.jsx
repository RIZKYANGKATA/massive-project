import React, { useRef } from 'react'; // Import useRef hook
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import backgroundImage from '../assets/images/background.jpg';
import bromoImage from '../assets/images/bromo.jpg'; 
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCamera, FaVideo } from 'react-icons/fa';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import '../components/css/review.css';

function Review() {
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

  const getRoute = (id) => {
    switch (id) {
      case '1':
        return 'Aceh'
      case '2':
        return 'Bromo';
      case '3':
        return 'Derawan';
      default:
        break;
    }
  }

  const imageMap = {
    '1': backgroundImage,
    '2': bromoImage,
    '3': pulauDerawanImage,
  };

  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleAddPhoto = () => {
    photoInputRef.current.click(); 
  };

  const handleAddVideo = () => {
    videoInputRef.current.click(); 
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
      
      <h1>ULASAN</h1>
      <div className="card review">
        <div className="card-body">
          <img src={imageMap[destinationId]} alt="Destination" style={{height: '200px', width: '200px', borderRadius: '15px', marginTop: '30px', marginLeft: '30px'}}/>
          <div className="nilai">
            <p>Beri Penilaian</p>
            <div className="bintang">
              <FontAwesomeIcon icon={faStar} size="5px" />
              <FontAwesomeIcon icon={faStar} size="5px" />
              <FontAwesomeIcon icon={faStar} size="5px" />
            </div>
          </div>
          <div className="container-2 text-center">
            <div className="row align-items-center">
              <div className="col">
                <div className="card foto">
                  <div className="card-body">
                    <FaCamera size="35px" /> 
                    <p style={{paddingTop: '10px', color: '#989898', cursor: 'pointer'}}  onClick={handleAddPhoto}>Tambahkan Foto</p>
                    <input type="file" accept="image/*" style={{ display: "none" }} ref={photoInputRef} /> 
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card video">
                  <div className="card-body">
                    <FaVideo size="35px" /> 
                    <p style={{paddingTop: '10px', color: '#989898', cursor: 'pointer'}} onClick={handleAddVideo}>Tambahkan Video</p>
                    <input type="file" accept="video/*" style={{ display: "none" }} ref={videoInputRef} /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input class="form-control form-control-lg ulasan" type="text" placeholder="Bagikan Ulasanmu Disini" ></input>
          <button className="btn-ulasan" type="submit">KIRIM ULASAN</button>
        </div>
      </div>

      <div id="contactUs">
        <div className="container">
          <div className="row">
            <div className="col text-start d-flex flex-column justify-content-center">
              <img src={logo_putihImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '90px', height: '70px', margin: '0', padding: '0' }} />
              <div className="conten1">
                <h5>Sebuah Cerita Sederhana Tentang</h5>
                <h5>Pusat Layanan Pariwisata di </h5>
                <h5>Indonesia</h5>
              </div>
              <div className="conten2">
                Aplikasi travel dan tourism dengan beragam layanan
                dan informasi terpercaya, agar perjalanan anda
                nyaman.
              </div>
            </div>
            <div className="col">
              <h4>Contact US</h4>
              <hr />
              <p>Jangan ragu untuk menghubungi dan menghubungi kami !!</p>
              <div className="infomasi">
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

export default Review;



