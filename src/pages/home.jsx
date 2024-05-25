import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import temanWisataImage from '../assets/images/temanWisata.png';
import backgroundImage from '../assets/images/background.jpg';
import bromoImage from '../assets/images/bromo.jpg'; 
import pulauDerawanImage from '../assets/images/pulauDerawan.jpg';
import baliImage from '../assets/images/bali.jpg';
import lombok1Image from '../assets/images/lombok1.jpg';
import surabayaImage from '../assets/images/surabaya.jpg';
import bandungImage from '../assets/images/bandung.jpg';
import komodoImage from '../assets/images/komodo.jpg';
import yogyakartaImage from '../assets/images/yogyakarta.jpg';
import kalselImage from '../assets/images/kalsel.jpg';
import jakartaImage from '../assets/images/jakarta.jpg';
import sulselImage from '../assets/images/sulsel.jpg';
import niasImage from '../assets/images/nias.jpg';
import papuaImage from '../assets/images/papua.jpg';
import banyuwangiImage from '../assets/images/banyuwangi.jpg';
import tobaImage from '../assets/images/toba.png';
import palembangImage from '../assets/images/palembang.png';
import semarangImage from '../assets/images/semarang.png';
import logo_putihImage from '../assets/images/logo_putih.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import '../App.css';
import Card from '../components/card';



