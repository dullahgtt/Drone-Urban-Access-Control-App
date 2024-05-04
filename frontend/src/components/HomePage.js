import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/main.css';

function HomePage() {
    const navigate = useNavigate(); // Create an instance of useNavigate

    const handleExploreClick = () => {
        navigate('/dashboard'); // Function to navigate to /dashboard
    };

    return (
        <div>
            {/* Banner */}
            

            {/* Hero Section */}
            <section className="hero-section">
                <div>
                    <Link to="/signup" className="btn">Sign Up</Link>
                    <Link to="/login" className="btn">Log In</Link>
                </div>
                <h1>No Fly Zone: Drone Delivery</h1>
                <img src='/assets/images/Hero-icon.png' alt="Hero icon" />
            </section>

            {/* Fast Delivery Partner Section */}
            <section className="delivery-partner">
                <h2>Your Lightning Fast Delivery Partner</h2>
                <p>With a rapid increase in Unmanned Aerial Systems (UAS) in commercial and residential areas and a lack of effective centralized solutions for managing drone flight paths and restrictions, we seek to introduce a model that allows drones access to environments based on designated attributes.</p>
            </section>

            {/* Why No Fly Zone? */}
            <section className="why-nfz">
                <h2>Why No Fly Zone?</h2>
                <div className="card-container">
                    <div className="card">
                        <h3>Increase in Unmanned Aerial Systems</h3>
                        <p>In the United States alone, there are over 900,000 drones registered with the Federal Aviation Administration (FAA).</p>
                        <img src='/assets/images/Increase.png' alt="Increase in drones" />
                    </div>
                    <div className="card">
                        <h3>Lack of Centralized Solutions</h3>
                        <p>Our solution provides a centralized source for all flight preferences of the average citizen. This ensures that drone operators cannot invade private areas without prior authorization, aligning with both FAA policies and property owner preferences.</p>
                        <img src='/assets/images/Safe.png' alt="Safe drone operations" />
                    </div>
                    <div className="card">
                        <h3>Human Safety Concerns</h3>
                        <p>There have been instances of people seizing drones flying over private property, unauthorized hijackings, and near collisions with other aircraft and objects underscore the need for heightened security measures.</p>
                        <img src='/assets/images/Safety.png' alt="Safety concerns" />
                    </div>
                </div>
            </section>

            {/* Explore Our Model */}
            <section className="explore-model">
                <h2>Our Model</h2>
                <p>We are introducing a model that not only evaluates access to environments based on designated attributes, but also helps companies direct their drones safely in public spaces. This model allows for the restriction or permission of drone flyovers in specific physical spaces, termed as zones. The application architecture will utilize Attribute-Based Access Control (ABAC) to collect airspace restrictions and essential factors, enhancing path planning accuracy and overall operational efficiency for drone operators.</p>
                <button className="explore-btn" onClick={handleExploreClick}>Explore Our Model</button>
            </section>

            {/* Human Factors */}
            <section className="human-factors">
                <h2>Human Factors Used</h2>
                <div className="card-container">
                    {/* Various cards omitted for brevity */}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                {/* Footer content omitted for brevity */}
            </footer>
        </div>
    );
}

export default HomePage;
