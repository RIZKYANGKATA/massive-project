import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import backgroundImage from '../assets/images/background.jpg'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

function Register() {
  const [isChecked, setIsChecked] = useState(false) // State untuk menandai apakah checkbox dicentang atau tidak
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Register = async (e) => {
    e.preventDefault()

    if (!email || !username || !password) {
      setMsg('Please fill in all fields')

      return
    } else {
      try {
        await axios.post('http://localhost:3000/users', {
          username: username,
          email: email,
          password: password,
        })
        navigate('/login')
      } catch (error) {
        console.log('Error data: ', error)
      }
    }
  }

  const handleGoogleSignUp = () => {
    console.log('Sign Up with Google')
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
        <div className="f-l-regi">
          <div className="card" style={{ width: '400px' }}>
            <div className="card-body" style={{ fontSize: '15px' }}>
              <h4 className="card-title" style={{ textAlign: 'start' }}>
                Create Account
              </h4>
              <form onSubmit={Register}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Enter your name"
                    className="form-control custom-input"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
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
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your email password"
                    className="form-control custom-input"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck">
                    I agree with Terms and Privacy
                  </label>
                </div>
                <button type="submit" className="btn btn w-100 mb-1 ">
                  Sign In
                </button>
                <h6 style={{ textAlign: 'center' }}>or</h6>
                <button
                  type="button"
                  className="btn btn w-100"
                  onClick={handleGoogleSignUp}
                >
                  Sign In with Google
                </button>
                <p style={{ textAlign: 'center', marginTop: '15px' }}>
                  Already have an account?{' '}
                  <b>
                    <Link to="/login" style={{ color: 'black' }}>
                      Log in
                    </Link>
                  </b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
