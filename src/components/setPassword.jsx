import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from '../assets/images/background.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios'

function SetPassword() {
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()
  const { email } = useParams()

  console.log('Password:', email)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password || !confirmpassword) {
      setMsg('Please fill in all fields')
      return
    } else if (password !== confirmpassword) {
      setMsg('Passwords do not match')
      return
    } else {
      try {
        const response = await axios.put(
          'http://localhost:5000/api/update-password',
          {
            email: email,
            password: password,
          },
        )
        navigate('/suksesreset')
        console.log('Password updated successfully', response.statusText)
      } catch (error) {
        console.log('Error data: ', error)
      }
    }
  }
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     console.log('Email:', password)
  //     navigate('/suksesreset')
  //   }

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
            <div
              className="card-body"
              style={{ fontSize: '15px', height: '400px' }}
            >
              <FontAwesomeIcon
                icon={faKey}
                size="3x"
                style={{ marginLeft: '160px', marginTop: '50px' }}
              />
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div
                  className="icon-circle"
                  style={{ marginBottom: '20px' }}
                ></div>
                <h4 className="card-title">Set New Password</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                  Your new password must be different from previously used
                  passwords.
                </p>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your Confirm New Password"
                    className="form-control custom-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmpassword" className="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your Confirm New Password"
                    className="form-control custom-input"
                    id="confirmpassword"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn w-100 mb-1">
                  Save
                </button>
                {/* <Link
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
                </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetPassword
