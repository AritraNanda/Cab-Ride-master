import React from 'react';
import { Link } from 'react-router-dom';
import './Drive.css'; 

function Drive() {
  const toggleMenu = () => {
    const navbar = document.getElementById("navbar");
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
    } else {
      navbar.classList.add("active");
    }
  };

  return (
    <div>
      <header>
        <a href="/" class="logo">
          <img src="Car-Ride (1).png" alt="CabRide Logo" style={{ height: '40px' }} />
        </a>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/drive">
            Drive
          </Link>
          <Link to="/select">
            Select
          </Link>
          <Link to="/offers">Offers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/support">Support</Link>
          <Link to="/About">About</Link>
        </nav>
        <span id="menu-bars" className="fas fa-bars" onClick={toggleMenu}></span>
      </header>

      <div className="content-section">
        <h1 class="headline">Drive with CabRide</h1>
        <p>
          Join our team of drivers and start earning with CabRide. Whether you are looking for a full-time opportunity or a part-time side hustle, CabRide offers flexible working hours and competitive earnings.
        </p>
       
        {/* <Link to="/signup"><button>Sign up now</button></Link> */}

        <h2>Why Drive with CabRide?</h2>
        <ul>
          <li>Flexible working hours: Drive on your schedule.</li>
          <li>Competitive earnings: Get paid for every ride.</li>
          <li>Community support: Join a network of professional drivers.</li>
          <li>Easy-to-use app: Seamless navigation and ride management.</li>
        </ul>

        <h2>How to Become a CabRide Driver</h2>
        <ol style={{ listStyleType: 'decimal' }}>
          <li>Complete the online application form.</li>
          <li>Submit necessary documents for verification.</li>
          <li>Attend a brief orientation session.</li>
          <li>Download the CabRide Driver app.</li>
          <li>Start driving and earning!</li>
        </ol>
      </div>
    </div>
  );
}

export default Drive;
