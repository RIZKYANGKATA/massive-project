import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from '../assets/images/background.jpg'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      console.log('Please fill in all fields')
      return
    } else {
      try {
        const response = await axios.post(
          'http://localhost:5000/api/reset-password',
          {
            email: email,
          },
        )

        console.log(
          'data response',
          response.status === 200 ? 'ok' : 'not ok',
          email,
        )

        if (response.status === 200) {
          navigate(`/cekemail/${email}`)
        } else {
          console.log('data error', response.status)
        }
      } catch (error) {
        console.log('Error logging in: ', error)
      }
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   navigate('/setpassword')
  //   console.log('Email:', email)
  // }

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
                icon={faKey}
                size="3x"
                style={{ marginLeft: '160px', marginTop: '50px' }}
              />
              <div style={{ textAlign: 'center', marginTop: '70px' }}>
                <div
                  className="icon-circle"
                  style={{ marginBottom: '20px' }}
                ></div>
                <h4 className="card-title">Forgot Password</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                  No worries, we'll send you reset instructions.
                </p>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="form-control custom-input"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn w-100 mb-1">
                  Reset Password
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

export default ForgotPassword
