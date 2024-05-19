import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import temanWisataImage from './assets/images/temanWisata.png';
import backgroundImage from './assets/images/background.jpg';
import bromoImage from './assets/images/bromo.jpg'; 
import pulauDerawanImage from './assets/images/pulauDerawan.jpg';
import baliImage from './assets/images/bali.jpg';
import lombok1Image from './assets/images/lombok1.jpg';
import surabayaImage from './assets/images/surabaya.jpg';
import bandungImage from './assets/images/bandung.jpg';

import './App.css';
import Card from './components/card';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="home">
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={temanWisataImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '80px', height: '60px' }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
      </div>

      <div className="navbar">
        <ul className="inline-list">
          <li><a href="#home">HOME</a></li>
          <li><a href="#aboutUs">ABOUT US</a></li>
          <li><a href="#destination">DESTINATION</a></li>
          <li><a href="#culture">CULTURE</a></li>
          <li><a href="">PACKAGE</a></li>
          <li><a href="">CONTACT US</a></li>
          <li><button className="btn" type="submit">SIGN UP</button></li>
          <li><button className="btn" type="submit">LOGIN</button></li>
        </ul>
      </div>
      
     

      <div className="conten">
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
        <img src={temanWisataImage} alt="Teman Wisata" className="d-inline-block align-text-top" style={{ width: '80%', height: '80%', backgroundColor: '#F2DCC2', marginTop: '50px', borderRadius: '50px' }} />
        </div>
        <div class="col">
          <b>TENTANG KAMI</b>
          <p>"Website ini membantu para traveler, wisatawan, dan backpacker yang kesulitan mencari informasi tentang tempat wisata unik dengan budaya dan tradisi setempat. Kami menawarkan pengalaman berbeda dan berkesan, serta mengembangkan strategi pemasaran inovatif dan bertanggung jawab untuk menarik lebih banyak pengunjung dan memperpanjang masa tinggal mereka. Kami juga menerapkan praktik berkelanjutan untuk melestarikan sumber daya alam."</p>
          <a href=""><button className="btn-aboutUs" type="submit">SELENGKAPNYA</button></a>
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
            />
          </div>
          <div class="col">
          <Card
              imageUrl={bromoImage}
              title="Bromo"
              subTitle="Jawa Timur"
              description="Gunung berapi aktif di Jawa Timur, Indonesia. Memiliki ketinggian 2.329 meter di atas permukaan laut"
              harga="RP 560.000"
            />
          </div>
          <div class="col">
          <Card
              imageUrl={pulauDerawanImage}
              title="Pulau Derawan"
              subTitle="Kalimantan Timur"
              description="kepulauan ini terdapat sejumlah objek wisata bahari menawan, salah satunya Taman Bawah Laut"
              harga="RP 560.000"
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
        <div className="col-md-3">
          <img src={baliImage} className="img-fluid image" alt="Teman Wisata 1" />
        </div>
        <div className="col-md-3">
          <img src={lombok1Image} className="img-fluid image" alt="Teman Wisata 2" />
        </div>
        <div className="col-md-3">
          <img src={surabayaImage} className="img-fluid image" alt="Teman Wisata 3" />
        </div>
        <div className="col-md-3">
          <img src={bandungImage} className="img-fluid image" alt="Teman Wisata 4" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <img src={baliImage} className="img-fluid image" alt="Teman Wisata 1" />
        </div>
        <div className="col-md-3">
          <img src={lombok1Image} className="img-fluid image" alt="Teman Wisata 2" />
        </div>
        <div className="col-md-3">
          <img src={surabayaImage} className="img-fluid image" alt="Teman Wisata 3" />
        </div>
        <div className="col-md-3">
          <img src={bandungImage} className="img-fluid image" alt="Teman Wisata 4" />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-3">
          <img src={baliImage} className="img-fluid image" alt="Teman Wisata 1" />
        </div>
        <div className="col-md-3">
          <img src={lombok1Image} className="img-fluid image" alt="Teman Wisata 2" />
        </div>
        <div className="col-md-3">
          <img src={surabayaImage} className="img-fluid image" alt="Teman Wisata 3" />
        </div>
        <div className="col-md-3">
          <img src={bandungImage} className="img-fluid image" alt="Teman Wisata 4" />
        </div>
      </div>
    </div>


    </div>


    </>
  );
}

export default App;
