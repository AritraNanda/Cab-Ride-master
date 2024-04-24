import React from "react";
import "./Home.css"; 
import BookCab from "./BookCab";
import { Link } from "react-router-dom";
import Result from "./Result";

const Home = () => {

  const date = new Date();
  console.log(date.getDate());
  const today = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const abc = today + "-0" + month + "-" + year;

  const toggleMenu = () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
  };

  return (
    <div>
      <Result/>
      <header>
        <div className="preloader" id="preloader">
          <div className="loading back"></div>
        </div>

        <div class="logo">
          <a href="/">
            <img src="Car-Ride (1).png" alt="CabRide Logo" />
          </a>
        </div>
        <nav id="navbar">
          <Link to="/">Home</Link>
          <Link to="/drive">Drive</Link>
          <Link to="/select">Select</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/support">Support</Link>
          <Link to="/About">About</Link>
        </nav>
        <span
          id="menu-bars"
          className="fas fa-bars"
          onClick={toggleMenu}
          style={{
            display: "block",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginLeft: "20px",
          }}
        ></span>
      </header>

      <div className="main-container">
        <div className="background-text">
          <h2 class="firstline">
            Book a <span>Cab Now</span>
          </h2>
        </div>

        <div className="taxi-image bg-image">
          <div className="taxi-image">
            <img src="Car-Ride.png" alt="Car-Ride" />
          </div>
        </div>
      </div>

      <div className="home-container">
        <div className="home-content grid-layout">
          <div className="inner-content">
            <h3>Best in City</h3>
            <h2>Trusted Cab Service in the Country</h2>
            <p>
              Choose CabRide for the lowest fares with CarRide Share and Share
              Express on fixed routes with zero deviations. Enjoy a fast and
              efficient travel experience!
            </p>
            <Link to="/booknow">
              <button>Book Now</button>
            </Link>
          </div>

          <div className="contact-form bg-image">
            <div className="form-heading">
              <h1>Book a Cab</h1>
            </div>
            <div class="form-fields">
              <input
                type="text"
                placeholder="Tanay Naik"
                className="homeinp"
                disabled
              />
              <input
                type="tel"
                placeholder="+91 72230 XXXXX"
                className="homeinp"
                disabled
              />
              <input type="text" placeholder={abc} className="homeinp" disabled/>
              <input type="text" placeholder="20:45" className="homeinp" disabled/>

               
                <input
                  type="text"
                  placeholder="From: VIT Vellore"
                  className="homeinp"
                  disabled
                />
              
              <input type="text" placeholder="To: Puducherry" className="homeinp" disabled/>
            </div>
            <div className="search-cabs">
              <Link to="searchcab">Search Cabs</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fast-booking">
        <h1 className="fast-heading">We Do Best</h1>
        <h2>Better Than You Wish</h2>
        <div className="inner-fast">
          <div className="booking-content">
            <div className="icon-fast">
              <span>
                <i className="fas fa-rupee-sign"></i>
              </span>
            </div>
            <div className="inner-fast-text">
              <h1>Cab for Every Pocket</h1>
              <p>
                From Sedans and SUVs to Luxury cars for special occasions, we
                have cabs to suit every pocket. Go cashless and travel with
                ease.
              </p>
            </div>
          </div>
          <div className="booking-content">
            <div className="icon-fast">
              <span>
                <i className="fas fa-shield-alt"></i>
              </span>
            </div>
            <div className="inner-fast-text">
              <h1>Secure and Safe Rides</h1>
              <p>
                Verified drivers, emergency alert buttons, and live ride
                tracking ensure safe and enjoyable travel experiences.
              </p>
            </div>
          </div>
          <div className="booking-content">
            <div className="icon-fast">
              <span>
                <i className="fas fa-car"></i>
              </span>
            </div>
            <div className="inner-fast-text">
              <h1>Share and Express</h1>
              <p>
                Choose CabRide Share for the lowest fares. Share Express is
                available on select fixed routes with zero deviations for a
                faster experience.
              </p>
            </div>
          </div>
          <div className="booking-content">
            <div className="icon-fast">
              <span>
                <i className="fas fa-music"></i>
              </span>
            </div>
            <div className="inner-fast-text">
              <h1>In-Cab Entertainment</h1>
              <p>
                Enjoy music, videos, and more with CabRide Play! Stay connected
                even when traveling through areas with weak network signals with
                our free Wi-Fi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-tariff">
        <h1>
          Our <span>Rides</span>
        </h1>
        <div className="inner-tariff">
          <div className="tariff-container">
            <div className="inner-box1 inner">
              <div class="cabphoto">
                <img src="mini.png" alt="Mini Cab" width="175" height="89" />
              </div>
              <h2>Mini</h2>
              <p>
                A comfortable AC hatchback for your everyday dependable ride. An
                economical option for daily commutes.
              </p>
              <h3>Small fares for short rides</h3>
              <Link to="/searchcab">
                <button>Request Cab</button>
              </Link>
            </div>
          </div>
          <div className="tariff-container">
            <div className="inner-box2 inner">
              <div class="cabphoto">
                <img src="auto.jpg" alt="Auto" width="230" />
              </div>
              <h2>Auto</h2>
              <p>
                The familiar auto ride without the hassle of waiting and
                haggling for prices. A convenient way to travel daily.
              </p>
              <h3 className="yellow-section">Get an auto at your doorstep!</h3>
              <Link to="/searchcab">
                <button>Request Auto</button>
              </Link>
            </div>
          </div>
          <div className="tariff-container">
            <div className="inner-box3 inner">
              <div class="cabphoto">
                <img src="suv.jpg" alt="Prime SUV" width="210" />
              </div>
              <h2>Prime SUV</h2>
              <p>
                SUVs with free Wi-Fi and top drivers provide a comfortable
                getaway with room for everyone, including your extra bags.
              </p>
              <h3>Perfect for weekend family getaways</h3>
              <Link to="/searchcab">
                <button>Request SUV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="some-faqs">
        <h1>Cabs Booking FAQs</h1>
        <div className="main-faqs">
          <div className="faqs">
            <div className="ques">
              <h2>What kind of cabs can you book from CabRide?</h2>
            </div>
            <div className="ans">
              <p>
                You can book various types of cabs from CabRide: airport cabs
                and intercity cabs/outstation cabs. Book outstation cabs for
                one-way or round-trip transfers.
              </p>
            </div>
          </div>
          <div className="faqs">
            <div className="ques">
              <h2>How can I book cheap cabs online?</h2>
            </div>
            <div className="ans">
              <p>
                CabRide offers online cab booking for outstation trips or cabs
                from the airport at affordable rates. You can book any cab of
                your choice from the app or the website.
              </p>
            </div>
          </div>
          <div className="faqs">
            <div className="ques">
              <h2>How can I check cab rates?</h2>
            </div>
            <div className="ans">
              <p>
                CabRide shows cab fares after you enter the pickup and drop
                locations. Compare the rates for different cab options and
                choose the one that suits your pocket.
              </p>
            </div>
          </div>
          <div className="faqs">
            <div className="ques">
              <h2>How do I book a ride with CabRide?</h2>
            </div>
            <div className="ans">
              <p>
                You can book a ride by selecting the type of ride you want (one
                way, round trip, hourly, or airport transfer), choose your
                preferred pickup location and drop location, date, and time.
                Once the details are confirmed, choose your cab and pay online.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>
            We’re here to assist you with any questions or issues. Contact us
            for more information.
          </p>
          <div className="contactdetails">
            <a
              href="mailto:aritra.nanda2022@vitstudent.ac.in"
              className="contact-link"
            >
              Email Us
            </a>
            <a href="tel:+91 7223079679" className="contact-link">
              Call Us
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms-and-conditions.html">Terms & Conditions</a>
          </div>
          <p className="copyright">© 2024 CabRide. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
