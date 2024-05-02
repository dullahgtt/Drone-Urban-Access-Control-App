import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosApi from '../axiosApi'; // Ensure this import matches the file name exactly
import '../assets/css/main.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook to navigate

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosApi.post('login/', {
                username: email,
                password: password,
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token); // Save the token locally
                navigate('/dashboard'); // Navigate to dashboard
            } else {
                console.error("Login failed:", response.data);
                // Optionally handle login failure
            }
        } catch (error) {
            console.error("Login error:", error.response ? error.response.data : "Unknown Error");
            // Handle errors here
        }
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
