import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">
            <p>SAPIENCE</p>
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-red-500">Home</Link></li>
          <li className="relative group">
            <Link to="#">Team</Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-md">
              <li><Link to="/city-team" className="block px-4 py-2 hover:bg-gray-200">City, University of London</Link></li>
              <li><Link to="/uok-team" className="block px-4 py-2 hover:bg-gray-200">University of Klagenfurt</Link></li>
              <li><Link to="/uah-team" className="block px-4 py-2 hover:bg-gray-200">University of Alabama in Huntsville</Link></li>
              <li><Link to="/dut-team" className="block px-4 py-2 hover:bg-gray-200">Delft University of Technology</Link></li>
            </ul>
          </li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/competitions">Competitions</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