function Home() {


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
          <li><a href="#aboutUs">ABOUT US</a></li>
          <li><a href="#destination">DESTINATION</a></li>
          <li><a href="#culture">CULTURE</a></li>
          <li><a href="#package">PACKAGE</a></li>
          <li><a href="#contactUs">CONTACT US</a></li>
          <li><button className="btn" type="submit">SIGN UP</button></li>
          <li><button className="btn" type="submit">LOGIN</button></li>
        </ul>
        <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            </form>
      </div>
      </div>

      <div className="conten" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
        <div className="title">
          <p><b>PERJALANAN MENJELAJAHI DUNIA</b></p>
        </div>
        <div className="subTitle">
          <h6>Di sini, petualangan tak terbatas menanti Anda. Temukan destinasi impian, rencanakan liburan sempurna, dan biarkan kami </h6>
          <h6>membantu Anda menciptakan kenangan yang tak terlupakan.</h6>
        </div>
        <div className="end">
          <h6>Ayo, mulai petualangan Anda bersama kami sekarang!</h6>
          <button className="btn" type="submit">SELENGKAPNYA</button>
        </div>
      </div>
      </div>

      <div className="booking">
      <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          Cari Destinasi
          <form className="d" role="search">
              <input className="form-control me-2" type="search" placeholder="Masukan Destinasi" aria-label="Search" />
            </form>
        </div>
        <div class="col">
          Jumlah Orang *
          <form className="d" role="search">
              <input className="form-control me-2" type="search" placeholder="Masukkan Jumlah" aria-label="Search" />
            </form>
        </div>
        <div class="col">
          Chekin Date *
          <form className="d" role="search">
              <input className="form-control me-2" type="date" placeholder="HH/BB/TTTT" aria-label="Search" />
            </form>
        </div>
        <div class="col">
          Chekout Date *
          <form className="d" role="search">
              <input className="form-control me-2" type="date" placeholder="HH/BB/TTTT" aria-label="Search" />
            </form>
        </div>
        <p className="btn-booking"><button className="btn" type="submit">CARI SEKARANG</button></p>
      </div>
    </div>
    </div>

    <div id="aboutUs">
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
        <img src={temanWisataImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '80%', height: '80%', backgroundColor: '#EEE8DC', marginTop: '50px', borderRadius: '50px' }} />
        </div>
        <div class="col">
          <b>TENTANG KAMI</b>
          <p>"Website ini membantu para traveler, wisatawan, dan backpacker yang kesulitan mencari informasi tentang tempat wisata unik dengan budaya dan tradisi setempat. Kami menawarkan pengalaman berbeda dan berkesan, serta mengembangkan strategi pemasaran inovatif dan bertanggung jawab untuk menarik lebih banyak pengunjung dan memperpanjang masa tinggal mereka. Kami juga menerapkan praktik berkelanjutan untuk melestarikan sumber daya alam."</p>
          <button className="btn" type="submit">SELENGKAPNYA</button>
        </div>
      </div>
    </div>
    </div>

    <div id="destination">
      <h6>TEMUKAN TEMPAT</h6>
      <b>DESTINASI POPULER</b>
      <p>Temukan tempat-tempat terkenal yang menakjubkan di sini! Dengan beragam pilihan mulai dari alam yang memesona</p>
      <p>hingga situs bersejarah yang menarik, ada sesuatu untuk semua orang. Jelajahi keindahan yang menakjubkan dan nikmati</p>
      <p>pengalaman tak terlupakan.</p>

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
        </div>
        <a href=""><button className="btn-destination" type="submit">MORE DESTINATION</button></a>
      </div>
    </div>

    <div id="culture">
      <h6>TEMUKAN BUDAYA</h6>
      <b>DESTINASI BUDAYA</b>
      <p>Temukan tempat-tempat budaya  yang menakjubkan di sini! Dengan beragam pilihan mulai dari festival tradisional hingga</p>
      <p>warisan arsitektur yang memukau, ada sesuatu untuk semua orang. Jelajahi kekayaan budaya yang menakjubkan dan</p>
      <p>nikmati pengalaman tak terlupakan.</p>

      <div className="container mt-5">
      <div className="row">
        <div className="col-md-3 position-relative">
          <img src={baliImage} className="img-fluid image" alt="Teman Wisata 1" />
          <div className="text-overlay-1 position-absolute top-0 start-0">
          <h3>Bali</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={lombok1Image} className="img-fluid image" alt="Teman Wisata 2" />
          <div className="text-overlay-1 position-absolute top-0 start-0">
          <h3>Lombok</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={surabayaImage} className="img-fluid image" alt="Teman Wisata 3" />
          <div className="text-overlay-1 position-absolute top-0 start-0">
          <h3>Surabaya</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={bandungImage} className="img-fluid image" alt="Teman Wisata 4" />
          <div className="text-overlay-1 position-absolute top-0 start-0">
          <h3>Bandung</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3 position-relative">
          <img src={komodoImage} className="img-fluid image" alt="Teman Wisata 1" />
          <div className="text-overlay-2 position-absolute top-0 start-0">
          <h3>Komodo</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={yogyakartaImage} className="img-fluid image" alt="Teman Wisata 2" />
          <div className="text-overlay-2 position-absolute top-0 start-0">
          <h3>Yogyakarta</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={kalselImage} className="img-fluid image" alt="Teman Wisata 3" />
          <div className="text-overlay-2 position-absolute top-0 start-0">
          <h3>Kalimantan</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={jakartaImage} className="img-fluid image" alt="Teman Wisata 4" />
          <div className="text-overlay-2 position-absolute top-0 start-0">
          <h3>Jakarta</h3>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3 position-relative">
          <img src={sulselImage} className="img-fluid image" alt="Teman Wisata 1" />
          <div className="text-overlay-3 position-absolute top-0 start-0">
          <h3>Sulawesi</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={niasImage} className="img-fluid image" alt="Teman Wisata 2" />
          <div className="text-overlay-3 position-absolute top-0 start-0">
          <h3>Nias</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={banyuwangiImage} className="img-fluid image" alt="Teman Wisata 3" />
          <div className="text-overlay-3 position-absolute top-0 start-0">
          <h3>Banyuwangi</h3>
          </div>
        </div>
        <div className="col-md-3 position-relative">
          <img src={papuaImage} className="img-fluid image" alt="Teman Wisata 4" />
          <div className="text-overlay-3 position-absolute top-0 start-0">
          <h3>Papua</h3>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div id="package">
    <h6>PAKET POPULER</h6>
    <b>JELAJAHI PAKET KAMI</b>
    <p>Temukan paket perjalanan terbaik yang sesuai dengan kebutuhan Anda! Mulai dari liburan keluarga hingga petualangan</p>
    <p>solo, kami memiliki beragam pilihan untuk memenuhi keinginan liburan Anda. Rasakan pengalaman yang tak terlupakan</p>
    <p>dan buat kenangan indah bersama kami.</p>

    <div class="card">
      <div class="card-body">
      <div className="row">
        <div className="col-md-3">
          <img src={tobaImage} className="img-fluid image" style={{ height: '295px', width: '1200px'}} alt="Teman Wisata 1" />
        </div>
      </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
      <div className="row">
        <div className="col-md-3">
          <img src={semarangImage} className="img-fluid image" style={{ height: '295px', width: '1200px'}} alt="Teman Wisata 1" />
        </div>
      </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
      <div className="row">
        <div className="col-md-3">
          <img src={palembangImage} className="img-fluid image" style={{ height: '295px', width: '1200px'}} alt="Teman Wisata 1" />
        </div>
      </div>
      </div>
    </div>
    <a href=""><button className="btn-destination" type="submit">VIEW ALL PACKAGES</button></a>
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

export default Home;
