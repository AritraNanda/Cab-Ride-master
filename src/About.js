import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
   
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
                <div className="about-container">
                    <h1 class="headline">About Us</h1>
                    <p>
                        Welcome to CabRide! We're a dedicated transportation service that aims to provide reliable, safe, and affordable rides to our customers. With our fleet of vehicles and experienced drivers, we strive to offer the best travel experience.
                    </p>
                </div>

                <div className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-container">
                        {[
                            {
                                imgSrc: 'tanay.png',
                                name: 'Tanay Naik',
                                title: 'CEO & Founder',
                            },
                            {
                                imgSrc: 'aritra.png',
                                name: 'Aritra Nanda',
                                title: 'Chief Operating Officer',
                            },
                            {
                                imgSrc: 'tanisha.png',
                                name: 'Tanisha Chetani',
                                title: 'Head of Marketing',
                            },
                        ].map((member, index) => (
                            <div key={index} className="team-member">
                                <img src={member.imgSrc} alt="Team Member" />
                                <h3>{member.name}</h3>
                                <p>{member.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="history-section">
                    <h2>Our Story</h2>
                    <p>
                        CabRide was founded with the goal of making transportation easier and more efficient for everyone. Over the years, we have grown from a small start-up to a trusted provider of transportation services. Our commitment to quality and customer satisfaction remains at the heart of our mission.
                    </p>
                </div>

                <div className="values-section">
                    <h2>Our Core Values</h2>
                    <p>
                        At CabRide, we are driven by a strong set of core values that guide our approach to service and our interactions with customers and employees alike:
                    </p>
                    <ul className="values-list">
                        <li>
                            Customer Satisfaction: We put our customers first and strive to exceed their expectations.
                        </li>
                        <li>
                            Safety and Reliability: We maintain high safety standards and provide reliable services you can trust.
                        </li>
                        <li>
                            Integrity: We conduct our business with honesty and transparency, fostering trust with our customers and partners.
                        </li>
                        <li>
                            Community Involvement: We actively contribute to the communities we serve, fostering positive relationships and mutual growth.
                        </li>
                    </ul>
                </div>

                <div className="vision-mission">
                    <div className="vision">
                        <h2>Our Vision</h2>
                        <h3>Building the Future of Transportation</h3>
                        <p>
                            We envision a future where transportation is seamless, efficient, and accessible to all. By embracing technology and innovation, we aim to be at the forefront of the transportation industry.
                        </p>
                    </div>

                    <div className="mission">
                        <h2>Our Mission</h2> 
                        <h3>Providing Exceptional Service</h3>
                        <p>
                            Our mission is to offer exceptional transportation services that prioritize safety, convenience, and customer satisfaction. We strive to exceed expectations in every ride we offer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
