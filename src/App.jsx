import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import temanWisataImage from './assets/temanWisata.png';
import './App.css';

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
          <li><a href="">DESTINATION</a></li>
          <li><a href="">CULTURE</a></li>
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
              <input className="form-control me-2" type="search" placeholder="HH/BB/TTTT" aria-label="Search" />
            </form>
        </div>
        <div class="col">
          Chekout Date *
          <form className="d" role="search">
              <input className="form-control me-2" type="search" placeholder="HH/BB/TTTT" aria-label="Search" />
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
          <a href="#home"><button className="btn-aboutUs" type="submit">SELENGKAPNYA</button></a>
        </div>
      </div>
    </div>
    </div>


    </>
  );
}

export default App;
