import React from 'react';
import './Select.css'; 
import { Link } from 'react-router-dom';

function Select() {
  
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
        <h1 class="headline">Select Your Ride</h1>
        <p>
          Choose the best ride option for your needs. Whether you want to ride in comfort, luxury, or with a group, CabRide has you covered.
        </p>

        <div className="ride-selection">
          <div className="ride-option">
            <img src="minnni.png" alt="Economy Car" />
            <h3>Economy</h3>
            <p>Affordable rides for everyday commuting. Travel comfortably without breaking the bank.</p>
           
            <Link to="/searchcab"><button>Select Economy</button></Link>
          </div>

          <div className="ride-option">
            <img src="luxury.png" alt="Luxury Car" />
            <h3>Luxury</h3>
            <p>Experience the ultimate in comfort and style with our premium luxury rides.</p>
            <Link to="/searchcab"><button>Select Luxury</button></Link>
          </div>

          <div className="ride-option">
            <img src="suv1.png" alt="SUV" />
            <h3>SUV</h3>
            <p>Perfect for larger groups and family trips. Enjoy spacious rides with ample storage.</p>
            <Link to="/searchcab"><button>Select SUV</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
