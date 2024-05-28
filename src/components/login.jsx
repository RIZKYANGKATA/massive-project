import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/images/background.jpg';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleSignUp = () => {
    console.log('Sign Up with Google');
  };

  return (
    <>
      <div className="conten" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh' }}>
        <div className="f-l">
          <div className="card" style={{ width: '400px' }}>
            <div className="card-body" style={{ fontSize: '15px' }}>
              <h4 className="card-title" style={{textAlign: 'start'}}>Login</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" placeholder='Enter your email address'
                    className="form-control custom-input" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input 
                    type="password" placeholder='Enter your password'
                    className="form-control custom-input" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </div>
                <Link to="/forgotPassword" className="d-block mb-2" style={{ textAlign: 'end', color: 'gray', textDecoration: 'none' }}>Forgot your password?</Link>
                <button type="submit" className="btn btn w-100 mb-1 ">Sign In</button>
                <h6 style={{textAlign: 'center'}}>or</h6>
                <button type="button" className="btn btn w-100" onClick={handleGoogleSignUp}>Sign Ip with Google</button>
                <p style={{textAlign: 'center', marginTop: '15px'}}>Don't have an account ? <b><Link to="/register" style={{color: 'black'}}>Sign up</Link></b></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
