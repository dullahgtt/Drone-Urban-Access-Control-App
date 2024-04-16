// src/components/SignUp.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/main.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you will handle the sign-up logic, possibly making an API call to your backend
        // For now, it's just a console log and a navigation to the dashboard
        console.log('Sign Up:', { email, password });
        // TODO: Sign up user, then navigate on success
        // Upon successful sign up, navigate to the dashboard
        navigate('/dashboard');
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
