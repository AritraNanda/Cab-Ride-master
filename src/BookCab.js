import React, { useState } from 'react';
import './BookCab.css';

function BookCab() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        pickupLocation: '',
        dropLocation: '',
        carType: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        
        if (name === 'phone') {
            newValue = value.replace(/\D/g, '').slice(0, 10);
        }
        
        if (name === 'name') {
            newValue = value.slice(0, 25).replace(/[^a-zA-Z\s]/g, '');
        }
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email address.';
        }

        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }

        if (!formData.time) {
            newErrors.time = 'Time is required.';
        }

        if (!formData.pickupLocation.trim()) {
            newErrors.pickupLocation = 'Pickup location is required.';
        }

        if (!formData.dropLocation.trim()) {
            newErrors.dropLocation = 'Drop location is required.';
        }

        if (!formData.carType) {
            newErrors.carType = 'Car type is required.';
        }

        setErrors(newErrors);
        window.location.href = '/';
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (validateForm()) {
            alert('Booking request submitted successfully in '+formData.carType+'\n Pick up: '+formData.pickupLocation+"\t Drop at: "+formData.dropLocation);
            setFormData({
                name: '',
                phone: '',
                email: '',
                date: '',
                time: '',
                pickupLocation: '',
                dropLocation: '',
                carType: ''
            });
        }
    };

    return (
        <div className="form-container">
            <h1>Book a Cab</h1>
            <form onSubmit={handleSubmit} id="bookingForm">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className='bookcabinp'
                    />
                    {errors.name && <span id="nameError" className="error">{errors.name}</span>}
                </div>

                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        pattern="^\d{10}$"
                        className='bookcabinp'
                    />
                    {errors.phone && <span id="phoneError" className="error">{errors.phone}</span>}
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className='bookcabinp'
                    />
                    {errors.email && <span id="emailError" className="error">{errors.email}</span>}
                </div>

                <div>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className='bookcabinp'
                    />
                    {errors.date && <span id="dateError" className="error">{errors.date}</span>}
                </div>

                <div>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className='bookcabinp'
                    />
                    {errors.time && <span id="timeError" className="error">{errors.time}</span>}
                </div>

                <div>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="Pickup Location"
                        required
                        className='bookcabinp'
                    />
                    {errors.pickupLocation && <span id="pickupLocationError" className="error">{errors.pickupLocation}</span>}
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
                        className='bookcabinp'
                    />
                    {errors.dropLocation && <span id="dropLocationError" className="error">{errors.dropLocation}</span>}
                </div>

                <div>
                    <label htmlFor="carType">Car Type:</label>
                    <select
                        id="carType"
                        name="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        required
                        className='bookcabinptype'
                    >
                        <option value="">--Select Car Type--</option>
                        <option value="Mini">Mini/Luxury</option>
                        <option value="Auto">Auto/Rickshaw</option>
                        <option value="SUV">SUV</option>
                    </select>
                    {errors.carType && <span id="carTypeError" className="error">{errors.carType}</span>}
                </div>

                <button type="submit" className="submit-btn">Book Now</button>
            </form>
        </div>
    );
}

export default BookCab;
