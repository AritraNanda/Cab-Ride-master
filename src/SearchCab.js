import React, { useState } from "react";
import "./SearchCab.css"; 

function SearchCab() {
  const [formData, setFormData] = useState({
    username:"",
    pickupLocation: "",
    dropLocation: "",
    date: "",
    time: "",
    cabType: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'username') {
        const newValue = value.replace(/[^a-zA-Z]/g, '').slice(0, 25);
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    } else {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
};

  const validateForm = () => {
    const newErrors = {};

    console.log(formData.pickupLocation.trim());
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Pickup location is required.";
    }

    if (!formData.dropLocation.trim()) {
      newErrors.dropLocation = "Drop location is required.";
    }

    if (!formData.date) {
      newErrors.date = "Date is required.";
    }

  
    if (!formData.time) {
      newErrors.time = "Time is required.";
    }

    if (!formData.cabType) {
      newErrors.cabType = "Cab type is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm()) {
        const currentDate = new Date().toISOString();
        //   const searchcabinfo=pickupLocation+" "+" "
        //   dropLocation+" "
        //   date+" "
        //   time+" "
    //   cabType;

    // Store the current date in local storage
    //   localStorage.setItem("SearchDate", currentDate);
    localStorage.setItem("Username",formData.username)
    localStorage.setItem("Pickup location",formData.pickupLocation);
      localStorage.setItem("Drop location",formData.dropLocation);
      localStorage.setItem("Date",formData.date);
      localStorage.setItem("Time",formData.time);
      localStorage.setItem("Cab Type",formData.cabType);
      alert("Searching for "+formData.cabType+ " from "+formData.pickupLocation+" to "+formData.dropLocation);
      window.location.href="/";
     
    }
  };

  return (
    <div className="form-container">
      <h1>Search for a Cab</h1>
      <form
        onSubmit={handleSubmit}
        id="searchForm"
        action="https://api.web3forms.com/submit"
        method="POST"
      >

        <div>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="scabinp"
          />
          {errors.username && (
            <span id="usernameError" className="error">
              {errors.username}
            </span>
          )}
          
        </div>
        <input type="hidden" name="access_key" />
        <div>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Pickup Location"
            required
            className="scabinp"
          />
          {errors.pickupLocation && (
            <span id="pickupLocationError" className="error">
              {errors.pickupLocation}
            </span>
          )}
        </div>

        <div>
          <input
            type="text"
            id="dropLocation"
            name="dropLocation"
            value={formData.dropLocation}
            onChange={handleChange}
            placeholder="Drop Location"
            required
            className="scabinp"
          />
          {errors.dropLocation && (
            <span id="dropLocationError" className="error">
              {errors.dropLocation}
            </span>
          )}
        </div>

        <div>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="scabinp"
          />
          {errors.date && (
            <span id="dateError" className="error">
              {errors.date}
            </span>
          )}
        </div>

        <div>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="scabinp"
          />
          {errors.time && (
            <span id="timeError" className="error">
              {errors.time}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="cabType">Cab Type:</label>
          <select
            id="cabType"
            name="cabType"
            value={formData.cabType}
            onChange={handleChange}
            required
            className="scabinptype"
          >
            <option value="">--Select Cab Type--</option>
            <option value="Mini">Mini</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Luxury">Luxury</option>
          </select>
          {errors.cabType && (
            <span id="cabTypeError" className="error">
              {errors.cabType}
            </span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchCab;
