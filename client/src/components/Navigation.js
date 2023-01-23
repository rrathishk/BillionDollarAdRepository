import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-menu" onClick={() => setIsOpen(!isOpen)}>
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    <Link className="navbar-item" to="/form">Create Ad</Link>
                    <Link className="navbar-item" to="/ads">View Ads</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
