import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Support.css'; 

function Support() {
  
    const [isNavActive, setIsNavActive] = useState(false);

    
    const toggleMenu = () => {
        setIsNavActive(!isNavActive);
    };

   
    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Form submitted');
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
                <h1 class="headline">Customer Support</h1>
                <p>Welcome to CabRide's support page. We're here to assist you with any questions or concerns you may have. Explore the sections below for help, or contact us directly using the form provided.</p>

                
                <div className="support-container">
                    {[
                        {
                            title: 'Frequently Asked Questions',
                            description: 'Find answers to common queries about our services and policies.',
                            linkText: 'Read FAQs',
                            linkHref: '#faq'
                        },
                        {
                            title: 'Billing & Payments',
                            description: 'Information on billing methods, accepted payment options, and resolving payment issues.',
                            linkText: 'Learn More',
                            linkHref: '#bill'
                        },
                        {
                            title: 'Booking Assistance',
                            description: 'Get tips and support for booking rides and managing your bookings.',
                            linkText: 'Get Assistance',
                            linkHref: '#form'
                        },
                        {
                            title: 'Service & Safety',
                            description: 'Read about our service standards and safety measures.',
                            linkText: 'Learn More',
                            linkHref: '#service'
                        }
                    ].map((item, index) => (
                        <div key={index} className="support-box">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.linkHref}>{item.linkText}</a>
                        </div>
                    ))}
                </div>

               
                <div className="contact-form1" id='form'>
                    <div>
                    <h2>Contact Us</h2>
                    <p>If you need further assistance, please fill out the form below to get in touch with our support team:</p>

                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" required className='supin'/>
                        <input type="email" name="email" placeholder="Your Email" required className='supin'/>
                        <textarea name="message" placeholder="Your Message" rows="5" required className='supin'/>
                        <button type="submit">Send Message</button>
                    </form>
                    </div>
                    <div>
                    <img src="customercare.jpg" alt="Customer care" />
                    </div>
                </div>

                <div className='bill' id='bill'>
                    <h2>Billing and Payments</h2>
                    <p>
                    Navigating through our website is as easy as breeze, and when it comes to payments, simplicity reigns supreme. With our user-friendly billing and payment systems, you can seamlessly complete your transactions without any hassle. Whether you're purchasing products, subscribing to services, or making donations, our platform ensures a smooth and secure experience. Say goodbye to complicated payment processes and hello to effortless transactions with our intuitive billing system, designed to make your online experience as convenient as possible.
                    </p>
                </div>

                <div className='bill' id='service'>
                    <h2>Service and Safety</h2>
                    <p>
                    Embarking on our platform is like stepping into a haven of services, where your needs are met with utmost care and efficiency. We prioritize your safety as much as we do your satisfaction. With robust safety measures integrated into every facet of our operations, you can trust that your data and transactions are shielded from any potential threats. Our commitment to providing top-notch services goes hand in hand with ensuring your peace of mind, so you can explore, engage, and enjoy without a worry in the world.
                    </p>
                </div>

                
                <div className="faq-section" id='faq'>
                    <h2>FAQs</h2>

                    {[
                        {
                            title: 'How can I book a ride?',
                            text: 'Booking a ride is easy. Use our app or website to enter your pick-up and drop-off locations, then select your preferred vehicle type and confirm your booking.'
                        },
                        {
                            title: 'What payment methods are accepted?',
                            text: 'We accept major credit cards, debit cards, and popular online payment methods. You can choose your preferred method during checkout.'
                        },
                        {
                            title: 'How can I contact customer support?',
                            text: 'You can contact our support team via the contact form on this page or use the live chat option for real-time assistance.'
                        },
                        {
                            title: 'What safety measures are in place?',
                            text: 'We prioritize your safety with background checks for drivers, sanitization protocols, and a rating system for both drivers and passengers.'
                        }
                    ].map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.title}</h3>
                            <p>{faq.text}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default Support;
