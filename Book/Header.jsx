import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="logo">Ride Wave</div>
          <nav>
            <ul>
         
              <li><Link to='/Home'>Home</Link></li>
              <li><Link to='/BookTickets'>BookTickets</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
              <li><Link to='/Register'>Register</Link></li>
              <li><Link to='/Login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
