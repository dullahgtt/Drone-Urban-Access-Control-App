import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../axiosApi';
import '../assets/css/main.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosApi.post('/signup/', {
                email: email,
                password: password,
            });
            if (response.status === 201) {
                // Handle successful signup, e.g., navigate to the dashboard or store the received token
                console.log('Signup Successful');
            } else {
                // Handle non-201 responses
                console.log('Signup Failed:', response.data);
            }
        } catch (error) {
            console.error("Signup Error:", error.response || error);
        }
    };

    return (
        <div className="sign-up-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
