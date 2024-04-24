import React, { useState } from 'react';
import './Gallery.css'; 
import { Link } from 'react-router-dom';

function Gallery() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleMenu = () => {
    setIsNavActive(!isNavActive);
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
        <h1 class="headline">Our Gallery</h1>
        <p>
          Welcome to our gallery! Explore stunning images showcasing our exceptional cab services, luxurious fleet, and professional drivers. Enjoy the experience and immerse yourself in our world.
        </p>

        <div className="gallery-section">
          {[
            { imgSrc: 'lux.jpg', alt: 'Luxury Fleet', caption: 'Luxury Fleet - Experience comfort and style in our premium cars.' },
            { imgSrc: 'vip.jpg', alt: 'VIP Experience', caption: 'VIP Experience - Enjoy top-notch services for a memorable ride.' },
            { imgSrc: 'city.jpg', alt: 'City Tours', caption: 'City Tours - Explore the city with our knowledgeable drivers.' },
            { imgSrc: 'professional.jpg', alt: 'Professional Drivers', caption: 'Professional Drivers - Our skilled drivers ensure safe and pleasant journeys.' },
            { imgSrc: 'corporate.jpg', alt: 'Corporate Services', caption: 'Corporate Services - Efficient and reliable transport for business travelers.' },
            { imgSrc: 'airport.jpg', alt: 'Airport Transfers', caption: 'Airport Transfers - On-time and hassle-free transfers to your destination.' },
            { imgSrc: 'wed.jpg', alt: 'Weddings & Events', caption: 'Weddings & Events - Make your special day unforgettable with our services.' },
            { imgSrc: 'exec.jpg', alt: 'Executive Transport', caption: 'Executive Transport - Travel in luxury and comfort with our executive cars.' },
            { imgSrc: 'night.jpg', alt: 'Night Out Services', caption: 'Night Out Services - Enjoy a night out with our safe and reliable services.' },
            { imgSrc: 'family.jpg', alt: 'Family Outings', caption: 'Family Outings - Comfortable rides for memorable family trips.' },
            { imgSrc: 'road.jpg', alt: 'Road Trips', caption: 'Road Trips - Embark on exciting adventures with us.' },
            { imgSrc: 'spcl.jpg', alt: 'Special Occasions', caption: 'Special Occasions - Celebrate milestones in style and luxury.' },
          ].map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.imgSrc} alt={item.alt} />
              <div className="gallery-item-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
