// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/main.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleLogin = async (e) => {
        e.preventDefault();
        // Here you will handle the authentication logic, possibly making an API call to your backend
        // For now, it's just a console log and a navigation to the dashboard
        console.log('Login:', { email, password });
        // TODO: Authenticate user, then navigate on success
        // Upon successful login, navigate to the dashboard
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="login-email">Email:</label>
                <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="login-password">Password:</label>
                <input
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    );
}

export default Login;
