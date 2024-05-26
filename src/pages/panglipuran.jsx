import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import '../components/css/about.css';


function Panglipuran() {
  const [count, setCount] = useState(0);

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



    </>
  );
}

export default Panglipuran;
