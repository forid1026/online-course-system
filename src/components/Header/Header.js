import React from 'react';
import './Header.css';
import image from '../../images/bg-3.jpg';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/course">Course</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>
            </nav>
            <div className="summary" style={{backgroundImage: `url(${image})` }}>
                <div className="info">
                <h1>Your course to success</h1>
                <p>Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                <button className="btn btn-success">Join for free</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;