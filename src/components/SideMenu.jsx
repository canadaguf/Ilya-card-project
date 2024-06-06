import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work-experience">Work Experience</Link></li>
        <li><Link to="/education">Education</Link></li>
      </ul>
    </div>
  );
}

export default SideMenu;