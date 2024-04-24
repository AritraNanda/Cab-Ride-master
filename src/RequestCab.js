import React, { useState } from 'react';
import './RequestCab.css'; 
function RequestCab() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        time: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long.';
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        if (!formData.pickup.trim()) {
            newErrors.pickup = 'Pickup location cannot be empty.';
        }

        if (!formData.drop.trim()) {
            newErrors.drop = 'Drop location cannot be empty.';
        }

        const selectedDate = new Date(formData.date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Reset time component
        if (isNaN(selectedDate.getTime()) || selectedDate < currentDate) {
            newErrors.date = 'Please choose a valid date.';
        }

        if (!formData.time) {
            newErrors.time = 'Please choose a valid time.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        
        if (validateForm()) {
            console.log('Form submitted with data:', formData);
            
            alert('Your request has been submitted successfully from '+formData.pickup+" to "+formData.drop);
            
            
            setFormData({
                name: '',
                phone: '',
                pickup: '',
                drop: '',
                date: '',
                time: ''
            });
        }
    };

    return (
        <div className="request-container">
            <h1>Request a Cab</h1>
            <form id="request-form" onSubmit={handleSubmit} method='POST'>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                    {errors.name && <span className="error" id="name-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                    />
                    {errors.phone && <span className="error" id="phone-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="pickup">Pickup Location:</label>
                    <input
                        type="text"
                        id="pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        placeholder="Pickup location"
                        required
                    />
                    {errors.pickup && <span className="error" id="pickup-error">{errors.pickup}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="drop">Drop Location:</label>
                    <input
                        type="text"
                        id="drop"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        placeholder="Drop location"
                        required
                    />
                    {errors.drop && <span className="error" id="drop-error">{errors.drop}</span>}
                </div>

\                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <span className="error" id="date-error">{errors.date}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    {errors.time && <span className="error" id="time-error">{errors.time}</span>}
                </div>

                <button type="submit" className="submit-btn">Submit Request</button>
            </form>
        </div>
    );
}

export default RequestCab;
