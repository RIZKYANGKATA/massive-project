import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from '../assets/images/background.jpg'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk, faCheck } from '@fortawesome/free-solid-svg-icons'

function SuksesReset() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/login')
  }

  return (
    <>
      <div
        className="conten"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '100vh',
        }}
      >
        <div className="f-l">
          <div className="card" style={{ width: '400px' }}>
            <div className="card-body" style={{ fontSize: '15px' }}>
              <FontAwesomeIcon
                icon={faCheck}
                size="3x"
                style={{ marginLeft: '160px', marginTop: '50px' }}
              />
              <div style={{ textAlign: 'center', marginTop: '70px' }}>
                <div
                  className="icon-circle"
                  style={{ marginBottom: '20px' }}
                ></div>
                <h4 className="card-title">Password Reset</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                  Your password has been successfully reset. Click below to
                  login in magically.
                </p>

                <button type="submit" className="btn btn w-100 mb-1">
                  Continue
                </button>

                <Link
                  to="/login"
                  className="d-block mb-2"
                  style={{
                    textAlign: 'center',
                    color: 'gray',
                    textDecoration: 'none',
                    marginTop: '5px',
                  }}
                >
                  Back To Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuksesReset
