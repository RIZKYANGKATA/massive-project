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
import candiImage from '../assets/images/candi.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { faStar, faPaperclip, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import '../components/css/destinasi.css';
import Card from '../components/card';


function Destinasi() {
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
          <li><a href="#home">HOME</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">DESTINATION</a></li>
          <li><a href="#">CULTURE</a></li>
          <li><a href="#">PACKAGE</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            </form>
      </div>
      </div>
      <div className="conten-2">
        <div className="title">
          <p><b>DESTINASI</b></p>
        </div>
        <div className="subTitle">
        <h6>Temukan tempat-tempat terkenal yang menakjubkan di sini! Dengan beragam pilihan mulai dari alam yang memesona</h6>
         <h6>hingga situs bersejarah yang menarik, ada sesuatu untuk semua orang. Jelajahi keindahan yang menakjubkan dan nikmati</h6>
         <h6>pengalaman tak terlupakan</h6>
        </div>
      </div>
      </div>

      <div className="destination-2">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
          <Card
              imageUrl={backgroundImage} 
              title="Pulau Weh, Aceh"
              subTitle="Aceh"
              description="Pulau Weh memiliki keistimewaan menjadi tempat di mana garis lintang 0 derajat atau dikenal Kilometer 0 Indonesia. "
              harga="RP 560.000"
              rating={4}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={bromoImage}
              title="Bromo"
              subTitle="Jawa Timur"
              description="Gunung berapi aktif di Jawa Timur, Indonesia. Memiliki ketinggian 2.329 meter di atas permukaan laut"
              harga="RP 560.000"
              rating={5}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={pulauDerawanImage}
              title="Pulau Derawan" 
              subTitle="Kalimantan Timur"
              description="kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya Taman Bawah Laut"
              harga="RP 560.000"
              rating={4}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={kawahIjenImage} 
              title="Kawah Ijen" 
              subTitle="Banyuwangi"
              description="Pulau Weh memiliki keistimewaan menjadi tempat di mana garis lintang 0 derajat atau dikenal Kilometer 0 Indonesia. "
              harga="RP 560.000"
              rating={4}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={labuanBajoImage}
              title="Labuan Bajo"
              subTitle="Nusa Tenggara Timur"
              description="Gunung berapi aktif di Jawa Timur, Indonesia. Memiliki ketinggian 2.329 meter di atas permukaan laut"
              harga="RP 560.000"
              rating={5}
            />
          </div>
          <div class="col">
          <Card
              imageUrl={rajaAmpatImage}
              title="Raja Ampat" 
              subTitle="Papua Barat"
              description="kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya Taman Bawah Laut"
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

export default Destinasi;
