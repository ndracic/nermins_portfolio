import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Aboutme from './Aboutme';
import Contact from './Contact';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Resume from './Resume';

// import { useState } from 'react';
// import '../styles/Navbar.css';

function Navbar() {
  return (
    <BrowserRouter>
    <nav>
    <ul className="navbar navbar-expand-lg navbar-light" id="mainNav">

      <li className="nav-item">
        <Link to="/resume">
          Resume
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/aboutme">
          Aboutme
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/projects">
          Projects
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
    </nav>

      <Routes>
        <Route path='aboutme' element={<Aboutme />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Navbar;
