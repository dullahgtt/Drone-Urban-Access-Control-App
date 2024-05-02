import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';


function HomePage() {
    return (
        <div>
            {/* Banner */}
            <header className="app-banner">
                <div className="banner-content">
                    <Link to="/" className="home-link">No Fly Zone</Link>
                    <div>
                        <Link to="/signup" className="btn">Sign Up</Link>
                        <Link to="/login" className="btn">Log In</Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <h1>No Fly Zone: Drone Delivery</h1>
                <img src='/assets/images/Hero-icon.png' />
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
                    </div>
                    <div className="card">
                        <h3>Lack of Centralized Solutions</h3>
                        <p>Our solution provides a centralized source for all flight preferences of the average citizen. This ensures that drone operators cannot invade private areas without prior authorization, aligning with both FAA policies and property owner preferences.</p>
                    </div>
                    <div className="card">
                        <h3>Human Safety Concerns</h3>
                        <p>There have been instances of people seizing drones flying over private property, unauthorized hijackings, and near collisions with other aircraft and objects underscore the need for heightened security measures.</p>
                    </div>
                </div>
            </section>

            {/* Explore Our Model */}
            <section className="explore-model">
                <p>We are introducing a model that not only evaluates access to environments based on designated attributes, but also helps companies direct their drones safely in public spaces. This model allows for the restriction or permission of drone flyovers in specific physical spaces, termed as zones. The application architecture will utilize Attribute-Based Access Control (ABAC) to collect airspace restrictions and essential factors, enhancing path planning accuracy and overall operational efficiency for drone operators.</p>
                <button className="explore-btn">Explore Our Model</button>
            </section>

            {/* Human Factors */}
<section className="human-factors">
    <h2>Human Factors Used</h2>
    <div className="card-container">
        {/* UI Design & Usability */}
        <div className="card">
            <h3>UI Design & Usability</h3>
            <p>Enhance user experience with intuitive navigation, clear labels, and responsive design for seamless interaction across devices.</p>
        </div>

        {/* Privacy & Trust */}
        <div className="card">
            <h3>Privacy & Trust</h3>
            <p>Foster trust through end-to-end encryption safeguarding user data, alongside transparent policies granting users control over their personal information.</p>
        </div>

        {/* Engagement & Feedback Mechanisms */}
        <div className="card">
            <h3>Engagement & Feedback Mechanisms</h3>
            <p>Enhance user engagement with interactive tutorials for first-time users and facilitate real-time feedback and suggestions through in-app features.</p>
        </div>

        {/* Safety & Emergency Awareness */}
        <div className="card">
            <h3>Safety & Emergency Awareness</h3>
            <p>Ensure safety with real-time alerts for nearby drone activity and expedite assistance with a quick-access emergency contact feature.</p>
        </div>

        {/* Sensory Functions & Perceptual Abilities */}
        <div className="card">
            <h3>Sensory Functions & Perceptual Abilities</h3>
            <p>Customized sensory elements, ensuring readability and accessibility while optimizing visibility through contrast, color, and typography.</p>
        </div>

        {/* Cognitive Functioning */}
        <div className="card">
            <h3>Cognitive Functioning</h3>
            <p>Simplified navigation and decision-making processes minimize cognitive load, supported by clear and intuitive cues for seamless user interaction.</p>
        </div>
    </div>
</section>


            {/* Footer */}
            <footer className="footer">
                <p>Footer content here - developer information, etc.</p>
            </footer>
        </div>
    );
}

export default HomePage;
