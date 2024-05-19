import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import temanWisataImage from './assets/temanWisata.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
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
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>DESTINATION</li>
          <li>CULTURE</li>
          <li>PACKAGE</li>
          <li>CONTACT US</li>
        </ul>
      </div>
     

      <div className="container mt-5">
        <h1>Welcome to Teman Wisata</h1>
        <p>This is an example of integrating a search bar in the navbar using Bootstrap in a React application.</p>
      </div>
    </>
  );
}

export default App;
