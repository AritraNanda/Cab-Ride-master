import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './MiniCarSelection.css';
import { useNavigate } from 'react-router-dom';

function MiniCarSelection() {
    const navigate = useNavigate();
    const [selectedCar, setSelectedCar] = useState('');
    
        const handleSubmit = (e) => {
        e.preventDefault();
        
        if (selectedCar) {
            alert(`You have selected: ${selectedCar}`);
            
            navigate('/booknow');
            // navigate.push('/book.html');
        } else {
            alert("Please select a mini car.");
        }
    };

    const handleChange = (e) => {
        setSelectedCar(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Select Mini/Economy Car</h1>
            <form onSubmit={handleSubmit} id="miniForm">
                <div>
                    <label htmlFor="miniCar">Select Mini/Economy Car:</label>
                    <select
                        id="miniCar"
                        name="miniCar"
                        value={selectedCar}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Choose a Car--</option>
                        <option value="Maruti Swift">Maruti Swift - ₹1,000</option>
                        <option value="Hyundai i10">Hyundai i10 - ₹1,000</option>
                        <option value="Tata Tiago">Tata Tiago - ₹900</option>
                        <option value="Renault Kwid">Renault Kwid - ₹850</option>
                        <option value="Datsun GO">Datsun GO - ₹850</option>
                    </select>
                </div>

                <input type="submit" value="Confirm Selection" />
            </form>
        </div>
    );
}

export default MiniCarSelection;
