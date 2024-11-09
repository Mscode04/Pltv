import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sample credentials
  const correctEmail = "admin@mkba";
  const correctPassword = "admin";

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      // Redirect to the Home page on successful login
      navigate('/home');
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4 login-card">
          <h2 className="text-center mb-4">Palliative Makkaraparamba</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary1 btn-block mt-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
