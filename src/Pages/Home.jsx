import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import HC from '../assets/homecare.jpg';
import VHC from '../assets/vhc.jpg';
import OP from '../assets/op.jpg';
import MED from '../assets/medicine.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="text-center mb-4">
        <h1 className="home-heading">Palliative Makkaraparamba</h1>
        <p className="home-description">Dedicated to Dignity and Care.</p>
      </header>

      {/* Card Section */}
      <div className="row justify-content-center card-sec">
        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={HC} className="card-img-top" alt="Home Care" />
            <div className="card-body text-center">
              <h5 className="card-title">Home Care</h5>
              <Link className="btn btn-primary" to="/home-care">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={OP} className="card-img-top" alt="OP" />
            <div className="card-body text-center">
              <h5 className="card-title">OP</h5>
              <Link className="btn btn-primary" to="/op">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={MED} className="card-img-top" alt="Medicine" />
            <div className="card-body text-center">
              <h5 className="card-title">Medicine</h5>
              <Link className="btn btn-primary" to="/medicine">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card home-card mb-4">
            <img src={VHC} className="card-img-top" alt="VHC" />
            <div className="card-body text-center">
              <h5 className="card-title">VHC / GVHC</h5>
              <Link className="btn btn-primary" to="/vhc">Explore</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-5">
        <p>Customer Care: <strong> Ph: 8157980307</strong></p>
        <p>Neuraq Technologies</p>
      </footer>
    </div>
  );
}

export default Home;
