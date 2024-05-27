import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_putihImage from '../assets/images/logo_putih.png';
import  detailDesaPenglipuranImage from '../assets/images/detailDesaPenglipuran.jpg';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import '../components/css/detailCulture.css';


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

      <div className="j-d-c">
        <b>Desa Panglipuran</b>
        <p><b>Bangil Bali</b></p>
      </div>

      <div className="g-decu">
        <img src={detailDesaPenglipuranImage} alt="" />
      </div>

      <div className="t-decu">
        <p>Penglipuran adalah salah satu desa adat dari Kabupaten Bangli, Provinsi Bali, Indonesia. Desa ini terkenal sebagai salah satu destinasi wisata di Bali karena masyarakatnya yang masih menjalankan dan melestarikan budaya tradisional Bali dalam kehidupan mereka sehari-hari. Arsitektur bangunan dan pengolahan lahan masih mengikuti konsep Tri Hita Karana, filosofi masyarakat Bali mengenai keseimbangan hubungan antara Tuhan, manusia, dan lingkungannya. Mereka berhasil membangun pariwisata yang menguntungkan seluruh masyarakatnya tanpa menghilangkan budaya dan tradisi mereka. Pada tahun 1995, desa Penglipuran juga mendapatkan penghargaan Kalpataru dari pemerintah Indonesia atas usahanya melindungi hutan bambu di ekosistem lokal mereka.</p>
        <p>Desa Penglipuran dipercaya mulai berpenghuni pada zaman pemerintahan I Dewa Gede Putu Tangkeban III.Hampir seluruh warga desa ini percaya bahwa mereka berasal dari Desa Bayung Gede. Dahulu orang Bayung Gede adalah orang-orang yang ahli dalam kegiatan agama, adat dan pertahanan. Karena kemampuannya, orang-orang Bayung Gede sering dipanggil ke Kerajaan Bangli. Namun, karena jaraknya yang cukup jauh, Kerajaan Bangli akhirnya memberikan daerah sementara kepada orang Bayung Gede untuk beristirahat. Tempat beristirahat ini sering disebut sebagai Kubu Bayung. Tempat inilah kemudian yang dipercaya sebagai desa yang mereka tempati sekarang. Mereka juga percaya bahwa inilah alasan yang menjelaskan kesamaan peraturan tradisional serta struktur bangunan antara desa Penglipuran dan desa Bayung Gede</p>
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

export default Panglipuran;
