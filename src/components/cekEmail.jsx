import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from '../assets/images/background.jpg'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faMailBulk } from '@fortawesome/free-solid-svg-icons'

function CekEmail() {
  const { email } = useParams()
  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${email}`
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
                icon={faMailBulk}
                size="3x"
                style={{ marginLeft: '160px', marginTop: '50px' }}
              />
              <div style={{ textAlign: 'center', marginTop: '70px' }}>
                <div
                  className="icon-circle"
                  style={{ marginBottom: '20px' }}
                ></div>
                <h4 className="card-title">Cek Your Email</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                  We sent a password reset link to {email}
                </p>

                <button type="submit" className="btn btn w-100 mb-1">
                  Cek Email
                </button>
                <Link
                  to="/forgotPassword"
                  className="d-block mb-2"
                  style={{
                    textAlign: 'center',
                    color: 'gray',
                    textDecoration: 'none',
                    marginTop: '5px',
                  }}
                >
                  Didn't receive the email? Click to resend
                </Link>
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

export default CekEmail
