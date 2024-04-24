import React from "react";
import "../src/result.css";
import { Link } from "react-router-dom";

const Result = () => {
  let Cab_type = localStorage.getItem("Cab Type");
  let username = localStorage.getItem("Username");
  let pickup = localStorage.getItem("Pickup location");
  let drop = localStorage.getItem("Drop location");
  const min = 100;
  const max = 5000;
  const price = Math.floor(Math.random() * (max - min + 1)) + min;
  let pickdate=localStorage.getItem("Date");
  let picktime=localStorage.getItem("Time");

  const confirmBooking=(e)=>{
    alert("Your ride is confirmered, our driver will be at the pick up point on time");
    localStorage.clear()
    window.location.href = '/';
  }

  const cancelBooking=(e)=>{
    localStorage.clear()
    window.location.href = '/';
  }

  return (
    <div id="result" style={{ display: Cab_type ? "block" : "none" }}>
        <a onClick={cancelBooking}> 
        <svg className="svgimage" fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="16.384"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"></path> </g></svg>
        </a>
      <h2 className="h1class">{Cab_type} Cab Found</h2>
      <p>
        <b>For </b>
        {username}
      </p>
      <p>
        <b>From: </b>
        {pickup}
      </p>
      <p>
        <b>Destination: </b>{drop}
      </p>
      <p>
        <b>Price: </b>₹{price}
      </p>
      <p>
        <b>On: </b>{pickdate} {picktime}
      </p>
      <button onClick={confirmBooking}>Confirm Booking</button>
    </div>
  );
};

export default Result;
