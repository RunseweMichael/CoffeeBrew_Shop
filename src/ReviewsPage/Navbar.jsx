import React, { useState } from 'react';
import logo from '../assets/CoffeeImages/CofLogo1.jpg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="nav-left">
        <div><img src={logo} alt="Our Logo" className="logoImg" /></div>
        <h3 className="nav-name">COFFEE BREW</h3>
      </div>

    
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`nav-right ${isOpen ? 'active' : ''}`}>
        <Link to="/homepage"><div className="link">Home</div></Link>
        <Link to="/about"><div className="link">About Us</div></Link>
        <Link to="/products"><div className="link">Products</div></Link>
        <Link to="/how"><div className="link">How It Works</div></Link>
        <Link to="/review"><div className="link">Reviews</div></Link>
        <Link to="/location"><div className="link">Cafe Location</div></Link>
        <Link to="/contact"><div className="link">Contact Us</div></Link>
      </div>
    </div>
  );
}
