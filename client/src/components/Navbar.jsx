import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return <div className='nav-container'>
      <div>
          <h2>Products</h2>
      </div>
      <div>
          <ul>
              <li><a href="http://localhost:3000">Home</a></li>
              {/* <li>Home</li> */}
              <li>Products</li>
          </ul>
      </div>
  </div>;
};

export default Navbar;
