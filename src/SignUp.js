import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
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

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number.';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (validateForm()) {
            console.log('Form submitted with data:', formData);

            alert('Form submitted successfully!');

            setFormData({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} id="signUpForm">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                        className='signinp'
                    />
                    {errors.name && <span id="nameError" className="error">{errors.name}</span>}
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
                        className='signinp'
                    />
                    {errors.email && <span id="emailError" className="error">{errors.email}</span>}
                </div>

                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className='signinp'
                    />
                    {errors.phone && <span id="phoneError" className="error">{errors.phone}</span>}
                </div>

                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className='signinp'
                    />
                    {errors.password && <span id="passwordError" className="error">{errors.password}</span>}
                </div>

                <div>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                        className='signinp'
                    />
                    {errors.confirmPassword && <span id="confirmPasswordError" className="error">{errors.confirmPassword}</span>}
                </div>

                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
