import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Navbar() {
  return (
    <div>
       {/* Navbar */}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand"><Link className="nav-link" to="/home">Palliative Mkba  |</Link></span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home-care">HomeCare</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/op">OP</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/medicine">Medicine</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/vhc">VHC</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
