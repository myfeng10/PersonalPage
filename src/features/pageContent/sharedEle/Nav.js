import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/WeightRecorder">WeightRecorder</Link></li>
          <li><Link to="/Record">Record</Link></li>
          <li><Link to="/Study">Study</Link></li> 
          {/* <li><Link to="/Main">Personal Page</Link></li> */}
          {/* ... other links ... */}
        </ul>
      </nav>
    );
  }
export default Nav;
