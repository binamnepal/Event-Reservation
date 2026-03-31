import React, { useState } from 'react';
import { HiSparkles } from 'react-icons/hi';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-header">
          <div className="login-logo">
            <HiSparkles />
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to Pashupati Planners</p>
        </header>

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="email">Email Address</label>
            <input 
              id="email"
              type="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <div className="login-field__header">
              <label htmlFor="password">Password</label>
              <a href="#" className="login-forgot">Forgot password?</a>
            </div>
            <input 
              id="password"
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-btn-wrap">
            <button type="button" className="login-btn login-btn--warning">
              Fill details first!
            </button>
          </div>
        </form>

        <p className="login-signup">
          Don't have an account? <a href="#" className="login-signup__link">Get in touch</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;